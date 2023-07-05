export const siteCamera = {
  position: [30, 15, 50],
  fov: 50,
  near: 0.01,
  far: 1000,
};

export const canvasStyle = {
  background: "#C4A484",
  // background: "#354c74",
  borderRadius: "8px",
};

export const perf = {
  current: 1,
  min: 0.1,
  max: 1,
  debounce: 200,
  regress: () => null,
};
