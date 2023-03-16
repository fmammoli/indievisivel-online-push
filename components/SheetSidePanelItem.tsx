import {
  Box,
  Button,
  Divider,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CollapsableListItem from "./CollapsableListItem";
import DiceIcon from "./DiceIcon";

import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
export default function SheetSidePanelItem({
  sheetItem,
  title,
  button,
  listStyleTypes = ["disc"],
  contentButtons,
  handleContentButtons,
}: {
  sheetItem: string | [] | { [index: string]: any };
  title: string;
  button?: JSX.Element;
  contentButtons?: JSX.Element;
  handleContentButtons?: any;
  listStyleTypes?: string[];
}) {
  let toRender = null;

  if (Array.isArray(sheetItem)) {
    toRender = sheetItem.map((item, index) => {
      return (
        <ListItem key={index}>
          <Box display={"flex"} gap={1} alignItems="flex-start">
            <DiceIcon
              value={item.id}
              fontSize="large"
              color="disabled"
            ></DiceIcon>

            <Typography
              variant="body2"
              color={"rgba(0, 0, 0, 0.6)"}
              whiteSpace="pre-line"
            >
              {item.text}
            </Typography>
          </Box>
        </ListItem>
      );
    });
  } else if (typeof sheetItem !== "string") {
    if (!sheetItem.rollable) {
      if (title === "Dons") {
        console.log(sheetItem);
      }
      toRender = (
        <ListItemText
          key={title}
          sx={{ paddingX: 3, paddingBottom: 2, whiteSpace: "pre-line" }}
          secondary={sheetItem.text ? sheetItem.text : ""}
        >
          {sheetItem.list ? (
            <ul style={{ marginTop: 0, paddingTop: 0, paddingLeft: "1.2rem" }}>
              {sheetItem.list.map((item: string, index: number) => {
                return (
                  <li key={`${index}-${item}`}>
                    <Typography
                      variant="body2"
                      component="p"
                      color={"rgba(0, 0, 0, 0.6)"}
                      paddingBottom={1}
                      whiteSpace="pre-line"
                    >
                      {item}
                    </Typography>
                  </li>
                );
              })}
            </ul>
          ) : null}
        </ListItemText>
      );
    } else {
      toRender = (
        <ListItem>
          <Box>
            <Typography
              variant="body2"
              color={"rgba(0, 0, 0, 0.6)"}
              whiteSpace="pre-line"
            >
              {sheetItem.text}
            </Typography>

            <Box>
              {sheetItem.tables.map(
                (
                  table: {
                    id: string;
                    title: string;
                    rolls: { value: number; text: string }[];
                  },
                  index: number
                ) => {
                  return (
                    <Box key={`${index}-${table.id}`} paddingY={2}>
                      <Box
                        display={"flex"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                      >
                        <Typography
                          variant="body2"
                          color={"rgba(0, 0, 0, 0.6)"}
                          whiteSpace="pre-line"
                          fontWeight={"bold"}
                          align={"center"}
                        >
                          Tabela: {table.title}
                        </Typography>
                        <Button
                          variant={"outlined"}
                          color={"other"}
                          size={"small"}
                          startIcon={<DashboardIcon></DashboardIcon>}
                          onClick={() => handleContentButtons(table)}
                        >
                          Rolar
                        </Button>
                      </Box>

                      {table.rolls.length <= 6 &&
                        table.rolls.map((item, index) => {
                          return (
                            <Box
                              key={`${index}-${item.value}`}
                              display={"flex"}
                              gap={1}
                              alignItems="flex-start"
                              paddingY={0.5}
                            >
                              <DiceIcon
                                value={item.value}
                                fontSize="large"
                                color="disabled"
                              ></DiceIcon>

                              <Typography
                                variant="body2"
                                color={"rgba(0, 0, 0, 0.6)"}
                                whiteSpace="pre-line"
                              >
                                {item.text}
                              </Typography>
                            </Box>
                          );
                        })}
                    </Box>
                  );
                }
              )}
            </Box>
          </Box>
        </ListItem>
      );
    }
  } else {
    toRender = (
      <ListItemText
        key={title}
        sx={{ paddingX: 3, paddingBottom: 2, whiteSpace: "pre-line" }}
        secondary={sheetItem ? sheetItem : ""}
      ></ListItemText>
    );
  }

  return (
    <CollapsableListItem title={title} button={button}>
      {toRender}
    </CollapsableListItem>
  );
}
