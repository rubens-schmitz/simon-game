/// <reference types="react-scripts" />

interface MultiplayerModalProps {
  modal: string | undefined;
  overlayStyle: React.CSSProperties;
  setOverlayStyle: React.Dispatch<React.SetStateAction<React.CSSProperties>>;
}

interface SettingsModalProps {
  modal: string | undefined;
  openModal: (value: string) => void;
  difficulty: Difficulty;
  onDifficultyChanged: (newDifficulty: Difficulty) => void;
  overlayStyle: React.CSSProperties;
  setOverlayStyle: React.Dispatch<React.SetStateAction<React.CSSProperties>>;
}

interface SettingsModalInputProps extends SettingsModalProps {
  thisDifficulty: Difficulty;
}

interface MenuProps {
  start: () => void;
  openModal: (value: string) => void;
  difficulty: Difficulty;
  setDifficulty: React.Dispatch<React.SetStateAction<Difficulty>>;
  displaySize: number;
  rounds: number;
}

interface MenuButtonProps extends MenuProps {
  icon: IconDefinition;
  action: () => void;
}

interface SettingsControlProps extends MenuProps {
  menuSize: number;
}

interface SettingsControlButtonProps extends MenuProps {
  thisDifficulty: Difficulty;
}

interface ButtonProps {
  handleButton: (event: React.MouseEvent) => void;
  id: string;
  displaySize: number;
}

interface Difficulty {
  name: string;
  value: number;
}

interface WindowSize {
  width: number;
  height: number;
}
