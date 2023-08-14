import { Spinner, Stack } from "@fluentui/react";
import { useState, useEffect, useContext } from "react";
import { getIntelliData, getPulledData } from "../../api/post";
import SideBar from "../../components/side-bar/side-bar";
import { convertIntelliData, convertPulledData } from "../../utils/pump";
import "./main.css";
// const SiteCanvas = lazy(() =>
//   import("../../components/site-canvas/site-canvas")
// );
import SiteCanvas from "../../components/site-canvas/site-canvas";
import { useInterval } from "../../utils/utils";
import { SiteConfigContext } from "../../utils/site-config-context";
function Main() {
  const [cameraType, setCameraType] = useState("orbit");
  const [pumpsData, setPumpsData] = useState([]);
  const [selected, setSelected] = useState(null);
  const [isAllSelected, setIsAllSelected] = useState(null);
  const [alertedParts, setAlertedParts] = useState(null);
  const [loading, setLoading] = useState(null);
  const [interval, setInterval] = useState(30);
  const [collapsed, setCollapsed] = useState(false);
  const { setPumpsData: setContextPumpsData } = useContext(SiteConfigContext);

  // const callAPI = (shouldLoad) => {
  //   shouldLoad ?? setLoading(true);
  //   getIntelliData().then((d) => {

  //     const copy = convertIntelliData(d);
  //     console.log(copy)
  //     setPumpsData(copy);
  //     if (!copy.length) {
  //       setInterval(500);
  //     }
  //     shouldLoad ?? setLoading(false);
  //   });
  // };

  // just first call
  // useEffect(() => {
  //   callAPI(true);
  // }, []);

  // useInterval(() => {
  //   callAPI(false);
  // }, 1000 * interval);

  const pullAPI = (shouldLoad) => {
    shouldLoad ?? setLoading(true);
    getPulledData().then((d) => {
      setContextPumpsData(d);
      setPumpsData(d);
      if (!d.length) {
        setInterval(500);
      }
      shouldLoad ?? setLoading(false);
    });
  };

  useEffect(() => {
    pullAPI(true);
  }, []);

  useInterval(() => {
    pullAPI(false);
  }, 1000 * interval);

  return (
    <Stack horizontal wrap verticalFill className="main-page">
      {/* <ExpandBtn showSideBar={showSideBar} setShowSideBar={setShowSideBar} />  */}
      <Stack.Item grow={1} className="p-0 ms-hiddenMdDown position-relative">
        <SideBar collapsed={collapsed} setCollapsed={setCollapsed} />
      </Stack.Item>
      <Stack.Item
        className="pb-2 m-2 "
        style={{ width: collapsed ? "98.3vw" : "84vw" }}
      >
        {!loading ? (
          <SiteCanvas
            cameraType={cameraType}
            setCameraType={setCameraType}
            selected={selected}
            setSelected={setSelected}
            isAllSelected={isAllSelected}
            setIsAllSelected={setIsAllSelected}
            alertedParts={alertedParts}
            pumpsData={pumpsData}
            setAlertedParts={(p) => {
              setAlertedParts(p);
            }}
          />
        ) : (
          <Spinner />
        )}
      </Stack.Item>
    </Stack>
  );
}

export default Main;
