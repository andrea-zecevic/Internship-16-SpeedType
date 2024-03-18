import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useContext } from "react";

import { GameContext } from "../contexts/GameContext";

const NewGameDialog = ({ open, onClose }) => {
  const { setMode } = useContext(GameContext);

  const handleModeChange = (mode) => {
    setMode(mode);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{"Start a New Game"}</DialogTitle>
      <DialogContent>
        <DialogContentText>Choose your mode:</DialogContentText>
        <Button color="primary" onClick={() => handleModeChange("Regular")}>
          Regular Mode
        </Button>
        <Button
          color="secondary"
          onClick={() => handleModeChange("InstantDeath")}
        >
          Instant Death Mode
        </Button>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
};

export default NewGameDialog;
