import SettingsControlKnob from "./SettingsControlKnob";

function SettingsControlButton(props: SettingsControlButtonProps) {
  const display = props.thisDifficulty.name === props.difficulty.name;
  const width = "74px";

  const style: React.CSSProperties = {
    width: width,
    border: "0",
    WebkitTapHighlightColor: "transparent",
    backgroundColor: "transparent",
    padding: "0",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "14px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "end",
  };

  function Track() {
    return (
      <div
        style={{
          position: "absolute",
          width: width,
          height: "2px",
          backgroundColor: "#555",
          marginBottom: "41px",
        }}
      />
    );
  }

  return (
    <button
      style={style}
      onClick={() => props.setDifficulty(props.thisDifficulty)}
    >
      <Track />
      {display && <SettingsControlKnob />}
      <span>{props.thisDifficulty.name}</span>
    </button>
  );
}

export default SettingsControlButton;
