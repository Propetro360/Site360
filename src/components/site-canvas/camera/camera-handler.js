import { useRef } from "react";
import { MapControls, OrbitControls } from "@react-three/drei";

const CameraHandler = (props) => {
  const controlsRef = useRef(null);

  const handleControlsChange = () => {
    if (controlsRef.current) {
      const { isRotating } = controlsRef.current;
      if (isRotating && !controlsRef.current.mouseButtons.ORBIT) {
        controlsRef.current.dispose(); // Stop rotation if not using the orbit mouse button
      }
    }
  };

  if (props.controlStyle === "orbit") {
    return (
      <OrbitControls
        ref={controlsRef}
        makeDefault
        rotateSpeed={0.2}
        autoRotate={false}
        onChange={handleControlsChange}
        minDistance={10} // Set the minimum distance (adjust according to your needs)
        maxDistance={80} // Set the maximum distance (adjust according to your needs)
      />
    );
  }

  return (
    <MapControls
      ref={controlsRef}
      makeDefault
      panSpeed={0.6}
      autoRotate={false}
      onChange={handleControlsChange}
      minDistance={10} // Set the minimum distance (adjust according to your needs)
      maxDistance={80} // Set the maximum distance (adjust according to your needs)
    />
  );
};

export default CameraHandler;