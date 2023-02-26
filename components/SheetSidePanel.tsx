import {
  Box,
  IconButton,
  List,
  ListSubheader,
  Typography,
} from "@mui/material";
import ScrollableDiv from "./ScrollableDiv";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ExpandLessIcon from "@mui/icons-material/ExpandLessOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMoreOutlined";

import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import LooksOneIcon from "@mui/icons-material/LooksOne";
import { ReactNode } from "react";

export default function SheetSidePanel({
  sheet,
  title,
  children,
  align = "right",
}: {
  sheet: any;
  title: string;
  children: ReactNode;
  align?: "right" | "left";
}) {
  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          <Box
            display={"flex"}
            alignItems="center"
            justifyContent={"flex-end"}
            gap={2}
            flexDirection={align === "right" ? "row" : "row-reverse"}
          >
            <Typography variant="h5" component="h2" fontWeight={300}>
              {title}
            </Typography>
            <IconButton aria-label="Hide Game Sheet View">
              {align === "right" ? (
                <ArrowForwardIcon></ArrowForwardIcon>
              ) : (
                <ArrowBackIcon></ArrowBackIcon>
              )}
            </IconButton>
          </Box>
        </ListSubheader>
      }
    >
      {children}
    </List>
  );
}
