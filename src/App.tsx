import { useEffect, useState } from "react";

import Button from "./Button";
import Menu from "./Menu";
import SettingsModal from "./SettingsModal";
import * as Utils from "./Utils";

const topLeftSound = require("./sounds/top-left.mp3");
const topRightSound = require("./sounds/top-right.mp3");
const bottomLeftSound = require("./sounds/bottom-left.mp3");
const bottomRightSound = require("./sounds/bottom-right.mp3");

let sequence: Array<string> = [];
let sequenceIterator = 0;
let timeouts: Array<ReturnType<typeof setTimeout>> = [];
let audio: HTMLAudioElement;

function App() {
  const [rounds, setRounds] = useState(0);
  const [difficulty, setDifficulty] = useState({ name: "Средний", value: 1000 });
  const [playing, setPlaying] = useState(false);
  const [overlayStyle, setOverlayStyle] = useState(Utils.defaultOverlayStyle);
  const [modal, setModal] = useState<string | undefined>();
  const [displaySize, setDisplaySize] = useState(0);
  const windowSize: WindowSize = Utils.useWindowSize();

  function animateButton(id: string) {
    let el = document.getElementById(id);
    let color = String(el?.style.backgroundColor);
    color = Utils.getColor(color, "normal");
    el!.style.backgroundColor = color;
    timeouts.push(
      setTimeout(() => {
        let color = String(el?.style.backgroundColor);
        color = Utils.getColor(color, "opacity");
        el!.style.backgroundColor = color;
      }, 200)
    );
  }

  function clearOpacity() {
    const buttons = ["top-left", "top-right", "bottom-left", "bottom-right"];
    buttons.forEach((id) => {
      const el = document.getElementById(id);
      let color = String(el?.style.backgroundColor);
      color = Utils.getColor(color, "opacity")
      el!.style.backgroundColor = color;
    });
  }

  function playButton(id: string) {
    animateButton(id);
    switch (id) {
      case "top-left":
        audio = new Audio(topLeftSound);
        break;
      case "top-right":
        audio = new Audio(topRightSound);
        break;
      case "bottom-left":
        audio = new Audio(bottomLeftSound);
        break;
      default:
        audio = new Audio(bottomRightSound);
        break;
    }
    audio.play();
  }

  function playSequence() {
    const fn = (i: any) => playButton(sequence[i]);
    for (let i = 0; i < sequence.length; ++i)
      timeouts.push(setTimeout(fn, i * difficulty.value, i));
  }

  function newRound() {
    const id = Utils.randomButton();
    sequence.push(id);
    sequenceIterator = 0;
    playSequence();
    setPlaying(true);
  }

  function clearTimeouts() {
    for (var i = 0; i < timeouts.length; i++) clearTimeout(timeouts[i]);
    timeouts = [];
  }

  function clear() {
    clearTimeouts();
    sequence = [];
    sequenceIterator = 0;
    setRounds(1);
  }

  function start() {
    clear();
    newRound();
  }

  function playGameOverAnimation() {
    playButton("top-right");
    setTimeout(() => playButton("bottom-right"), 200);
    setTimeout(() => playButton("bottom-left"), 400);
    setTimeout(() => playButton("top-left"), 600);
    setTimeout(() => playButton("top-right"), 800);
    setTimeout(() => playButton("bottom-right"), 1000);
    setTimeout(() => playButton("bottom-left"), 1200);
    setTimeout(() => playButton("top-left"), 1400);
    setTimeout(() => playButton("top-right"), 1600);
    setTimeout(() => playButton("bottom-right"), 1800);
    setTimeout(() => playButton("bottom-left"), 2000);
    setTimeout(() => playButton("top-left"), 2200);
    setTimeout(() => playButton("top-right"), 2400);
  }

  function handleButton(event: React.MouseEvent) {
    const id = event.currentTarget.id;
    const correct = sequence[sequenceIterator] === id;
    if (!playing) {
      return;
    } else if (playing && correct) {
      playButton(id);
      ++sequenceIterator;
      if (sequenceIterator === sequence.length) {
        setRounds((s) => s + 1);
        timeouts.push(
          setTimeout(() => {
            newRound();
          }, difficulty.value + 100)
        );
      }
    } else {
      clearTimeouts();
      clearOpacity();
      playGameOverAnimation();
      setPlaying(false);
    }
  }

  function onDifficultyChanged(newDifficulty: Difficulty) {
    setDifficulty(newDifficulty);
    clear();
    if (playing === true) newRound();
  }

  function openModal(value: string) {
    setOverlayStyle((prevState: React.CSSProperties) => ({
      ...prevState,
      display: "flex",
    }));
    setModal(value);
  }

  useEffect(() => {
    const { width, height } = windowSize;
    const size = width > height ? height : width;
    setDisplaySize(size * 0.9);
  }, [windowSize]);

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <SettingsModal
        {...{
          modal,
          openModal,
          difficulty,
          overlayStyle,
          setOverlayStyle,
          onDifficultyChanged,
        }}
      />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Menu
          {...{
            rounds,
            difficulty,
            setDifficulty,
            displaySize,
            start,
            openModal,
          }}
        />

        <div style={{ display: "grid", gridTemplate: "1fr 1fr / 1fr 1fr" }}>
          <Button {...{ id: "top-left", handleButton, displaySize }} />
          <Button {...{ id: "top-right", handleButton, displaySize }} />
          <Button {...{ id: "bottom-left", handleButton, displaySize }} />
          <Button {...{ id: "bottom-right", handleButton, displaySize }} />
        </div>
      </div>
    </div>
  );
}

export default App;
