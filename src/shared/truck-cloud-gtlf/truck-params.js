import { Icon } from "@fluentui/react";
import { BBAnchor as DreiBBAnchor, Html } from "@react-three/drei";
import { DEFAULT_TRUCK_CONFIG } from "../../config/constants";
import { UNIT_MAP } from "../../config/unit-mapping";
import { BBAnchor } from "../bb-anchor";
import { useContext, useEffect, useState } from "react";
import { SiteConfigContext } from "../../utils/site-config-context";

export default function TruckParams({ ...props }) {
  const { engine, trans, pe, fe, chassis } = DEFAULT_TRUCK_CONFIG;
  const { pumpsData } = useContext(SiteConfigContext);
  const pump  = pumpsData.find((x) => x["Pump Position"] === props.pump["Pump Position"])
  return (
    <>
      {props.node.name === engine && pump["Disch Pressure"] ? (
        <BBAnchor anchor={[1, 1, 1]}>
          <Html>
            <div className="dischPressure-content">
              <Icon iconName="Freezing" />
              {Number(pump["Disch Pressure"]).toFixed(1) +
                UNIT_MAP["Disch Pressure"]}
            </div>
          </Html>
        </BBAnchor>
      ) : null}
      {props.node.name === engine && pump["Engine RPM"] ? (
        <BBAnchor anchor={[2, 2, 2]}>
          <Html>
            <div className="engineRPM-content">
              <Icon iconName="SpeedHigh" />
              {Number(pump["Engine RPM"]).toFixed(1) + UNIT_MAP["Engine RPM"]}
            </div>
          </Html>
        </BBAnchor>
      ) : null}
      {props.node.name === engine && pump["Engine Load"] ? (
        <BBAnchor anchor={[3, 3, 3]}>
          <Html>
            <div className="engine-content">
              <Icon iconName="AdminELogoInverse32" />
              {Number(pump["Engine Load"]).toFixed(1) + UNIT_MAP["Engine Load"]}
            </div>
          </Html>
        </BBAnchor>
      ) : null}
      {props.node.name === trans && pump["Trans Gear"] ? (
        <DreiBBAnchor anchor={[0.5, 0.5, 0.5]}>
          <Html>
            <div className="transGear-content">
              <Icon iconName="Settings" />
              {Number(pump["Trans Gear"]).toFixed(1) + UNIT_MAP["Trans Gear"]}
            </div>
          </Html>
        </DreiBBAnchor>
      ) : null}
      {props.node.name === fe && pump["Horse Power"] ? (
        <BBAnchor anchor={[-1, -1, -1]}>
          <Html>
            <div className="horsePower-content">
              <Icon iconName="PowerButton" />
              {Number(pump["Horse Power"]).toFixed(1) +
                UNIT_MAP["Calc Horse Power"]}
            </div>
          </Html>
        </BBAnchor>
      ) : null}
      {props.node.name === pe && pump["Pump Rate"] ? (
        <BBAnchor anchor={[5, 5, 5]}>
          <Html>
            <div className="pumpRate-content">
              <Icon iconName="Financial" />

              {Number(pump["Pump Rate"]).toFixed(1) + UNIT_MAP["Pump Rate"]}
            </div>
          </Html>
        </BBAnchor>
      ) : null}
      {props.node.name === chassis ? (
        <BBAnchor anchor={[0, 0, 0]}>
          <Html>
            <div className="chassis-content">
              <Icon iconName="NumberSymbol" />
              {pump["Pump Position"]}
            </div>
          </Html>
        </BBAnchor>
      ) : null}
    </>
  );
}
