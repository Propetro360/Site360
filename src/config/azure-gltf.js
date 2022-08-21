import { isMobile } from "../utils/utils";

const isMob = isMobile();
// gltf-pipeline -i blendersmall.glb --draco.compressionLevel 3
// gltf-pipeline -i pmpdeci.glb --draco.compressionLevel 3

const LOW_MODELS = {
  MISSILE: "https://site3d.blob.core.windows.net/site3d-models/missileRed.glb",
  TRUCK: "https://site3d.blob.core.windows.net/site3d-models/pmpsmall.glb",
  WELL_HEAD: "https://site3d.blob.core.windows.net/site3d-models/threeWell.glb",
  DATA_VAN: "https://site3d.blob.core.windows.net/site3d-models/dVan.glb",
  BLENDER: "https://site3d.blob.core.windows.net/site3d-models/blenderS.glb",
};

const HIGH_MODELS = {
  MISSILE: "https://site3d.blob.core.windows.net/site3d-models/missileRed.glb",
  TRUCK: "https://site3d.blob.core.windows.net/site3d-models/pmpsmall.glb",
  WELL_HEAD: "https://site3d.blob.core.windows.net/site3d-models/threeWell.glb",
  DATA_VAN: "https://site3d.blob.core.windows.net/site3d-models/dVan.glb",
  BLENDER: "https://site3d.blob.core.windows.net/site3d-models/blenderS.glb",
};

export const MODELS = isMob ? LOW_MODELS : HIGH_MODELS;
