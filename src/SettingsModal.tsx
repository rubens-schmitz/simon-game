import SettingsModalInput from "./SettingsModalInput";

const modalStyle: React.CSSProperties = {
  position: "fixed" as "fixed",
  backgroundColor: "white",
  zIndex: "4",
  borderRadius: "8px",
  padding: "14px",
  display: "grid",
  gridAutoFlow: "row",
  gap: "18px",
};

const buttonStyle: React.CSSProperties = {
  color: "dodgerblue",
  backgroundColor: "white",
  borderRadius: "8px",
  border: "1px solid dodgerblue",
  fontFamily: "helvetica",
  cursor: "pointer",
  WebkitTapHighlightColor: "transparent",
  fontSize: "20px",
  padding: "10px 16px 8px 16px",
  marginTop: "8px",
};

function SettingsModal(props: SettingsModalProps) {
  function closeModal() {
    props.setOverlayStyle((prevState: React.CSSProperties) => ({
      ...prevState,
      display: "none",
    }));
  }

  return props.modal === "settings" ? (
    <div onClick={closeModal} style={props.overlayStyle}>
      <div style={modalStyle}>
        <SettingsModalInput
          {...{ ...props, thisDifficulty: { name: "Лёгкий", value: 1500 } }}
        />

        <SettingsModalInput
          {...{ ...props, thisDifficulty: { name: "Средний", value: 1000 } }}
        />

        <SettingsModalInput
          {...{ ...props, thisDifficulty: { name: "Сложный", value: 400 } }}
        />

        <button onClick={closeModal} style={buttonStyle}>
          ЗАКРЫТЬ
        </button>
      </div>
    </div>
  ) : (
    <div />
  );
}

export default SettingsModal;
