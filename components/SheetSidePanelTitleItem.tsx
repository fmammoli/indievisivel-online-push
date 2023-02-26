import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ExpandLessIcon from "@mui/icons-material/ExpandLessOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMoreOutlined";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";

import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import LooksOneIcon from "@mui/icons-material/LooksOne";

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import CollapsableListItem from "./CollapsableListItem";
import ScrollableDiv from "./ScrollableDiv";
import DiceIcon from "./DiceIcon";
import PentagonIcon from "@mui/icons-material/Pentagon";
import SquareIcon from "@mui/icons-material/Square";
import CircleIcon from "@mui/icons-material/Circle";
import games from "../gameData/games";
import { newMessageType } from "./Chat";
import useDiceRoller from "./useDiceRoller";
import { DiceRoll } from "@dice-roller/rpg-dice-roller";
import { totalmem } from "os";
import SheetSidePanel from "./SheetSidePanel";

import {
  Box,
  Checkbox,
  Grow,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemText,
  Slide,
} from "@mui/material";
import { ChatBubble } from "@mui/icons-material";

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
  id: number;
  title: string;
  secondaryText?: string;
  disablePadding?: boolean;
  noSettings?: boolean;
  noEdit?: boolean;
  chat?: boolean;
  options?: ReactNode;
  checked?: number | null;
  handleChatClick?: ({
    characterId,
    characterName,
  }: {
    characterId: number;
    characterName: string;
  }) => void;
}) {
  const [showOptions, setOptions] = useState(false);

  let isChecked = false;
  // console.log(`id: ${id}______ checked: ${checked}`);
  if (checked) {
    if (checked === id) {
      isChecked = true;
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
          <Box>
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
