import {
  Box,
  IconButton,
  List,
  ListSubheader,
  Typography,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddIcon from "@mui/icons-material/Add";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import { ReactNode } from "react";
import Link from "@/src/Link";

export default function SheetSidePanel({
  title,
  children,
  align = "right",
  handleHide,
  addButton = false,
  handleAdd,
  showButton,
  link,
}: {
  title: string;
  children: ReactNode;
  align?: "right" | "left";
  handleHide?: () => void;
  addButton?: boolean;
  handleAdd?: (value: any) => void;
  showButton?: boolean;
  link?: string;
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
            justifyContent={
              addButton || showButton ? "space-between" : "flex-end"
            }
            gap={2}
            flexDirection={align === "right" ? "row" : "row-reverse"}
          >
            {addButton && (
              <IconButton aria-label="New Item" onClick={handleAdd}>
                <AddIcon></AddIcon>
              </IconButton>
            )}
            {showButton && link && (
              <Link
                href={link}
                underline={"none"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconButton aria-label="Show pdf">
                  <MenuBookOutlinedIcon></MenuBookOutlinedIcon>
                </IconButton>
              </Link>
            )}
            <Typography variant="h5" component="h2" fontWeight={300}>
              {title}
            </Typography>
            <IconButton aria-label="Hide Game Sheet View" onClick={handleHide}>
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
