import React, { useState } from "react";
import { AppBar, Toolbar, Button, Typography } from "@mui/material";
import PracticeDialog from "./PracticeDialog";
import NewGameDialog from "./NewGameDialog";
import styles from "./header.module.css";
import ThemeSwitcher from "./Theme/ThemeSwitcher";

const Header = () => {
  const [openPracticeDialog, setOpenPracticeDialog] = useState(false);
  const [openNewGameDialog, setOpenNewGameDialog] = useState(false);

  const handleOpenPracticeDialog = () => setOpenPracticeDialog(true);
  const handleClosePracticeDialog = () => setOpenPracticeDialog(false);

  const handleOpenNewGameDialog = () => setOpenNewGameDialog(true);
  const handleCloseNewGameDialog = () => setOpenNewGameDialog(false);

  return (
    <AppBar position="static">
      <Toolbar className={styles.toolbar}>
        <Typography variant="h6" component="div" className={styles.title}>
          SpeedType
        </Typography>
        <Button color="inherit" onClick={handleOpenPracticeDialog}>
          Practice
        </Button>
        <Button color="inherit" onClick={handleOpenNewGameDialog}>
          New Game
        </Button>
        <ThemeSwitcher />
      </Toolbar>
      <PracticeDialog
        open={openPracticeDialog}
        onClose={handleClosePracticeDialog}
      />
      <NewGameDialog
        open={openNewGameDialog}
        onClose={handleCloseNewGameDialog}
      />
    </AppBar>
  );
};

export default Header;
