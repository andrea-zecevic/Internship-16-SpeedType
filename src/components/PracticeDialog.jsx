import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

const PracticeDialog = ({ open, onClose }) => (
  <Dialog open={open} onClose={onClose}>
    <DialogTitle>{"Enter Practice Mode"}</DialogTitle>
    <DialogContent>
      <DialogContentText>
        Are you sure you want to enter practice mode?
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={onClose}>Cancel</Button>
      <Button onClick={onClose} autoFocus>
        Agree
      </Button>
    </DialogActions>
  </Dialog>
);

export default PracticeDialog;
