import { Box, Divider, List } from "@mui/material";

import { Dispatch, Fragment, SetStateAction, useState } from "react";
import CollapsableListItem from "./CollapsableListItem";
import ScrollableDiv from "./ScrollableDiv";

import SheetSidePanel from "./SheetSidePanel";
import SheetSidePanelTitleItem from "./SheetSidePanelTitleItem";
import SheetSidePanelItem from "./SheetSidePanelItem";
import { CharacterType } from "../gameData/characters";

interface CharacterSheetSidePanel {}

export default function CharacterSheetSidePanel({
  characters,
  currentCharracter,
  setCurrentCharacter,
  handleHideButton,
}: {
  characters: CharacterType[];
  currentCharracter: CharacterType | null;
  setCurrentCharacter: Dispatch<SetStateAction<CharacterType>>;
  handleHideButton?: () => void;
}) {
  const [checked, setChecked] = useState<null | string>(
    currentCharracter ? currentCharracter.id : null
  );

  function handleChatClick({
    characterId,
    characterName,
  }: {
    characterId: string;
    characterName: string;
  }) {
    const newChar = characters.find((item, index) => {
      return item.id === characterId;
    });
    if (!newChar) throw new Error("Error:Character no found");
    setChecked(characterId);
    setCurrentCharacter(newChar);
  }

  const handleHide = handleHideButton ? { handleHide: handleHideButton } : {};
  return (
    <Box
      sx={{ height: "100%", display: "flex", flexDirection: "column" }}
      py={1}
    >
      <ScrollableDiv>
        <SheetSidePanel
          title={"Character Sheet"}
          align={"left"}
          {...handleHide}
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
                        secondaryText={
                          character.pronouns &&
                          `${character.pronouns}` &&
                          character.age &&
                          ` - ${character.age} anos`
                        }
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
