import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import SideBar from "../../components/side-bar/side-bar";
import SiteMap from "../../components/site-map/site-map";
import DataCard from "../../shared/data-card";
import "./main.css";

function Main() {
  const [cameraType, setCameraType] = useState("map");
  const [selected, setSelected] = useState(null);
  return (
    <Row md={4} className="main-page px-1 pb-2">
      <Col className="d-sm-none d-md-flex" md={2}>
        <SideBar />
      </Col>
      <Col xs="12" md="10" className="p-0">
        <SiteMap
          cameraType={cameraType}
          setCameraType={setCameraType}
          selected={selected}
          setSelected={setSelected}
        />
        <DataCard assetId={selected} />
      </Col>
    </Row>
  );
}

export default Main;
