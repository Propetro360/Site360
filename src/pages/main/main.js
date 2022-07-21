import { Stack } from "@fluentui/react";
import { useEffect, useState } from "react";
import { getIntelliData } from "../../api/post";
import SideBar from "../../components/side-bar/side-bar";
import SiteCanvas from "../../components/site-canvas/site-canvas";
import "./main.css";

function Main() {
  const [cameraType, setCameraType] = useState("map");
  const [pumpsData, setPumpsData] = useState([]);
  const [selected, setSelected] = useState(null);
  const [isAllSelected, setIsAllSelected] = useState(null);
  const [alertedParts, setAlertedParts] = useState(null);

  useEffect(() => {
    getIntelliData().then((d) => {
      const copy = Object.entries(d).map(([k, v], i) => {
        const m = {};
        v.forEach((p) => {
          m[p.mnemonic_name] = p.value;
        });
        return { ...m, "Pump Position": k };
      });
      console.log(copy);
      setPumpsData(copy);
    });
  }, []);
  const toggleSelected = (id) => {
    if (selected && selected === id) {
      setSelected(null);
    } else {
      setSelected(id);
    }
  };

  return (
    <Stack horizontal wrap verticalFill className="main-page">
      <Stack.Item grow={1} className="p-0 ms-hiddenLgDown">
        <SideBar />
      </Stack.Item>
      <Stack.Item grow={1} className="pb-2 m-2">
        <SiteCanvas
          cameraType={cameraType}
          setCameraType={setCameraType}
          selected={selected}
          setSelected={toggleSelected}
          isAllSelected={isAllSelected}
          setIsAllSelected={setIsAllSelected}
          alertedParts={alertedParts}
          pumpsData={pumpsData}
          setAlertedParts={(p) => {
            setAlertedParts(p);
          }}
        />
      </Stack.Item>
    </Stack>
  );
}

export default Main;
