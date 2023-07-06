import { Stack, IconButton } from "@fluentui/react";
import * as React from "react";
import SiteList from "../site-list/site-list";
import "./side-bar.scss";

function SideBar(props) {
  

  const toggleSidebar = () => {
    props.setCollapsed(!props.collapsed);
  };

  return (
    <Stack className={`side-bar ${props.collapsed ? "collapsed" : ""}`} verticalFill>
      <h3 className="px-2">
        <IconButton
        className="uncollapse-btn"
          iconProps={{ iconName: "CollapseMenu" }}
          onClick={toggleSidebar}
        />
        <span style={{ fontSize: '25px' }}>(Sites)</span>
  <span style={{ marginRight: '96px' }}></span>
  <span style={{ fontSize: '10px', position: 'relative', top: '-25px', right:'-178px' }}>(Collapse)</span>
      </h3>
      <SiteList />
    </Stack>
  );
}

export default SideBar;