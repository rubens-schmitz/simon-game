import { useEffect, useState } from "react";
import { buttonSize } from "./Utils";

function Button(props: ButtonProps) {
  const [style, setStyle] = useState<React.CSSProperties>();

  useEffect(() => {
    const size = buttonSize(props.displaySize);
    setStyle((prevState) => ({ ...prevState, width: size, height: size }));
  }, [props.displaySize]);

  useEffect(() => {
    let result: React.CSSProperties = {
      borderColor: "transparent",
      cursor: "pointer",
      WebkitTapHighlightColor: "transparent",
    };

    switch (props.id) {
      case "top-left":
        result = {
          ...result,
          backgroundColor: "rgba(0, 0, 255, 0.5)",
          borderRadius: "100% 0 0 0",
          borderTop: "8px solid #333",
          borderRight: "4px solid #333",
          borderBottom: "4px solid #333",
          borderLeft: "8px solid #333",
        };
        break;

      case "top-right":
        result = {
          ...result,
          backgroundColor: "rgba(255, 0, 0, 0.5)",
          borderRadius: "0 100% 0 0",
          borderTop: "8px solid #333",
          borderRight: "8px solid #333",
          borderBottom: "4px solid #333",
          borderLeft: "4px solid #333",
        };
        break;

      case "bottom-left":
        result = {
          ...result,
          backgroundColor: "rgba(255, 255, 0, 0.2)",
          borderRadius: "0 0 0 100%",
          borderTop: "4px solid #333",
          borderRight: "4px solid #333",
          borderBottom: "8px solid #333",
          borderLeft: "8px solid #333",
        };
        break;

      default:
        result = {
          ...result,
          backgroundColor: "rgba(0, 128, 0, 0.5)",
          borderRadius: "0 0 100% 0",
          borderTop: "4px solid #333",
          borderRight: "8px solid #333",
          borderBottom: "8px solid #333",
          borderLeft: "4px solid #333",
        };
    }
    
    setStyle(result)
  }, [props.id]);

  return (
    <button
      onClick={(e) => props.handleButton(e)}
      id={props.id}
      style={style}
    />
  );
}

export default Button;
