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
  title: string;
  handleButtonClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  noButton?: boolean;
  children?: React.ReactNode;
  icon?: React.ReactNode;
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning"
    | undefined;
}

export default function CollapsableListItem({
  title,
  children,
  icon,
  color,
  noButton = false,
  handleButtonClick,
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
        <Box
          display={"flex"}
          gap={1}
          justifyContent="space-between"
          width={"100%"}
        >
          <ListItemText primary={title}></ListItemText>
          {noButton ? null : (
            <Button
              variant="outlined"
              color={color}
              sx={{ borderRadius: "90px" }}
              size="small"
              startIcon={icon}
              onClick={handleButtonClick}
            >
              Rolar
            </Button>
          )}
        </Box>
      </ListItem>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {children}
        </List>
      </Collapse>
    </>
  );
}
