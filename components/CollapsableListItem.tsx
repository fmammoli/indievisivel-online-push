import {
  Box,
  Button,
  Collapse,
  Container,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Typography,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ExpandLessIcon from "@mui/icons-material/ExpandLessOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMoreOutlined";

import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import LooksOneIcon from "@mui/icons-material/LooksOne";

import { useState } from "react";

interface CollapsableListItemProps {
  title?: string;
  noButton?: boolean;
  children?: React.ReactNode;
  button?: JSX.Element;
  headerElement?: JSX.Element;
}

export default function CollapsableListItem({
  title,
  children,
  button,
  noButton = false,
  headerElement,
}: CollapsableListItemProps) {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <ListItem>
        {open ? (
          <IconButton aria-label="Edit Game Sheet" onClick={handleClick}>
            <ExpandLessIcon />
          </IconButton>
        ) : (
          <IconButton aria-label="Edit Game Sheet" onClick={handleClick}>
            <ExpandMoreIcon />
          </IconButton>
        )}
        {headerElement}
        {title ? (
          <Box
            display={"flex"}
            gap={1}
            justifyContent="space-between"
            width={"100%"}
          >
            <ListItemText primary={title}></ListItemText>

            {button}
          </Box>
        ) : null}
      </ListItem>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {children}
        </List>
      </Collapse>
    </>
  );
}
