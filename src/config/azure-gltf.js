import { isMobile } from "../utils/utils";

const isMob = isMobile();
// gltf-pipeline -i blendersmall.glb --draco.compressionLevel 3
// gltf-pipeline -i pmpdeci.glb --draco.compressionLevel 3

const LOW_MODELS = {
  MISSILE: "https://s3.tebi.io/blobs/missile_p.glb",
  TRUCK: "https://s3.tebi.io/blobs/pump.glb",
  WELL_HEAD: "https://s3.tebi.io/blobs/well_head.glb",
  DATA_VAN: "https://s3.tebi.io/blobs/data_van.glb",
  BLENDER: "https://s3.tebi.io/blobs/blender_p.glb",
};

const HIGH_MODELS = {
  MISSILE: "https://s3.tebi.io/blobs/missile_p.glb",
  TRUCK: "https://s3.tebi.io/blobs/pump.glb",
  WELL_HEAD: "https://s3.tebi.io/blobs/well_head.glb",
  DATA_VAN: "https://s3.tebi.io/blobs/data_van.glb",
  BLENDER: "https://s3.tebi.io/blobs/blender_p.glb",
};

export const MODELS = isMob ? LOW_MODELS : HIGH_MODELS;
