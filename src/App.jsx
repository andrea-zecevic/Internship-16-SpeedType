import React from "react";
import { CssBaseline, Container } from "@mui/material";
import Header from "./components/Header";

function App() {
  return (
    <React.Fragment>
      <CssBaseline /> {}
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
    </React.Fragment>
  );
}

export default App;
