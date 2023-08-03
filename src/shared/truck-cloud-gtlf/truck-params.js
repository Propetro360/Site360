import { Icon } from "@fluentui/react";
import { BBAnchor as DreiBBAnchor, Html } from "@react-three/drei";
import { DEFAULT_TRUCK_CONFIG } from "../../config/constants";
import { UNIT_MAP } from "../../config/unit-mapping";
import { BBAnchor } from "../bb-anchor";

export default function TruckParams({ ...props }) {
  const { engine, trans, pe, fe, chassis } = DEFAULT_TRUCK_CONFIG;
  
  return (
    <>
      {props.node.name === engine && props.pump["Engine Load"] ? (
        <BBAnchor anchor={[0, 0, 0]}>
          <Html>
            <div className="engine-content">
              <Icon iconName="AdminELogoInverse32" />
              {Number(props.pump["Engine Load"]).toFixed(1) + UNIT_MAP["Engine Load"]}
            </div>
          </Html>
        </BBAnchor>
      ) : null}
      {props.node.name === trans && props.pump["Trans Gear"] ? (
        <DreiBBAnchor anchor={[0.5, 0.5, 0.5]}>
          <Html>
            <div className="transGear-content">
              <Icon iconName="Settings" />
              {Number(props.pump["Trans Gear"]).toFixed(1) + UNIT_MAP["Trans Gear"]}
            </div>
          </Html>
        </DreiBBAnchor>
      ) : null}
      {props.node.name === fe && props.pump["Horse Power"] ? (
        <BBAnchor anchor={[1, 1, 1]}>
          <Html>
            <div className="horsePower-content">
              <Icon iconName="PowerButton" />
              {Number(props.pump["Horse Power"]).toFixed(1) + UNIT_MAP["Calc Horse Power"]}
            </div>
          </Html>
        </BBAnchor>
      ) : null}
      {props.node.name === pe && props.pump["Pump Rate"] ? (
        <BBAnchor anchor={[2, 2.5, 1.5]}>
          <Html>
            <div className="pumpRate-content">
              <Icon iconName="Financial" />

              {Number(props.pump["Pump Rate"]).toFixed(1) + UNIT_MAP["Pump Rate"]}
            </div>
          </Html>
        </BBAnchor>
      ) : null}
      {props.node.name === chassis ? (
        <BBAnchor anchor={[2, 2, 2]}>
          <Html>
            <div className="chassis-content">
              <Icon iconName="NumberSymbol" />
              {props.pump["Pump Position"]}
            </div>
          </Html>
        </BBAnchor>
      ) : null}
    </>
  );
}
