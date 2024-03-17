import React from "react";
import { CssBaseline, Container } from "@mui/material";
import Header from "./components/Header";
import { GameProvider } from "./contexts/GameContext";

function App() {
  return (
    <GameProvider>
      <CssBaseline />
      <Header />
      <Container component="main" maxWidth="lg">
        {}
        {}
        <h2>Welcome to SpeedType</h2>
        <p>
          This is a simple typing practice application to improve your typing
          speed.
        </p>
        {}
      </Container>
    </GameProvider>
  );
}

export default App;
