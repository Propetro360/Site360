import { useMemo } from "react";
import { MeshBasicMaterial, MeshStandardMaterial } from "three";
import { isMobile } from "../../../utils/utils";

export const useMemoisedScene = (scene, isFast) => {
  const isMob = isMobile();

  const copiedScene = useMemo(() => {
    const smallObj = [];
    scene.traverse((o) => {
      if (!o.isMesh) {
        return;
      }
      var prevMaterial = o.material;
      let radius = o.geometry?.boundingSphere.radius;
      if (radius > 10 && radius < 30) {
        smallObj.push(o);
      }
      if (radius < 300) {
        o.material = new MeshBasicMaterial({
          color: prevMaterial.color,
          reflectivity: 1,
        });
      } else {
        o.material = new MeshStandardMaterial({
          color: prevMaterial.color,
          metalness: 1,
          emissive: 1,
          roughness: prevMaterial.roughness ?? 0.5,
        });
      }
    });

    smallObj.forEach((o) => {
      o.removeFromParent();
    });

    return scene.clone();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scene.uuid]);

  return { copiedScene };
};

export const ROTATION_LEFT = [0, Math.PI / 2, 0];
export const ROTATION_RIGHT = [0, -Math.PI / 2, 0];
const SEPERATION_UNIT = 18;
const DISTANCE_BTW_PUMPTRUCK = 5;

export const getPos = (LEFT_POS_START, i, isOnFocus) => {
  return [ 
    LEFT_POS_START <= i ? SEPERATION_UNIT : -SEPERATION_UNIT,
    3 + isOnFocus * 10,
    (i % LEFT_POS_START) * DISTANCE_BTW_PUMPTRUCK,
  ];
};

export const WELL_HEAD_POS = [0, 3, -10];
export const DATA_VAN_POS = [30, 4.9, -6];
export const BLENDER_VAN_POS = [8, 3, 40];
export const MISSILE_POS = [0, 3, 20];
export const MISSILE_NODE_POS = [-0.4, 4.2, 15];
export const DATA_VAN_ROT = [0, Math.PI / 1, 0];
export const B_VAN_ROT = [0, Math.PI / 2, 0];