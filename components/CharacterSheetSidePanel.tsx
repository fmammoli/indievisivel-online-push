import { Box, Divider, List } from "@mui/material";

import { Dispatch, Fragment, SetStateAction, useState } from "react";
import CollapsableListItem from "./CollapsableListItem";
import ScrollableDiv from "./ScrollableDiv";

import SheetSidePanel from "./SheetSidePanel";
import SheetSidePanelTitleItem from "./SheetSidePanelTitleItem";
import SheetSidePanelItem from "./SheetSidePanelItem";
import { CharacterType } from "../gameData/characters";
import CharacterModal from "./CharacterModal";
import { GameType } from "@/gameData/games";
import { nanoid } from "nanoid";

export default function CharacterSheetSidePanel({
  characters,
  currentCharracter,
  setCurrentCharacter,
  handleHideButton,
  game,
  setCharacters,
}: {
  characters: CharacterType[];
  currentCharracter: CharacterType | null;
  setCurrentCharacter: Dispatch<SetStateAction<CharacterType>>;
  handleHideButton?: () => void;
  game: GameType;
  setCharacters: Dispatch<SetStateAction<CharacterType[]>>;
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
    if (!newChar) throw new Error("Error: Character no found");
    setChecked(characterId);
    setCurrentCharacter(newChar);
  }

  const [modalState, setModalState] = useState(false);

  const handleHide = handleHideButton ? { handleHide: handleHideButton } : {};

  const [modalCharacter, setModalCharacter] = useState<CharacterType | null>(
    null
  );

  function handleOpenModal(id: string) {
    const character = characters.find((char, index) => char.id === id);
    if (!character) {
      throw new Error(`Error: cannot find character with id: ${id}`);
    }
    setModalCharacter(character);
    setModalState(true);
  }
  function handleCloseModal() {
    setModalCharacter(null);
    setModalState(false);
  }

  function handleUpdate(char: any) {
    setCharacters((prevChar: CharacterType[]) => {
      let found = false;
      const newChars = prevChar.map((item) => {
        if (item.id === char.id) {
          found = true;
          return char;
        }
        return item;
      });
      if (found) {
        return newChars;
      } else {
        return [...prevChar, { ...char }];
      }
    });
  }

  function handleRemove(char: CharacterType) {
    setCharacters((prevChar: CharacterType[]) => {
      const newChar = prevChar.filter((item) => item.id !== char.id);
      if (currentCharracter && currentCharracter.id === char.id) {
        setCurrentCharacter(newChar[0]);
        setChecked(newChar[0].id);
      }
      return newChar;
    });
  }

  function handleAddButton() {
    let emptyChar: CharacterType = {
      id: nanoid(),
      name: "",
      fromGame: "",
      gameId: "",
      pronouns: "",
      age: "",
      gifts: {
        description: "",
        list: [],
      },
      upbringing: {
        desciption: "",
        list: [],
      },
      experience: {
        description: "",
        list: [],
      },
      mark: {
        list: [],
      },
      charm: {
        list: [],
      },
      bond: {
        list: [],
      },
      notes: "",
    };
    setModalCharacter({
      id: nanoid(),
      name: "",
      fromGame: "",
      gameId: "",
      pronouns: "",
      age: "",
      gifts: {
        description: "",
        list: [],
      },
      upbringing: {
        desciption: "",
        list: [],
      },
      experience: {
        description: "",
        list: [],
      },
      mark: {
        list: [],
      },
      charm: {
        list: [],
      },
      bond: {
        list: [],
      },
      notes: "",
    });
    setModalState(true);
  }

  function handleCreateNewChar(
    newChar: CharacterType & Omit<CharacterType, CharacterType["id"]>
  ) {
    setCharacters((prev) => [...prev, { ...newChar }]);
  }

  return (
    <>
      <Box
        sx={{ height: "100%", display: "flex", flexDirection: "column" }}
        py={1}
      >
        <ScrollableDiv>
          <SheetSidePanel
            title={"Personagens"}
            align={"left"}
            {...handleHide}
            addButton
            handleAdd={handleAddButton}
          >
            {characters.map((character, index) => {
              if (character.id !== "-1")
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
                              character.pronouns && character.age
                                ? `${character.pronouns} - ${character.age} anos`
                                : character.pronouns
                                ? `${character.pronouns}`
                                : character.age
                                ? `${character.age} anos`
                                : ""
                            }
                            disablePadding
                            noSettings
                            chat
                            handleChatClick={handleChatClick}
                            handleEditClick={handleOpenModal}
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
                      <Divider variant="middle" component="li" />
                      <SheetSidePanelItem
                        sheetItem={character.notes}
                        title={"Notas"}
                      ></SheetSidePanelItem>
                    </CollapsableListItem>
                    <Divider
                      key={`divider-${index}`}
                      variant="middle"
                    ></Divider>
                  </Fragment>
                );
            })}
          </SheetSidePanel>
        </ScrollableDiv>
      </Box>
      <CharacterModal
        game={game}
        open={modalState}
        character={modalCharacter}
        setCharacter={setModalCharacter}
        handleOnClose={handleCloseModal}
        handleUpdate={handleUpdate}
        handleCreate={handleCreateNewChar}
        handleRemove={handleRemove}
      ></CharacterModal>
    </>
  );
}
