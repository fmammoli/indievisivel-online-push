import { Box, Fade, IconButton, Paper, TextField } from "@mui/material";
import { useState } from "react";

import SettingsBackupRestoreIcon from "@mui/icons-material/SettingsBackupRestore";
import { Circle } from "@mui/icons-material";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import { CharacterListsTypes } from "./CharacterModal";

interface InputListItemPropsType {
  initialValue: string;
  index: number;
  handleDelete: (
    initialValue: string,
    index: number,
    keyName: CharacterListsTypes
  ) => void;
  handleReroll: (
    initialValue: string,
    index: number,
    keyName: CharacterListsTypes
  ) => void;
  keyName: CharacterListsTypes;
  inputName: string;
}

export default function InputListItem({
  index,
  initialValue,
  handleDelete,
  handleReroll,
  keyName,
  inputName,
}: InputListItemPropsType) {
  const [show, setShow] = useState(false);
  const [options, setOptions] = useState(false);
  const [inputFocus, setInputFocus] = useState(false);

  function handleEnter() {
    setShow(true);
  }
  function handleExit() {
    setShow(false);
  }

  function handleOnDelete() {
    handleDelete(initialValue, index, keyName);
  }

  function handleOnReroll() {
    handleReroll(initialValue, index, keyName);
  }

  function showOptions() {
    setOptions(true);
  }

  function hideOptions() {
    setOptions(false);
  }

  return (
    <Box paddingY={2} position={"relative"}>
      <div
        onMouseEnter={handleEnter}
        onMouseLeave={handleExit}
        style={{
          display: "flex",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Circle fontSize="small" sx={{ color: "white", mr: 1, my: 0.5 }} />
        <TextField
          hiddenLabel
          id={`input-with-sx-${inputName}`}
          variant="standard"
          defaultValue={initialValue}
          size={"small"}
          fullWidth
          name={inputName}
        />
        <Box
          sx={{
            display: { xs: "none", sm: "none", md: "block" },
            paddingRight: "3.5px",
          }}
        >
          <Fade in={show}>
            <IconButton color="default" onClick={showOptions}>
              <MoreVertIcon></MoreVertIcon>
            </IconButton>
          </Fade>
        </Box>
        <Box
          sx={{
            display: { xs: "block", sm: "block", md: "none" },
            paddingRight: "3.5px",
          }}
        >
          <IconButton color="default" onClick={showOptions}>
            <MoreVertIcon></MoreVertIcon>
          </IconButton>
        </Box>
        <Fade in={options}>
          <Paper
            elevation={4}
            sx={{
              display: "flex",
              top: "0.8rem",
              left: "100%",
              transform: "translateX(-100%)",
              position: "absolute",
              padding: 0.4,
            }}
            onMouseLeave={hideOptions}
          >
            <IconButton color="primary" onClick={handleOnReroll}>
              <SettingsBackupRestoreIcon></SettingsBackupRestoreIcon>
            </IconButton>
            <IconButton color="error" onClick={handleOnDelete}>
              <DeleteOutlinedIcon></DeleteOutlinedIcon>
            </IconButton>
            <IconButton color={"default"} onClick={hideOptions}>
              <MoreVertIcon></MoreVertIcon>
            </IconButton>
          </Paper>
        </Fade>
      </div>
    </Box>
  );
}
