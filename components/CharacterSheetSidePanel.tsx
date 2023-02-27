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

import { Dispatch, Fragment, SetStateAction, useState } from "react";
import CollapsableListItem from "./CollapsableListItem";
import ScrollableDiv from "./ScrollableDiv";
import DiceIcon from "./DiceIcon";
import PentagonIcon from "@mui/icons-material/Pentagon";
import SquareIcon from "@mui/icons-material/Square";
import CircleIcon from "@mui/icons-material/Circle";

import { newMessageType } from "./Chat";
import useDiceRoller from "./useDiceRoller";
import { DiceRoll } from "@dice-roller/rpg-dice-roller";
import { totalmem } from "os";
import SheetSidePanel from "./SheetSidePanel";
import SheetSidePanelTitleItem from "./SheetSidePanelTitleItem";
import SheetSidePanelItem from "./SheetSidePanelItem";
import characters from "../gameData/characters";
import { Padding } from "@mui/icons-material";

interface CharacterSheetSidePanel {}

export default function CharacterSheetSidePanel({
  currentCharracter,
  setCurrentCharacter,
}: {
  currentCharracter: any;
  setCurrentCharacter: any;
}) {
  const [checked, setChecked] = useState<null | number>(null);

  function handleChatClick({
    characterId,
    characterName,
  }: {
    characterId: number;
    characterName: string;
  }) {
    const char = characters.find((item, index) => {
      return item.id == characterId;
    });
    console.log(characterId);
    setChecked(characterId);
    setCurrentCharacter(char);
  }

  return (
    <Box
      sx={{ height: "100%", display: "flex", flexDirection: "column" }}
      py={1}
    >
      <ScrollableDiv>
        <SheetSidePanel
          sheet={characters}
          title={"Character Sheet"}
          align={"left"}
        >
          {characters.map((character, index) => {
            return (
              <Fragment key={index}>
                <CollapsableListItem
                  key={`collapsable-${index}`}
                  headerElement={
                    <List disablePadding sx={{ width: "100%" }}>
                      <SheetSidePanelTitleItem
                        id={character.id}
                        title={character.name}
                        secondaryText={`${character.pronouns} - ${character.age} anos`}
                        disablePadding
                        noSettings
                        chat
                        handleChatClick={handleChatClick}
                        checked={checked}
                      ></SheetSidePanelTitleItem>
                    </List>
                  }
                >
                  <SheetSidePanelItem
                    sheetItem={character.gifts}
                    title={"Doms"}
                  ></SheetSidePanelItem>
                  <Divider variant="middle" component="li" />

                  <SheetSidePanelItem
                    sheetItem={character.upbringing}
                    title={"Origem"}
                  ></SheetSidePanelItem>
                  <Divider variant="middle" component="li" />

                  <SheetSidePanelItem
                    sheetItem={character.experience}
                    title={"Experiência"}
                  ></SheetSidePanelItem>
                  <Divider variant="middle" component="li" />

                  <SheetSidePanelItem
                    sheetItem={character.mark}
                    title={"Marca"}
                  ></SheetSidePanelItem>
                  <Divider variant="middle" component="li" />
                  <SheetSidePanelItem
                    sheetItem={character.charm}
                    title={"Charme"}
                  ></SheetSidePanelItem>
                  <Divider variant="middle" component="li" />
                  <SheetSidePanelItem
                    sheetItem={character.bond}
                    title={"Vínculos"}
                  ></SheetSidePanelItem>
                </CollapsableListItem>
                <Divider key={`divider-${index}`} variant="middle"></Divider>
              </Fragment>
            );
          })}
        </SheetSidePanel>
      </ScrollableDiv>
    </Box>
  );
}
