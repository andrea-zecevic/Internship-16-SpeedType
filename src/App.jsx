import React from "react";
import { CssBaseline, Container } from "@mui/material";
import Header from "./components/Header";
import { GameProvider } from "./contexts/GameContext";
import Game from "./components/Game";

function App() {
  return (
    <GameProvider>
      <CssBaseline />
      <Header />
      <Container component="main" maxWidth="lg">
        <Game />
      </Container>
    </GameProvider>
  );
}

export default App;
