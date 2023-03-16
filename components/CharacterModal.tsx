import { CharacterType } from "@/gameData/characters";
import {
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormGroup,
  IconButton,
} from "@mui/material";
import { useEffect, useRef } from "react";
import Image from "next/image";

import pushCharacterSheetLogo from "../public/images/pushCharacterSheetLogo.png";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import useDiceRoller from "./useDiceRoller";
import { GameType } from "@/gameData/games";
import { DiceRoll } from "@dice-roller/rpg-dice-roller";
import CloseIcon from "@mui/icons-material/Close";
import TextInputSheet from "./TextInputSheet";
import InputList from "./InputList";
import InputNotes from "./InputNotes";
import InputListItem from "./InputListItem";

interface CharacterModalPropsType {
  open: boolean;
  character: CharacterType | null;
  editable?: boolean;
  handleOnClose: () => void;
  setCharacter: any;
  game: GameType;
  handleUpdate: (char: any) => void;
  handleCreate: (char: any) => void;
  handleRemove: (char: any) => void;
}

export type CharacterListsTypes =
  | "gifts"
  | "experience"
  | "upbringing"
  | "mark"
  | "bond"
  | "charm";

export default function CharacterModal({
  character,
  open = true,
  handleOnClose,
  setCharacter,
  game,
  handleUpdate,
  handleCreate,
  handleRemove,
}: CharacterModalPropsType) {
  const descriptionElementRef = useRef<HTMLElement>(null);
  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  function handleAdd(
    character: CharacterType | null,
    keyName: CharacterListsTypes
  ) {
    if (character) {
      setCharacter((char: CharacterType) => {
        let newListA = {
          [keyName]: {
            ...char[keyName],
            list: [...char[keyName].list, ""],
          },
        };

        return { ...char, ...newListA };
      });
    }
  }

  function handleDelete(
    text: string,
    index: number,
    keyName: CharacterListsTypes
  ) {
    if (character) {
      const oldList = [...(character as CharacterType)[keyName].list];
      const newList = oldList.filter((item, i) => i !== index);
      const newCharValues = {
        ...character,
        [keyName]: { ...character[keyName], list: [...newList] },
      };
      setCharacter(newCharValues);
      // handleUpdate(newCharValues);
    }
  }

  const diceRoller = useDiceRoller();

  function handleReroll(
    text: string,
    index: number,
    keyName: CharacterListsTypes
  ) {
    const roll = diceRoller.roll("1d6");
    const newText = game[keyName].find(
      (item, i) => item.value === (roll as DiceRoll).total
    );
    if (!newText)
      throw new Error(
        `Error: cannot find property of value:${
          (roll as DiceRoll).total
        } on ${keyName}`
      );

    if (character) {
      const oldList = [...(character as CharacterType)[keyName].list];
      const newList = oldList.map((item, i) => {
        if (i === index) {
          return newText.text;
        } else {
          return item;
        }
      });
      const newCharValues = {
        ...character,
        [keyName]: { ...character[keyName], list: [...newList] },
      };
      setCharacter(newCharValues);
      // handleUpdate(newCharValues);
    }
  }

  const formEl = useRef<HTMLFormElement>(null);

  function handleOnSave() {
    if (formEl) {
      formEl.current?.dispatchEvent(
        new Event("submit", { cancelable: true, bubbles: true })
      );
    }
  }

  function handleSubmit(e: any) {
    let inputs = [...e.target.elements].filter(
      (item, index) => item.type === "text" || item.type === "textarea"
    );

    let a = inputs.map((item, index) => {
      return { name: item.name, value: item.value };
    });

    let newCharValues: any = {};
    a.forEach((item, index) => {
      const splitedName = item.name.split("____");

      if (splitedName.length > 1) {
        if (newCharValues[splitedName[1]]) {
          newCharValues[splitedName[1]].list.push(item.value);
        } else {
          newCharValues[splitedName[1]] = { list: [item.value] };
        }
      } else {
        newCharValues[item.name] = item.value;
      }
    });

    newCharValues.id = character?.id;

    setCharacter({ ...character, ...newCharValues });
    handleUpdate({ ...character, ...newCharValues });
    handleOnClose();
  }

  function handleEreaseChar() {
    handleRemove(character);
    handleOnClose();
  }

  return (
    <Dialog open={open} scroll={"paper"} maxWidth={"xl"}>
      <DialogTitle id="scroll-dialog-title">
        <Box display={"flex"} justifyContent={"flex-end"}>
          <IconButton onClick={handleOnClose}>
            <CloseIcon></CloseIcon>
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent
        dividers={true}
        id="scroll-dialog-description"
        ref={descriptionElementRef}
        tabIndex={-1}
      >
        <Container>
          <form onSubmit={handleSubmit} ref={formEl}>
            <FormGroup>
              <Box
                display={"flex"}
                gap={2}
                alignItems={"flex-end"}
                id={"formTop"}
                justifyContent="space-between"
                sx={{
                  flexDirection: { xs: "column", sm: "column", md: "row" },
                }}
              >
                <Box flexGrow={1} alignSelf="center">
                  <Box position={"relative"}>
                    <Image
                      src={pushCharacterSheetLogo}
                      alt={"Charactersheet logo"}
                      width={200}
                      height={120}
                    ></Image>
                  </Box>
                </Box>
                <Box flexGrow={2} paddingRight={1}>
                  <Box display={"flex"} flexDirection={"column"} gap={2}>
                    <TextInputSheet
                      name={"name"}
                      label={"Nome"}
                      initialValue={character ? character.name : ""}
                    ></TextInputSheet>
                    <Box
                      display={"flex"}
                      sx={{
                        flexDirection: {
                          xs: "column",
                          sm: "column",
                          md: "row",
                        },
                        gap: { xs: 2, sm: 2, md: 2 },
                      }}
                    >
                      <TextInputSheet
                        name={"pronouns"}
                        label={"Pronome"}
                        initialValue={character ? character.pronouns : ""}
                      ></TextInputSheet>
                      <TextInputSheet
                        name={"age"}
                        label={"Idade"}
                        initialValue={character ? character.age : ""}
                      ></TextInputSheet>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box
                id={"formList1"}
                display="flex"
                paddingTop={0}
                justifyContent="space-between"
                gap={4}
                sx={{
                  flexDirection: { xs: "column", sm: "column", md: "row" },
                }}
              >
                <InputList
                  title={"Doms"}
                  handleAdd={() => handleAdd(character, "gifts")}
                >
                  {character?.gifts.list.map((item, index) => {
                    return (
                      <InputListItem
                        index={index}
                        key={`${index}_${item}`}
                        initialValue={item}
                        handleDelete={handleDelete}
                        handleReroll={handleReroll}
                        keyName={"gifts"}
                        inputName={`${index}____${"gifts"}____${item}`}
                      ></InputListItem>
                    );
                  })}
                </InputList>
                <InputList
                  title={"Origem"}
                  handleAdd={() => handleAdd(character, "upbringing")}
                >
                  {character?.upbringing.list.map((item, index) => {
                    return (
                      <InputListItem
                        key={`${index}_${item}`}
                        index={index}
                        initialValue={item}
                        handleDelete={handleDelete}
                        handleReroll={handleReroll}
                        keyName={"upbringing"}
                        inputName={`${index}____${"upbringing"}____${item}`}
                      ></InputListItem>
                    );
                  })}
                </InputList>
              </Box>
              <Box
                id={"formList2"}
                display="flex"
                paddingTop={0}
                justifyContent="space-between"
                gap={4}
                sx={{
                  flexDirection: { xs: "column", sm: "column", md: "row" },
                }}
              >
                <InputList
                  title={"Experiência"}
                  handleAdd={() => handleAdd(character, "experience")}
                >
                  {character?.experience.list.map((item, index) => {
                    return (
                      <InputListItem
                        key={`${index}_${item}`}
                        index={index}
                        initialValue={item}
                        handleDelete={handleDelete}
                        handleReroll={handleReroll}
                        keyName={"experience"}
                        inputName={`${index}____${"experience"}____${item}`}
                      ></InputListItem>
                    );
                  })}
                </InputList>
                <InputList
                  title={"Marca"}
                  handleAdd={() => handleAdd(character, "mark")}
                >
                  {character?.mark.list.map((item, index) => {
                    return (
                      <InputListItem
                        key={`${index}_${item}`}
                        index={index}
                        initialValue={item}
                        handleDelete={handleDelete}
                        handleReroll={handleReroll}
                        keyName={"mark"}
                        inputName={`${index}____${"mark"}____${item}`}
                      ></InputListItem>
                    );
                  })}
                </InputList>
              </Box>
              <Box
                id={"formList3"}
                display="flex"
                paddingTop={0}
                justifyContent="space-between"
                gap={4}
                sx={{
                  flexDirection: { xs: "column", sm: "column", md: "row" },
                }}
              >
                <InputList
                  title={"Pertence"}
                  handleAdd={() => handleAdd(character, "charm")}
                >
                  {character?.charm.list.map((item, index) => {
                    return (
                      <InputListItem
                        key={`${index}_${item}`}
                        index={index}
                        initialValue={item}
                        handleDelete={handleDelete}
                        handleReroll={handleReroll}
                        keyName={"charm"}
                        inputName={`${index}____${"charm"}____${item}`}
                      ></InputListItem>
                    );
                  })}
                </InputList>
                <InputList
                  title={"Vínculo"}
                  handleAdd={() => handleAdd(character, "bond")}
                >
                  {character?.bond.list.map((item, index) => {
                    return (
                      <InputListItem
                        key={`${index}_${item}`}
                        index={index}
                        initialValue={item}
                        handleDelete={handleDelete}
                        handleReroll={handleReroll}
                        keyName={"bond"}
                        inputName={`${index}____${"bond"}____${item}`}
                      ></InputListItem>
                    );
                  })}
                </InputList>
              </Box>
              <InputList title={"Notas"}>
                <InputNotes
                  name={"notes"}
                  initialValue={character?.notes}
                  label={"notas"}
                ></InputNotes>
              </InputList>
            </FormGroup>
          </form>
        </Container>
      </DialogContent>
      <DialogActions>
        <Button
          variant="outlined"
          color={"error"}
          onClick={handleEreaseChar}
          startIcon={<DeleteForeverIcon></DeleteForeverIcon>}
        >
          Deletar
        </Button>
        <Button variant="contained" color={"info"} onClick={handleOnSave}>
          Salvar
        </Button>
      </DialogActions>
    </Dialog>
  );
}
