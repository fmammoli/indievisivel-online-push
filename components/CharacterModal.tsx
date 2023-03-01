import { CharacterType } from "@/gameData/characters";
import {
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Fade,
  FormControlLabel,
  FormGroup,
  IconButton,
  Modal,
  Paper,
  Slide,
  TextField,
  Typography,
} from "@mui/material";
import { ReactNode, useEffect, useRef, useState } from "react";
import Image from "next/image";
import AddIcon from "@mui/icons-material/Add";
import SettingsBackupRestoreIcon from "@mui/icons-material/SettingsBackupRestore";
import pushCharacterSheetLogo from "../public/images/pushCharacterSheetLogo.png";
import { AccountCircle, Circle } from "@mui/icons-material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import useDiceRoller from "./useDiceRoller";
import { GameType } from "@/gameData/games";
import { DiceRoll } from "@dice-roller/rpg-dice-roller";

interface CharacterModalPropsType {
  open: boolean;
  character: CharacterType | null;
  editable?: boolean;
  handleOnClose: () => void;
  setCharacter: any;
  game: GameType;
}

type CharacterListsTypes =
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
  // console.log(character);

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
      // console.log(`${index}_____${text}`);
      setCharacter((char: CharacterType) => {
        const newList = char[keyName].list.filter((item, i) => index !== i);
        // console.log(newList);
        let newChar = { ...char };

        newChar[keyName].list = newList;
        return newChar;
      });
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

    setCharacter((prevChar: CharacterType) => {
      const newList = prevChar[keyName].list.map((item: string, i: number) => {
        if (i === index) {
          return newText.text;
        } else return item;
      });
      let newChar = { ...prevChar };

      newChar[keyName].list = newList;
      return newChar;
    });
  }

  const formEl = useRef<HTMLFormElement>(null);

  function handleOnSave() {
    if (formEl) {
      formEl.current?.dispatchEvent(
        new Event("submit", { cancelable: true, bubbles: true })
      );
    }
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    console.log("saved");
    console.log(e);
    const target = e.target as typeof e.target & CharacterType;
    setCharacter((prevChar: CharacterType) => {
      const newChar = {};
      return { ...prevChar };
    });
  }

  return (
    <Dialog open={open} scroll={"paper"} maxWidth={"lg"}>
      <DialogTitle id="scroll-dialog-title"></DialogTitle>
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
              >
                <Box flexGrow={1}>
                  <Box position={"relative"}>
                    <Image
                      src={pushCharacterSheetLogo}
                      alt={"Charactersheet logo"}
                      width={200}
                      height={120}
                    ></Image>
                  </Box>
                </Box>
                <Box flexGrow={2}>
                  <Box display={"flex"} flexDirection={"column"} gap={2}>
                    <TextInputSheet
                      name={"name"}
                      label={"Nome"}
                      initialValue={character ? character.name : ""}
                    ></TextInputSheet>
                    <Box display={"flex"}>
                      <TextInputSheet
                        name={"pronoum"}
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
                      ></InputListItem>
                    );
                  })}
                </InputList>
              </Box>
            </FormGroup>
          </form>
        </Container>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleOnClose}>Delete</Button>
        <Button onClick={handleOnSave}>Save</Button>
      </DialogActions>
    </Dialog>
  );
}

interface InputListPropsType {
  children?: ReactNode;
  title: string;
  handleAdd?: () => void;
}

function InputList({ children, title, handleAdd }: InputListPropsType) {
  return (
    <Box id={"formList1"} paddingTop={4} flexGrow={1}>
      <Box
        sx={{ backgroundColor: "rgba(0, 0, 0, 0.06)" }}
        p={1}
        borderRadius={"8px 8px 0 0"}
      >
        <Box
          borderRadius={"6px 6px 0 0"}
          sx={{ backgroundColor: "white" }}
          paddingX={1}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography variant={"body1"}>{title}</Typography>
          <IconButton onClick={handleAdd}>
            <AddIcon></AddIcon>
          </IconButton>
        </Box>
        {children}
      </Box>
    </Box>
  );
}

interface InputListItemPropsType {
  initialValue: string;
  index: number;
  handleDelete: (
    initialValue: string,
    index: number,
    keyName: CharacterListsTypes
  ) => void;
  handleReroll: (
    initialValue: string,
    index: number,
    keyName: CharacterListsTypes
  ) => void;
  keyName: CharacterListsTypes;
}

function InputListItem({
  index,
  initialValue,
  handleDelete,
  handleReroll,
  keyName,
}: InputListItemPropsType) {
  // console.log(`${index}__${initialValue}`);
  const [show, setShow] = useState(false);
  function handleEnter() {
    setShow(true);
  }
  function handleExit() {
    setShow(false);
  }

  function handleOnDelete() {
    handleDelete(initialValue, index, keyName);
  }

  function handleOnReroll() {
    handleReroll(initialValue, index, keyName);
  }

  return (
    <Box
      sx={{
        paddingRight: 4,
        paddingY: 2,
        position: "relative",
      }}
    >
      <div
        onMouseEnter={handleEnter}
        onMouseLeave={handleExit}
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Circle fontSize="small" sx={{ color: "white", mr: 1, my: 0.5 }} />
        <TextField
          hiddenLabel
          id="input-with-sx"
          variant="standard"
          defaultValue={initialValue}
          size={"small"}
          fullWidth
          onFocus={handleExit}
        />
        <Fade in={show}>
          <Paper
            elevation={4}
            sx={{
              display: "flex",
              top: "0.5rem",
              left: "100%",
              transform: "translateX(-100%)",
              position: "absolute",
              padding: 0.4,
            }}
          >
            <IconButton color="primary" onClick={handleOnReroll}>
              <SettingsBackupRestoreIcon></SettingsBackupRestoreIcon>
            </IconButton>
            <IconButton color="error" onClick={handleOnDelete}>
              <DeleteOutlinedIcon></DeleteOutlinedIcon>
            </IconButton>
          </Paper>
        </Fade>
      </div>
    </Box>
  );
}

interface TextInputSheetPropsType {
  initialValue?: string;
  label: string;
  name: string;
}
function TextInputSheet({
  initialValue,
  label,
  name,
}: TextInputSheetPropsType) {
  return (
    <FormControlLabel
      sx={{
        backgroundColor: "rgba(0, 0, 0, 0.06)",
        padding: 0.4,
        borderRadius: "8px 0 0 8px",
        display: "flex",
        justifyContent: "flex-end",
      }}
      control={
        <Box paddingX={1} width={"100%"}>
          <TextField
            disabled
            name={name}
            hiddenLabel
            id="filled-hidden-label-small"
            defaultValue={initialValue}
            variant="standard"
            fullWidth
          />
        </Box>
      }
      label={
        <Box
          sx={{
            backgroundColor: "white",
            borderRadius: "4px 0 0 4px",
          }}
          p={0.6}
        >
          <Typography variant="body2">{label}</Typography>
        </Box>
      }
      labelPlacement="start"
    ></FormControlLabel>
  );
}
