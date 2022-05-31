import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function MenuButton(props: MenuButtonProps) {
  return (
    <button
      style={{
        width: "48px",
        height: "48px",
        borderRadius: "50%",
        border: 0,
        cursor: "pointer",
        WebkitTapHighlightColor: "transparent",
        backgroundColor: "#555",
      }}
      onClick={props.action}
    >
      <FontAwesomeIcon color="white" icon={props.icon} />
    </button>
  );
}

export default MenuButton;
