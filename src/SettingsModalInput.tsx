function SettingsModalInput(props: SettingsModalInputProps) {
  const checked = props.thisDifficulty.name === props.difficulty.name;

  return (
    <div
      onClick={() => props.onDifficultyChanged(props.thisDifficulty)}
      style={{
        cursor: "pointer",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "1em auto",
        gap: "0.5em",
        alignItems: "center",
        WebkitTapHighlightColor: "transparent",
      }}
    >
      <div
        onClick={() => props.onDifficultyChanged(props.thisDifficulty)}
        style={{
          cursor: "pointer",
          margin: "0",
          appearance: "none",
          font: "inherit",
          color: "dodgerblue",
          width: "20px",
          height: "20px",
          backgroundColor: "dodgerblue",
          borderRadius: "50%",
          display: "grid",
          placeContent: "center",
          WebkitTapHighlightColor: "transparent",
        }}
      >
        {checked && (
          <div
            onClick={() => props.onDifficultyChanged(props.thisDifficulty)}
            style={{
              width: "8px",
              height: "8px",
              backgroundColor: "white",
              borderRadius: "50%",
              WebkitTapHighlightColor: "transparent",
            }}
          />
        )}
      </div>

      <label
        style={{
          fontSize: "20px",
          cursor: "pointer",
          WebkitTapHighlightColor: "transparent",
        }}
        onClick={() => props.onDifficultyChanged(props.thisDifficulty)}
      >
        {props.thisDifficulty.name}
      </label>
    </div>
  );
}

export default SettingsModalInput;
