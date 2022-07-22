import { Select, useBVH, useCursor, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { MODELS } from "../../config/azure-gltf";
import "./truck-cloud-gtlf.scss";
import TruckParams from "./truck-params";
// const TRUCK_PARAM_NODES = Object.values(DEFAULT_TRUCK_CONFIG);

export default function TruckCloudGTLF({ ...props }) {
  const { scene } = useGLTF(props.cloudGlbURL);
  const group = useRef();

  useFrame(() => (group.current.visible = props.show), []);

  const copiedScene = useMemo(() => {
    scene.traverse((o) => {
      if (!o.isMesh) return;
      var prevMaterial = o.material;
      if (o.geometry?.boundingSphere.radius > 600) {
        o.material = new THREE.MeshBasicMaterial({
          color: prevMaterial.color,
          map: prevMaterial.map,
          envMap: prevMaterial.envMap,
        });
      } else {
        o.material = new THREE.MeshBasicMaterial({
          color: prevMaterial.color,
          map: prevMaterial.map,
          envMap: prevMaterial.envMap,
        });
      }
    });
    return scene.clone();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scene.uuid]);

  if (props.fast) {
    return (
      <group ref={group} {...props} dispose={null}>
        <Select
          box
          multiple
          onChange={(m) => {
            if (m[0]) {
              console.log(m[0]);
              props.onHover(m[0]);
              props.onClick(true);
            }
          }}
        >
          <primitive object={copiedScene} />
        </Select>
      </group>
    );
  }

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      rotateOnAxis={{ axis: [0, 0, 0], angle: 3.14 / 2 }}
      frustumCulled
    >
      {copiedScene.children.map((_, i) => (
        <TruckCloudGTLFGroup key={i + _.name} {...props} node={_} index={i} />
      ))}
    </group>
  );
}

function TruckCloudGTLFGroup({ ...props }) {
  const meshRef = useRef();
  const [hovered, set] = useState();
  useCursor(hovered, "pointer");

  useBVH(meshRef);
  if (props.node?.geometry?.boundingSphere.radius < 50) {
    return;
  }

  if (props.node.type.toLowerCase() !== "mesh") {
    return (
      <group
        rotation={props.node.rotation}
        position={props.node.position}
        scale={props.node.scale}
        frustumCulled
      >
        {props.node.children.length > 0 &&
          props.node.children.map((_, i) => (
            <TruckCloudGTLFGroup
              key={i + _.name}
              {...props}
              node={_}
              index={i + props.index}
            />
          ))}
      </group>
    );
  }

  if (props.node.type.toLowerCase() === "mesh") {
    // const geometry = new THREE.BufferGeometry({ ...props.node.geometry });
    return (
      <mesh
        geometry={props.node.geometry}
        material={props.node.material}
        rotation={props.node.rotation}
        position={props.node.position}
        ref={meshRef}
        scale={props.node.scale}
        onPointerOver={(e) => {
          e.stopPropagation();
          props.onHover(meshRef);
          set(true);
        }}
        onPointerOut={() => {
          set(false);
          props.onHover(null);
        }}
        onClick={(e) => {
          e.stopPropagation();
          props.onClick(true);
          console.log(props.node.name);
          // invalidate(0);
        }}
        frustumCulled
      >
        {props.node.children.length > 0 &&
          props.node.children.map((_, i) => (
            <TruckCloudGTLFGroup
              key={i + _.name}
              {...props}
              node={_}
              index={i + props.index}
            />
          ))}
        {props.isActive ? <TruckParams {...props} /> : null}
      </mesh>
    );
  }
}

useGLTF.preload(MODELS.TRUCK);
