"use strict";(self.webpackChunkpropetro_site3d=self.webpackChunkpropetro_site3d||[]).push([[511],{9511:function(e,r,n){n.r(r),n.d(r,{default:function(){return H}});var s=n(1413),a=n(9332),i=n(4026),t=n(2306),o=n(4647),P=n(9787),l=n(2791),u=["timestamp","Crew","Engine Coolant Temp","Engine Hours","Engine Load","Engine Oil Pressure","Engine RPM","FUEL RATE","Calc Horse Power","PE Oil Pressure","PE Oil Temp","PUMP RATE","TRANS GEAR","Trans Oil Pressure","Trans Temp","Voltage","Date","Discharge Pressure"],m=n(9192),p=n(7916),c=n(4584),E=n(7577),T=n(1318),g=n(1694),R=n.n(g),d=n(184);var C=function(e){return(0,d.jsx)("div",{className:"position-absolute camera-toggle-btn",children:(0,d.jsx)(a.K,{horizontal:!0,children:[{key:"map",text:"Map",iconProps:{iconName:"HandsFree"}},{key:"orbit",text:"Orbit",iconProps:{iconName:"Add"}}].map((function(r){return(0,d.jsx)(T.a,{className:R()("bg-themeLighter",{active:e.cameraType===r.key}),toggle:!0,checked:e.cameraType===r.key,iconProps:r.iconProps,onClick:function(n){return e.setCameraType(r.key)},children:(0,d.jsx)("span",{className:"ms-hiddenLgDown",children:r.text})},r.key)}))})})},O=n(4637),M=n(6895),h=function(e){return"orbit"===e.controlStyle?(0,d.jsx)(O.z,{makeDefault:!0,rotateSpeed:2,dampingFactor:.5,enableDamping:!0}):(0,d.jsx)(M.o,{makeDefault:!0,panSpeed:2})},L={position:[10,15,40],fov:50,near:.01,far:1e3},f={background:"#06061d",borderRadius:"8px"},S={current:1,min:.1,max:1,debounce:200,regress:function(){return null}},w=n(6734),D=n(3253),b=n(7826);var x=function(e){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(w.qA,{preset:"apartment"}),(0,d.jsx)("pointLight",{position:[10,10,10],intensity:.5}),(0,d.jsx)(D.I,{alignment:"top-right",renderPriority:99,children:(0,d.jsx)(b.L,{})})]})},k=(0,l.lazy)((function(){return Promise.all([n.e(923),n.e(810)]).then(n.bind(n,3810))}));var H=function(e){var r=(0,l.useRef)(null),n=(0,E.t)(),T=(0,P.M4)({"Select All":!1},[e.pumpsData],{hidden:n});return(0,l.useEffect)((function(){T["Select All"]&&e.setSelected(null)}),[T,e]),(0,d.jsxs)(a.K,{className:"position-relative site-map-content",verticalFill:!0,children:[(0,d.jsx)("div",{ref:r,className:"site-btns"}),(0,d.jsxs)(o.Xz,{id:"site-map",style:f,frameloop:"demand",className:"ms-depth-64",shadows:!0,camera:L,performance:S,onPointerMissed:function(r){r.stopPropagation(),e.setSelected(null)},children:[(0,d.jsxs)(l.Suspense,{fallback:(0,d.jsx)(c.Z,{}),children:[(0,d.jsx)(x,{}),(0,d.jsx)(k,(0,s.Z)((0,s.Z)({},e),{},{selectionOptions:T,domNodeRef:r}))]}),(0,d.jsx)(t.E,{}),(0,d.jsx)(h,{controlStyle:e.cameraType})]}),(0,d.jsx)(C,{cameraType:e.cameraType,setCameraType:e.setCameraType}),(0,d.jsx)("div",{className:"site-controls",children:(0,d.jsx)(P.Zf,{fill:!0,collapsed:!0,hidden:n})}),e.selected?(0,d.jsx)("div",{className:"pump-stats",children:Object.entries(m.r.find((function(r){return r["Pump Position"]===e.selected}))).filter((function(e,r){return!!e[1]&&!u.includes(e[0])})).map((function(e,r){return(0,d.jsx)(i.x,{block:!0,variant:"small",children:(0,d.jsxs)("span",{className:"ms-fontWeight-bold ms-fontColor-white",children:[e[0],": ",e[1]," ",p.Y[e[0]]]})},r)}))}):null]})}},9192:function(e,r,n){n.d(r,{r:function(){return s}});var s=[{timestamp:"2022-06-28T07:16:51.000-0500","Pump Position":1,Crew:"platinum",Date:"6/28/2022 7:16","Pump Name":4315,"Horse Power":"","Pump Rate":"","Calc Stroke Rate":"","Suction Pressure":"","Discharge Pressure":6487,"Engine Coolant Temp":176,"Engine Oil Pressure":45,"Engine RPM":750,"Engine Load":0,"Engine Hours":505,Voltage:28,"Trans Gear":0,"Trans Oil Pressure":13,"Trans Temp":181,"Calc Trans RPM":"","PE Oil Pressure":50,"PE Oil Temp":111,"Calc PE RPM":"","FE Vibration":-25,Brand:"AMI"},{timestamp:"2022-06-28T07:16:51.000-0500","Pump Position":4,Crew:"platinum",Date:"6/28/2022 7:16","Pump Name":4112,"Horse Power":4e3,"Pump Rate":"","Calc Stroke Rate":"","Suction Pressure":"","Discharge Pressure":6375,"Engine Coolant Temp":172,"Engine Oil Pressure":48,"Engine RPM":749,"Engine Load":30,"Engine Hours":16421,Voltage:27,"Trans Gear":2,"Trans Oil Pressure":18,"Trans Temp":181,"Calc Trans RPM":"","PE Oil Pressure":48,"PE Oil Temp":114,"Calc PE RPM":"","FE Vibration":2,Brand:"AMI"},{timestamp:"2022-06-28T07:16:51.000-0500","Pump Position":6,Crew:"platinum",Date:"6/28/2022 7:16","Pump Name":4307,"Horse Power":"","Pump Rate":"","Calc Stroke Rate":"","Suction Pressure":"","Discharge Pressure":1349,"Engine Coolant Temp":174,"Engine Oil Pressure":46,"Engine RPM":750,"Engine Load":0,"Engine Hours":21672,Voltage:26,"Trans Gear":0,"Trans Oil Pressure":10,"Trans Temp":180,"Calc Trans RPM":"","PE Oil Pressure":43,"PE Oil Temp":105,"Calc PE RPM":"","FE Vibration":19,Brand:"AMI"},{timestamp:"2022-06-28T07:16:51.000-0500","Pump Position":8,Crew:"platinum",Date:"6/28/2022 7:16","Pump Name":4323,"Horse Power":"","Pump Rate":"","Calc Stroke Rate":"","Suction Pressure":"","Discharge Pressure":6435,"Engine Coolant Temp":178,"Engine Oil Pressure":51,"Engine RPM":751,"Engine Load":0,"Engine Hours":9277,Voltage:28,"Trans Gear":0,"Trans Oil Pressure":13,"Trans Temp":181,"Calc Trans RPM":"","PE Oil Pressure":37,"PE Oil Temp":97,"Calc PE RPM":"","FE Vibration":-25,Brand:"AMI"},{timestamp:"2022-06-28T07:16:51.000-0500","Pump Position":12,Crew:"platinum",Date:"6/28/2022 7:16","Pump Name":4309,"Horse Power":"","Pump Rate":"","Calc Stroke Rate":"","Suction Pressure":"","Discharge Pressure":6377,"Engine Coolant Temp":176,"Engine Oil Pressure":48,"Engine RPM":751,"Engine Load":0,"Engine Hours":11464,Voltage:27,"Trans Gear":0,"Trans Oil Pressure":16,"Trans Temp":183,"Calc Trans RPM":"","PE Oil Pressure":41,"PE Oil Temp":96,"Calc PE RPM":"","FE Vibration":-25,Brand:"AMI"},{timestamp:"2022-06-28T07:16:51.000-0500","Pump Position":25,Crew:"platinum",Date:"6/28/2022 7:16","Pump Name":4147,"Horse Power":614.888,"Pump Rate":3.92,"Calc Stroke Rate":59.789,"Suction Pressure":"","Discharge Pressure":6401,"Engine Coolant Temp":176,"Engine Oil Pressure":72,"Engine RPM":1770,"Engine Load":42,"Engine Hours":12569.5,Voltage:26.7,"Trans Gear":2,"Trans Oil Pressure":42.8,"Trans Temp":186,"Calc Trans RPM":385.621,"PE Oil Pressure":102,"PE Oil Temp":111,"Calc PE RPM":60.699,"FE Vibration":"",Brand:"ROLL"},{timestamp:"2022-06-28T07:16:51.000-0500","Pump Position":26,Crew:"platinum",Date:"6/28/2022 7:16","Pump Name":4264,"Horse Power":446.781,"Pump Rate":2.871,"Calc Stroke Rate":43.785,"Suction Pressure":"","Discharge Pressure":6351,"Engine Coolant Temp":174,"Engine Oil Pressure":75,"Engine RPM":1765,"Engine Load":38,"Engine Hours":13376.2,Voltage:26.9,"Trans Gear":1,"Trans Oil Pressure":40.7,"Trans Temp":183,"Calc Trans RPM":282.4,"PE Oil Pressure":138.5,"PE Oil Temp":93,"Calc PE RPM":44.451,"FE Vibration":"",Brand:"ROLL"},{timestamp:"2022-06-28T07:16:51.000-0500","Pump Position":27,Crew:"platinum",Date:"6/28/2022 7:16","Pump Name":4226,"Horse Power":457.876,"Pump Rate":2.877,"Calc Stroke Rate":43.884,"Suction Pressure":"","Discharge Pressure":6494,"Engine Coolant Temp":174,"Engine Oil Pressure":75,"Engine RPM":1769,"Engine Load":0,"Engine Hours":21146,Voltage:26.6,"Trans Gear":1,"Trans Oil Pressure":43.1,"Trans Temp":183,"Calc Trans RPM":283.04,"PE Oil Pressure":210.1,"PE Oil Temp":102,"Calc PE RPM":44.552,"FE Vibration":"",Brand:"ROLL"},{timestamp:"2022-06-28T07:16:51.000-0500","Pump Position":28,Crew:"platinum",Date:"6/28/2022 7:16","Pump Name":4156,"Horse Power":457.922,"Pump Rate":2.884,"Calc Stroke Rate":43.983,"Suction Pressure":"","Discharge Pressure":6480,"Engine Coolant Temp":168,"Engine Oil Pressure":74,"Engine RPM":1773,"Engine Load":32,"Engine Hours":13641.5,Voltage:27.1,"Trans Gear":1,"Trans Oil Pressure":35.3,"Trans Temp":185,"Calc Trans RPM":283.68,"PE Oil Pressure":91.3,"PE Oil Temp":105,"Calc PE RPM":44.653,"FE Vibration":"",Brand:"ROLL"},{timestamp:"2022-06-28T07:16:51.000-0500","Pump Position":29,Crew:"platinum",Date:"6/28/2022 7:16","Pump Name":4178,"Horse Power":445.033,"Pump Rate":2.874,"Calc Stroke Rate":43.834,"Suction Pressure":"","Discharge Pressure":6319,"Engine Coolant Temp":170,"Engine Oil Pressure":78,"Engine RPM":1767,"Engine Load":17,"Engine Hours":14114.6,Voltage:27.2,"Trans Gear":1,"Trans Oil Pressure":35.7,"Trans Temp":183,"Calc Trans RPM":282.72,"PE Oil Pressure":119.9,"PE Oil Temp":107,"Calc PE RPM":44.502,"FE Vibration":"",Brand:"ROLL"},{timestamp:"2022-06-28T07:16:51.000-0500","Pump Position":31,Crew:"platinum",Date:"6/28/2022 7:16","Pump Name":4207,"Horse Power":449.426,"Pump Rate":2.85,"Calc Stroke Rate":43.462,"Suction Pressure":"","Discharge Pressure":6436,"Engine Coolant Temp":170,"Engine Oil Pressure":75,"Engine RPM":1752,"Engine Load":45,"Engine Hours":25591.2,Voltage:25.7,"Trans Gear":1,"Trans Oil Pressure":35.1,"Trans Temp":181,"Calc Trans RPM":280.32,"PE Oil Pressure":105.2,"PE Oil Temp":98,"Calc PE RPM":44.124,"FE Vibration":"",Brand:"ROLL"},{timestamp:"2022-06-28T07:16:51.000-0500","Pump Position":32,Crew:"platinum",Date:"6/28/2022 7:16","Pump Name":4230,"Horse Power":452.198,"Pump Rate":2.871,"Calc Stroke Rate":43.785,"Suction Pressure":"","Discharge Pressure":6428,"Engine Coolant Temp":170,"Engine Oil Pressure":78,"Engine RPM":1765,"Engine Load":38,"Engine Hours":11991.8,Voltage:27.1,"Trans Gear":1,"Trans Oil Pressure":40.9,"Trans Temp":179,"Calc Trans RPM":282.4,"PE Oil Pressure":94.1,"PE Oil Temp":100,"Calc PE RPM":44.451,"FE Vibration":"",Brand:"ROLL"},{timestamp:"2022-06-28T07:16:51.000-0500","Pump Position":33,Crew:"platinum",Date:"6/28/2022 7:16","Pump Name":4236,"Horse Power":455.948,"Pump Rate":2.879,"Calc Stroke Rate":43.909,"Suction Pressure":"","Discharge Pressure":6463,"Engine Coolant Temp":172,"Engine Oil Pressure":77,"Engine RPM":1770,"Engine Load":34,"Engine Hours":10975.2,Voltage:26.9,"Trans Gear":1,"Trans Oil Pressure":36.3,"Trans Temp":185,"Calc Trans RPM":283.2,"PE Oil Pressure":83.9,"PE Oil Temp":-25,"Calc PE RPM":44.577,"FE Vibration":"",Brand:"ROLL"},{timestamp:"2022-06-28T07:16:51.000-0500","Pump Position":34,Crew:"platinum",Date:"6/28/2022 7:16","Pump Name":4250,"Horse Power":453.137,"Pump Rate":2.869,"Calc Stroke Rate":43.76,"Suction Pressure":"","Discharge Pressure":6445,"Engine Coolant Temp":170,"Engine Oil Pressure":77,"Engine RPM":1764,"Engine Load":40,"Engine Hours":12049.4,Voltage:26.9,"Trans Gear":1,"Trans Oil Pressure":41.4,"Trans Temp":179,"Calc Trans RPM":282.24,"PE Oil Pressure":111,"PE Oil Temp":91,"Calc PE RPM":44.426,"FE Vibration":"",Brand:"ROLL"}]},7916:function(e,r,n){n.d(r,{Y:function(){return s}});var s={"Calc Pump Rate":" rpm","Calc Stroke Rate":" Stroke/min","Calc Trans RPM":" rpm","Pump Rate":" psi","Suction Pressure":" psi","DUAL FUEL RATIO":" %","Engine Coolant Temp":" degF","Engine Hours":"  h","Engine Load":" %","Engine Oil Pressure":" psi","Engine RPM":"  rpm","FUEL RATE":" gal/hr","Calc Horse Power":" hp","PE Oil Pressure":" psi","PE Oil Temp":" degF","Trans Gear":" ","Trans Oil Pressure":" psi","Trans Temp":" degF",Voltage:" V","Calc PE RPM":" rpm","FE Vibration":" %"}},4584:function(e,r,n){var s=n(195),a=n(4956),i=n(184);r.Z=function(){return(0,i.jsx)(a.V,{children:(0,i.jsx)(s.$,{ariaLive:"assertive",labelPosition:"top"})})}}}]);
//# sourceMappingURL=511.1240d661.chunk.js.map