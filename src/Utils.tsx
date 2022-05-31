import { useEffect, useState } from "react";

export function useWindowSize() {
  // From: https://usehooks.com/useWindowSize/
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: 0,
    height: 0,
  });
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
}

export function randomButton() {
  switch (Math.floor(Math.random() * 4)) {
    case 0:
      return "top-left";
    case 1:
      return "top-right";
    case 2:
      return "bottom-left";
    default:
      return "bottom-right";
  }
}

export function buttonSize(displaySize: number): string {
  const s = displaySize;
  return String(s / 2) + "px";
}

export const defaultOverlayStyle: React.CSSProperties = {
  position: "absolute" as "absolute",
  display: "none",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  width: "100vw",
  height: "100vh",
  zIndex: "3",
}

const isGreen = (color: string) => color.match("0, 128, 0") !== null;
const isYellow = (color: string) => color.match("255, 255, 0") !== null;
const isBlue = (color: string) => color.match("0, 0, 255") !== null;

export function getColor(color: string, type: string) {
  if (type === "normal") {
    if (isBlue(color)) return "rgba(0, 0, 255)";
    if (isGreen(color)) return "rgba(0, 128, 0)";
    if (isYellow(color)) return "rgba(255, 255, 0)";
    return "rgba(255, 0, 0)";
  }

  if (isBlue(color)) return "rgba(0, 0, 255, 0.5)";
  if (isGreen(color)) return "rgba(0, 128, 0, 0.5)";
  if (isYellow(color)) return "rgba(255, 255, 0, 0.2)";
  return "rgba(255, 0, 0, 0.5)";
}
