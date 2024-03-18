import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from "@mui/material";

const LevelCompleteDialog = ({
  open,
  onContinue,
  isFinalLevel,
  currentWPM,
}) => {
  return (
    <Dialog
      open={open}
      onClose={onContinue}
      aria-labelledby="level-complete-dialog-title"
    >
      <DialogTitle id="level-complete-dialog-title">
        {isFinalLevel ? "Congratulations!" : "Level Complete"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          {isFinalLevel
            ? `You have completed the game! Your final Words Per Minute (WPM) is ${currentWPM}.`
            : `Your Words Per Minute (WPM) for this level is ${currentWPM}. Ready for the next level?`}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onContinue}>
          {isFinalLevel ? "Restart" : "Continue"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default LevelCompleteDialog;
