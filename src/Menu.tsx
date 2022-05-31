import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { useCallback, useEffect, useState } from "react";

import MenuButton from "./MenuButton";
import SettingsControl from "./SettingsControl";
import RoundsDisplay from "./RoundsDisplay";
import { buttonSize } from "./Utils";

function Menu(props: MenuProps) {
  const getLowerPart = useCallback((props: MenuProps) => {
    return props.displaySize > 500 ? (
      <div
        style={{
          display: "grid",
          gridAutoFlow: "column",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <MenuButton {...{ ...props, icon: faPlay, action: props.start }} />
        <RoundsDisplay {...props} />
      </div>
    ) : (
      <MenuButton {...{ ...props, icon: faPlay, action: props.start }} />
    );
  }, []);

  const [overlayStyle, setOverlayStyle] = useState(
    getOverlayStyle(props.displaySize)
  );
  const [menuStyle, setMenuStyle] = useState(getMenuStyle(props.displaySize));
  const [buttonsStyle, setButtonsStyle] = useState(
    getButtonsStyle(props.displaySize)
  );
  const [lowerPart, setLowerPart] = useState(getLowerPart(props));

  function getOverlayStyle(displaySize: number): React.CSSProperties {
    const size = String(displaySize) + "px";
    return {
      width: size,
      height: size,
      position: "absolute" as "absolute",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      pointerEvents: "none",
    };
  }

  function getMenuStyle(displaySize: number): React.CSSProperties {
    const size = displaySize > 500 ? "300px" : buttonSize(displaySize);
    return {
      zIndex: "2",
      borderRadius: "50%",
      border: "8px solid #333",
      backgroundColor: "whitesmoke",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      width: size,
      height: size,
      pointerEvents: "auto",
    };
  }

  function getButtonsStyle(displaySize: number): React.CSSProperties {
    const gridAutoFlow = displaySize > 500 ? "row" : "column";
    const gap = displaySize > 500 ? "32px" : "10px";
    return {
      display: "grid",
      gridAutoFlow: gridAutoFlow,
      justifyContent: "center",
      gap: gap,
    };
  }

  useEffect(() => {
    setOverlayStyle(getOverlayStyle(props.displaySize));
    setMenuStyle(getMenuStyle(props.displaySize));
    setButtonsStyle(getButtonsStyle(props.displaySize));
    setLowerPart(getLowerPart(props));
  }, [props, getLowerPart]);

  return (
    <div style={overlayStyle}>
      <div style={menuStyle}>
        <div style={buttonsStyle}>
          <SettingsControl {...props} />
          {lowerPart}
        </div>
      </div>
    </div>
  );
}

export default Menu;
