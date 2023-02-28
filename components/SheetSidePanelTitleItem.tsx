import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";

import { ReactNode, useEffect, useState } from "react";

import {
  Box,
  Checkbox,
  Grow,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

export default function SheetSidePanelTitleItem({
  title,
  id,
  secondaryText,
  disablePadding = false,
  noSettings = false,
  noEdit = false,
  chat = false,
  options,
  checked,
  handleChatClick,
}: {
  id: string;
  title: string;
  secondaryText?: string;
  disablePadding?: boolean;
  noSettings?: boolean;
  noEdit?: boolean;
  chat?: boolean;
  options?: ReactNode;
  checked?: string | null;
  handleChatClick?: ({
    characterId,
    characterName,
  }: {
    characterId: string;
    characterName: string;
  }) => void;
}) {
  const [showOptions, setOptions] = useState(false);

  let isChecked = false;
  // console.log(`id: ${id}______ checked: ${checked}`);
  if (checked) {
    if (checked === id) {
      isChecked = true;
      if (showOptions === false) {
        setOptions(true);
      }
    }
  }

  useEffect(() => {
    if (checked && isChecked === false) {
      setOptions(false);
    }
  }, [checked, isChecked]);

  const handleHoverIn = () => {
    setOptions(true);
  };
  const handleHoverOut = () => {
    if (isChecked === false) {
      setOptions((prev) => !prev);
    }
  };

  const handleChange = () => {
    console.log(`id: ${id}______ checked: ${checked}`);
    if (handleChatClick)
      handleChatClick({ characterId: id, characterName: title });
  };

  return (
    <ListItem alignItems="flex-start" disablePadding={disablePadding}>
      <ListItemButton
        onMouseEnter={handleHoverIn}
        onMouseLeave={handleHoverOut}
      >
        <ListItemText primary={title} secondary={secondaryText}></ListItemText>

        <Grow in={showOptions} mountOnEnter unmountOnExit>
          <Box display={"flex"}>
            {!noEdit ? (
              <IconButton aria-label="Edit Game Sheet" color="primary">
                <EditOutlinedIcon></EditOutlinedIcon>
              </IconButton>
            ) : null}
            {!noSettings ? (
              <IconButton aria-label="Edit Game Sheet">
                <SettingsOutlinedIcon></SettingsOutlinedIcon>
              </IconButton>
            ) : null}
            {chat ? (
              <Checkbox
                checked={isChecked}
                onChange={handleChange}
                icon={<ChatBubbleOutlineIcon />}
                checkedIcon={<ChatBubbleIcon />}
              />
            ) : null}
          </Box>
        </Grow>
      </ListItemButton>
    </ListItem>
  );
}
