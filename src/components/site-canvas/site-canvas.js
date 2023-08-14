import { Stack, Text } from "@fluentui/react";
import { AdaptiveEvents, Stats } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Leva, useControls } from "leva";
import { lazy, Suspense, useEffect, useRef } from "react";
import { HIDE_KEYS } from "../../config/hide-keys";
import { PUMPS } from "../../config/pumps";
import { UNIT_MAP } from "../../config/unit-mapping";

import CircleLoader from "../../shared/loader";
import { isMobile } from "../../utils/utils";
import CameraButton from "./camera/camera-btn";
import CameraHandler from "./camera/camera-handler";
import "./site-canvas.scss";
import { canvasStyle, perf, siteCamera } from "./site-config";
import SiteLights from "./site-lights";
// import SitePlayGround from "./site-playground/site-playground";
const SitePlayGround = lazy(() => import("./site-playground/site-playground"));

function SiteCanvas(props) {
  const domNodeRef = useRef(null);
  const isMob = isMobile();
  const selectionOptions = useControls(
    { "Select All": false },
    [props.pumpsData],
    { hidden: isMob }
  );

  useEffect(() => {
    if (selectionOptions["Select All"]) {
      props.setSelected(null);
    }
  }, [selectionOptions, props]);

  return (
    <Stack className="position-relative site-map-content" verticalFill>
      <div ref={domNodeRef} className="site-btns"></div>
      <Canvas
        id="site-map"
        style={canvasStyle}
        frameloop="demand"
        className="ms-depth-64"
        shadows
        camera={{
          position: [20, 15, 45], // Adjust the Z position to set the render distance
          near: 1, // Adjust the near clipping plane
          far: 115,
        }}// Adjust the far clipping plane
        performance={perf}
        onPointerMissed={(e) => {
          e.stopPropagation();
          props.setSelected(null);
        }}
      >
        <Suspense fallback={<CircleLoader text="blender" />}>
          <SiteLights />
          {props.pumpsData.length > 0 ?
           <SitePlayGround
            {...props}
            selectionOptions={selectionOptions}
            domNodeRef={domNodeRef}
          /> : null}
        </Suspense>
        <Stats showPanel={0} className="stats" {...props} />
        <AdaptiveEvents />

        <CameraHandler controlStyle={props.cameraType} />
      </Canvas>

      <CameraButton
        cameraType={props.cameraType}
        setCameraType={props.setCameraType}
      />
      <div className="site-controls">
        <Leva fill collapsed hidden={isMob} />
      </div>
      {props.selected ? (
        <div className="pump-stats">
          {Object.entries(
            props.pumpsData.find((x) => x["Pump Position"] === props.selected)
          )
            .filter((x, i) => !!x[1] && !HIDE_KEYS.includes(x[0]))
            .map((e, i) => (
              <Text key={i} block variant="large">
                <span className="ms-fontWeight-bold ms-fontColor-white">
                  {e[0]}: {e[1]} {UNIT_MAP[e[0]]}
                </span>
              </Text>
            ))}
        </div>
      ) : null}
    </Stack>
  );
}

export default SiteCanvas;
