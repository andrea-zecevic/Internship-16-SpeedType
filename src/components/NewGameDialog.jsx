import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

const NewGameDialog = ({ open, onClose }) => (
  <Dialog open={open} onClose={onClose}>
    <DialogTitle>{"Start a New Game"}</DialogTitle>
    <DialogContent>
      <DialogContentText>Choose your mode:</DialogContentText>
      <Button color="primary" onClick={onClose}>
        Regular Mode
      </Button>
      <Button color="secondary" onClick={onClose}>
        Instant Death Mode
      </Button>
    </DialogContent>
    <DialogActions>
      <Button onClick={onClose}>Cancel</Button>
    </DialogActions>
  </Dialog>
);

export default NewGameDialog;
