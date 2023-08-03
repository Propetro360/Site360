import { Icon } from "@fluentui/react";
import { BBAnchor as DreiBBAnchor, Html } from "@react-three/drei";

export default function WellheadParams({ ...props }) {

    return (
        <>
            <DreiBBAnchor anchor={[-3.5, 1.25, 0]}>
                <Html>
                    <div className="sand_concentration">
                        <Icon iconName="HourGlass" />
                        453
                    </div>
                </Html>
            </DreiBBAnchor>
            <DreiBBAnchor anchor={[0.75, 1.25, 0]}>
                <Html>
                    <div className="total_rate">
                        <Icon iconName="Settings" />
                        5426
                    </div>
                </Html>
            </DreiBBAnchor>
            <DreiBBAnchor anchor={[-3.5, 2, 0]}>
                <Html>
                    <div className="pressure_one">
                        <Icon iconName="AutoRacing" />
                        77
                    </div>
                </Html>
            </DreiBBAnchor>
            <DreiBBAnchor anchor={[0.75, 2, 0]}>
                <Html>
                    <div className="pressure_two">
                        <Icon iconName="AutoRacing" />
                        74
                    </div>
                </Html>
            </DreiBBAnchor>
            <DreiBBAnchor anchor={[-3.5, 0.5, 0]}>
                <Html>
                    <div className="pressure_three">
                        <Icon iconName="AutoRacing" />
                        81
                    </div>
                </Html>
            </DreiBBAnchor>
            <DreiBBAnchor anchor={[0.75, 0.5, 0]}>
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