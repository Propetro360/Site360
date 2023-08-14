import { Icon } from "@fluentui/react";
import { BBAnchor as DreiBBAnchor, Html } from "@react-three/drei";
/*import { WELLHEAD_MAP } from "../../config/wellhead-mapping";
import { BBAnchor } from "../bb-anchor";
import { useContext, useEffect, useState } from "react";*/

export default function WellheadParams({ ...props }) {

    return (
        <>
            <DreiBBAnchor anchor={[-7.5, 6, 0]}>
                <Html>
                    <div className="sand_concentration">
                        <Icon iconName="HourGlass" />
                        453
                    </div>
                </Html>
            </DreiBBAnchor>
            <DreiBBAnchor anchor={[4.75, 6, 0]}>
                <Html>
                    <div className="total_rate">
                        <Icon iconName="Settings" />
                        5426
                    </div>
                </Html>
            </DreiBBAnchor>
            <DreiBBAnchor anchor={[-7.5, 7.5, 0]}>
                <Html>
                    <div className="pressure_one">
                        <Icon iconName="AutoRacing" />
                        77
                    </div>
                </Html>
            </DreiBBAnchor>
            <DreiBBAnchor anchor={[4.75, 7.5, 0]}>
                <Html>
                    <div className="pressure_two">
                        <Icon iconName="AutoRacing" />
                        74
                    </div>
                </Html>
            </DreiBBAnchor>
            <DreiBBAnchor anchor={[-7.5, 4.5, 0]}>
                <Html>
                    <div className="pressure_three">
                        <Icon iconName="AutoRacing" />
                        81
                    </div>
                </Html>
            </DreiBBAnchor>
            <DreiBBAnchor anchor={[4.75, 4.5, 0]}>
                <Html>
                    <div className="pressure_four">
                        <Icon iconName="AutoRacing" />
                        87
                    </div>
                </Html>
            </DreiBBAnchor>
        </>
    );
}