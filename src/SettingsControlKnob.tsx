function SettingsControlKnob() {  
  return (
    <div
      style={{
        width: "100%",
        height: "32px",
        backgroundColor: "#555",
        borderRadius: "8px",
        display: "flex",
        justifyContent: "center",
        marginBottom: "12px"
      }}
    >
      <div
        style={{
          position: "absolute",
          width: "18px",
          height: "18px",
          backgroundColor: "#555",
          transform: "rotate(45deg)",
          marginTop: "20px",
        }}
      />
    </div>
  );
}

export default SettingsControlKnob;
