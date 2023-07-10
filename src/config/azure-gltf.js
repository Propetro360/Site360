import { isMobile } from "../utils/utils";

const isMob = isMobile();
// gltf-pipeline -i blendersmall.glb --draco.compressionLevel 3

const LOW_MODELS = {
  MISSILE: "https://propetro3dmodels.blob.core.windows.net/models/missile.glb",
  TRUCK: "https://propetro3dmodels.blob.core.windows.net/models/pump+truck.glb",
  WELL_HEAD: "https://propetro3dmodels.blob.core.windows.net/models/well_head.glb",
  DATA_VAN: "https://propetro3dmodels.blob.core.windows.net/models/data_van.glb",
  BLENDER: "https://propetro3dmodels.blob.core.windows.net/models/blender.glb"
};

const HIGH_MODELS = {
  MISSILE: "https://propetro3dmodels.blob.core.windows.net/models/missile.glb",
  TRUCK: "https://propetro3dmodels.blob.core.windows.net/models/pump+truck.glb",
  WELL_HEAD: "https://propetro3dmodels.blob.core.windows.net/models/well_head.glb",
  DATA_VAN: "https://propetro3dmodels.blob.core.windows.net/models/data_van.glb",
  BLENDER: "https://propetro3dmodels.blob.core.windows.net/models/blender.glb",
};

export const MODELS = isMob ? LOW_MODELS : HIGH_MODELS;
