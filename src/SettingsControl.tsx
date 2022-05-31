import { faCog } from "@fortawesome/free-solid-svg-icons";

import MenuButton from "./MenuButton";
import SettingsControlButton from "./SettingsControlButton";

function SettingsControl(props: MenuProps) {
  return props.displaySize > 600 ? (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <SettingsControlButton
        {...{ ...props, thisDifficulty: { name: "Лёгкий", value: 1500 } }}
      />
      <SettingsControlButton
        {...{ ...props, thisDifficulty: { name: "Средний", value: 1000 } }}
      />
      <SettingsControlButton
        {...{ ...props, thisDifficulty: { name: "Сложный", value: 400 } }}
      />
    </div>
  ) : (
    <MenuButton
      {...{ ...props, icon: faCog, action: () => props.openModal("settings") }}
    />
  );
}

export default SettingsControl;
