import React, { createContext, useContext, useState } from "react";

const GameContext = createContext();

export const useGame = () => useContext(GameContext);

export const GameProvider = ({ children }) => {
  const [level, setLevel] = useState(0);
  const [mode, setMode] = useState("Regular");
  const [wpm, setWpm] = useState(0);

  const value = {
    level,
    setLevel,
    mode,
    setMode,
    wpm,
    setWpm,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};
