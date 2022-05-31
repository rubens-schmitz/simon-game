function RoundsDisplay(props: MenuProps) {
  const rounds = props.rounds > 9 ? props.rounds : "0" + String(props.rounds);
  return (
    <div
      style={{
        width: "50px",
        height: "50px",
        border: "1px solid black",
        borderRadius: "8px",
        display: "grid",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <span
        style={{
          fontFamily: "courier",
          fontSize: "38px",
          marginTop: "4px",
        }}
      >
        {rounds}
      </span>
    </div>
  );
}

export default RoundsDisplay;