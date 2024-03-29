import { meshBounds, useCursor, useGLTF, BBAnchor as DreiBBAnchor, Html } from "@react-three/drei";
import { forwardRef, useMemo, useRef, useState } from "react";
import { MeshBasicMaterial, MeshStandardMaterial } from "three";
import { isMobile } from "../../utils/utils";
import WellheadParams from "./wellhead-params";
import { Icon } from "@fluentui/react";

import "./wellhead-gtlf.scss";

export const WellHeadGTLF = forwardRef((props, ref) => {
  const { scene } = useGLTF(props.cloudGlbURL);
  const [hovered, set] = useState();
  useCursor(hovered, "pointer");

  // const group = useRef();
  const isMob = isMobile();

  const copiedScene = useMemo(() => {
    scene.children.forEach(function (m) {
      if (m.isMesh) {
        if (props.fast || isMob) {
          m.material = new MeshBasicMaterial({ color: m.material.color });
        } else {
          m.material = new MeshStandardMaterial({
            color: m.material.color,
            metalness: 1,
            emissive: 1,
            roughness: 0.5,
          });
        }
      }
    });
    return scene.clone();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scene.uuid]);

  const onPointerOver = (e) => {
    e.stopPropagation();
    set(true);
  };

  const onPointerOut = (e) => {
    e.stopPropagation();
    set(false);
  };

  if (props.fast) {
    return (
      <group
        ref={ref}
        {...props}
        dispose={null}
        onPointerOver={onPointerOver}
        onPointerOut={onPointerOut}
      >
        <primitive object={copiedScene} />
        {hovered ? <WellheadParams /> : null}
      </group>
    );
  }

  return (
    <group
      ref={ref}
      {...props}
      dispose={null}
      onPointerOver={onPointerOver}
      onPointerOut={onPointerOut}
      className="cursor-pointer"
    >
      {copiedScene.children.map((_, i) => (
        <WellHeadGTLFGroup
          key={i + _.name}
          {...props}
          node={_}
          index={i}
          onPointerOver={onPointerOver}
          onPointerOut={onPointerOut}
          //onHover={() => props.onHover(ref)}
        />
      ))}
      {hovered ? <WellheadParams /> : null}


    </group>
  );
});

function WellHeadGTLFGroup({ ...props }) {
  const meshRef = useRef();
  // useBVH(meshRef);

  if (props.node.type === "Group") {
    return (
      <group
        rotation={props.node.rotation}
        position={props.node.position}
        scale={props.node.scale}
        frustumCulled
      >
        {props.node.children.length > 0 &&
          props.node.children.map((_, i) => (
            <WellHeadGTLFGroup key={i + _.name} {...props} node={_} index={i} />

          ))}

      </group>
    );
  }
  return (
    <mesh
      geometry={props.node.geometry}
      material={props.node.material}
      rotation={props.node.rotation}
      position={props.node.position}
      ref={meshRef}
      raycast={meshBounds}
      scale={props.node.scale}
      onPointerOver={(e) => {
        e.stopPropagation();
        //props.onHover(meshRef);
        props.onPointerOver(e);
      }}
      onPointerOut={(e) => {
        e.stopPropagation();
        //props.onHover(null);
        props.onPointerOut(e);
      }}
      onClick={(e) => {
        e.stopPropagation();
        //props.onHover(meshRef);
      }}
    >
      {props.node.children.length > 0 &&
        props.node.children.map((_, i) => (
          <WellHeadGTLFGroup key={i + _.name} {...props} node={_} index={i} />
        ))}

    </mesh>
  );
}

export default WellHeadGTLF;
