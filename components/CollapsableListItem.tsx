import {
  Box,
  Collapse,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLessOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMoreOutlined";

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
            alignItems={"center"}
          >
            <ListItemButton onClick={handleClick}>
              <ListItemText primary={title}></ListItemText>
            </ListItemButton>
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
