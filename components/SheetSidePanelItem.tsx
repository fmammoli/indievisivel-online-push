import { Box, ListItem, ListItemText, Typography } from "@mui/material";
import CollapsableListItem from "./CollapsableListItem";
import DiceIcon from "./DiceIcon";

export default function SheetSidePanelItem({
  sheetItem,
  title,
  button,
  listStyleTypes = ["disc"],
}: {
  sheetItem: any;
  title: string;
  button?: JSX.Element;
  listStyleTypes?: string[];
}) {
  let toRender = null;
  if (Array.isArray(sheetItem)) {
    toRender = sheetItem.map((item, index) => {
      return (
        <ListItem key={Math.random()}>
          <Box display={"flex"} gap={1} alignItems="flex-start">
            <DiceIcon
              value={item.id}
              fontSize="large"
              color="disabled"
            ></DiceIcon>

            <Typography variant="body2" color={"rgba(0, 0, 0, 0.6)"}>
              {item.text}
            </Typography>
          </Box>
        </ListItem>
      );
    });
  } else {
    let arrayCount = 0;
    toRender = Object.keys(sheetItem).map((key, index) => {
      if (typeof sheetItem[key] === "string") {
        return (
          <ListItemText
            key={index}
            sx={{ paddingX: 3, paddingBottom: 2 }}
            secondary={sheetItem[key]}
          ></ListItemText>
        );
      }
      if (Array.isArray(sheetItem[key])) {
        arrayCount++;
        return (
          <Box key={Math.random()} paddingX={3}>
            <ul
              style={{
                paddingInline:
                  listStyleTypes[arrayCount - 1] === "none" ? "0" : "1rem",
                marginTop: "0",
                listStyleType: listStyleTypes[arrayCount - 1],
              }}
            >
              {sheetItem[key].map((item: string) => (
                <li>
                  <Typography
                    key={Math.random()}
                    variant="body2"
                    component="p"
                    color={"rgba(0, 0, 0, 0.6)"}
                    paddingBottom={1}
                  >
                    {item}
                  </Typography>
                </li>
              ))}
            </ul>
          </Box>
        );
      }
    });
    arrayCount = 0;
  }

  return (
    <CollapsableListItem title={title} key={1} button={button}>
      {toRender}
    </CollapsableListItem>
  );
}
