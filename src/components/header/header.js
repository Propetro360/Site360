import { useIsAuthenticated } from "@azure/msal-react";
import {} from "@fluentui/react";
import { SignInButton } from "../../shared/sign-in-btn";
import { SignOutButton } from "../../shared/sign-out-btn";
import { OverflowSet, Stack } from "@fluentui/react";
import { PrimaryButton } from "@fluentui/react/lib/Button";
import SidePanelBtn from "../side-panel/side-panel";
import "./header.css";

function Header() {
  const isAuthenticated = useIsAuthenticated();
  const onRenderItem = (item) => {
    if (item.onRender) {
      return item.onRender(item);
    }
    return (
      <PrimaryButton
        className = "ms-hiddenLgDown"
        iconProps = {{ iconName: item.icon }}
        menuProps = {item.subMenuProps}
        text = {item.name}
      />
    );
  };

  const onRenderOverflowButton = (overflowItems) => {
    const buttonStyles = {
      root: {
        minWidth: 0,
        padding: "0 4px",
        alignSelf: "stretch",
        height: "auto",
      },
    };
    return (
      <PrimaryButton
        ariaLabel = "More items"
        styles = {buttonStyles}
        className = "ms-Button ms-Button--primary root-122"
        menuIconProps = {{ iconName: "More" }}
        menuProps = {{ items: overflowItems }}
      />
    );
  };

  return (
    <div className = "app-header">
      <Stack
        horizontal
        verticalAlign = "center"
        horizontalAlign = "space-between"
        tokens = {{ padding: "0.75rem" }}
      >
        <SidePanelBtn />
        <img
          src="https://d1io3yog0oux5.cloudfront.net/_095300291fa1e4b626a3ffdcc5fc423f/propetroservices/files/theme/images/header-logo.svg"
          alt="ProPetro logo"
          style={{ width: "14rem" }}
        />
        <OverflowSet
          items = {[
            {
              key: "site35",
              name: "Site 3D",
              icon: "DonutChart",
            },
            {
              key: "configure",
              name: "Configure",
              icon: "Equalizer",
            },
            {
              key: "login",
              onRender: () => {
                return isAuthenticated ? <SignOutButton /> : <SignInButton />;
              },
            },
          ]}
          onRenderOverflowButton = {onRenderOverflowButton}
          onRenderItem = {onRenderItem}
        />
      </Stack>
    </div>
  );
}

export default Header;
