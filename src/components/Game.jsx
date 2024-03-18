import React, { useState, useEffect, useContext } from "react";
import texts from "../data/texts.json";
import { GameContext } from "../contexts/GameContext";
import TypingChallenge from "./TypingChallenge";
import LevelCompleteDialog from "./LevelCompleteDialog";

const Game = () => {
  const { mode, setLevel, level, wpm } = useContext(GameContext);
  const [currentWPM, setCurrentWPM] = useState(0);
  const [selectedTexts, setSelectedTexts] = useState([]);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    const shuffleTexts = texts.sort(() => 0.5 - Math.random()).slice(0, 3);
    setSelectedTexts(shuffleTexts);
    setLevel(1);
    setCurrentTextIndex(0);
    setDialogOpen(false);
    setUserInput("");
  }, [mode, setLevel]);

  const handleLevelComplete = (wpm) => {
    setCurrentWPM(wpm);
    if (currentTextIndex < 2) {
      setDialogOpen(true);
    } else {
      setDialogOpen(true);
    }
  };

  const handleContinue = () => {
    if (currentTextIndex < 2) {
      setCurrentTextIndex(currentTextIndex + 1);
      setLevel(level + 1);
    } else {
      resetGame();
    }
    setDialogOpen(false);
    setUserInput("");
  };

  const resetGame = () => {
    setCurrentTextIndex(0);
    setLevel(1);
    setUserInput("");
    setSelectedTexts(texts.sort(() => 0.5 - Math.random()).slice(0, 3));
    setCurrentWPM(0);
  };

  return (
    <div>
      {selectedTexts.length > 0 && (
        <TypingChallenge
          key={currentTextIndex}
          text={selectedTexts[currentTextIndex].text}
          onComplete={(wpm) => handleLevelComplete(wpm)}
        />
      )}
      <LevelCompleteDialog
        open={dialogOpen}
        onContinue={handleContinue}
        isFinalLevel={currentTextIndex >= 2}
        currentWPM={currentWPM}
      />
    </div>
  );
};

export default Game;
