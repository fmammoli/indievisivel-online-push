import { Box, Button, Divider, Typography } from "@mui/material";

import { Dispatch, SetStateAction } from "react";
import ScrollableDiv from "./ScrollableDiv";
import DiceIcon from "./DiceIcon";
import PentagonIcon from "@mui/icons-material/Pentagon";
import CircleIcon from "@mui/icons-material/Circle";
import games from "../gameData/games";
import { newMessageType } from "./Chat";
import useDiceRoller from "./useDiceRoller";
import { DiceRoll } from "@dice-roller/rpg-dice-roller";
import SheetSidePanel from "./SheetSidePanel";
import SheetSidePanelTitleItem from "./SheetSidePanelTitleItem";
import SheetSidePanelItem from "./SheetSidePanelItem";
import { nanoid } from "nanoid";

interface GameSheetViewProps {
  setMessages: Dispatch<SetStateAction<newMessageType[]>>;
}

export default function GameSheetSidePanel({
  setMessages,
}: GameSheetViewProps) {
  const game = games[0];
  const diceRoller = useDiceRoller();
  const complications = game.complications;
  const matrix = game.matrix;

  function handleComplicationsRoll(e: React.MouseEvent<HTMLButtonElement>) {
    const roll = diceRoller.roll("1d6");
    setMessages((messages: newMessageType[]) => {
      const value = (roll as DiceRoll).total;
      const text = complications[value - 1].text;
      const newMessage: newMessageType = {
        id: nanoid(),
        text: text,
        color: "#ff1744",
        author: "Complicações",
        timestamp: new Date(),
        side: "RIGHT",
        rerollable: false,
        content: (
          <Box display={"flex"} gap={1} alignItems="flex-start">
            <DiceIcon
              value={value}
              fontSize="medium"
              color="disabled"
            ></DiceIcon>
            <Typography variant="body2" color={"rgba(0, 0, 0, 0.6)"}>
              {text}
            </Typography>
          </Box>
        ),
      };
      return [...messages, newMessage];
    });
  }
  function handleMatrixRoll(e: React.MouseEvent<HTMLButtonElement>) {
    const roll1 = diceRoller.roll("1d6");
    const roll2 = diceRoller.roll("1d6");

    const total =
      ((roll1 as DiceRoll).total - 1) * ((roll2 as DiceRoll).total - 1);

    const text =
      matrix[total].text == "" ? matrix[total + 1].text : matrix[total].text;

    setMessages((messages: newMessageType[]) => {
      const newMessage: newMessageType = {
        id: nanoid(),
        text: text,
        color: "#6750A4",
        author: "Matrix",
        timestamp: new Date(),
        side: "RIGHT",
        content: (
          <Box display={"flex"} gap={1} alignItems="flex-start">
            <Box>
              <DiceIcon
                value={(roll1 as DiceRoll).total}
                fontSize="medium"
                color="disabled"
              ></DiceIcon>
              <DiceIcon
                value={(roll2 as DiceRoll).total}
                fontSize="medium"
                color="disabled"
              ></DiceIcon>
            </Box>
            <Typography variant="body2" color={"rgba(0, 0, 0, 0.6)"}>
              {text}
            </Typography>
          </Box>
        ),
        rerollable: false,
      };
      return [...messages, newMessage];
    });
  }

  return (
    <Box
      sx={{ height: "100%", display: "flex", flexDirection: "column" }}
      py={1}
    >
      <ScrollableDiv>
        <SheetSidePanel sheet={game} title={"Game Sheet"}>
          <SheetSidePanelTitleItem
            id={game.id}
            title={game.title}
            secondaryText={`${game.author} - ${game.version}`}
          ></SheetSidePanelTitleItem>
          <Divider variant="middle" component="li" />
          <SheetSidePanelItem
            sheetItem={game.about}
            title={"Sobre o Jogo"}
          ></SheetSidePanelItem>
          <Divider variant="middle" component="li" />
          <SheetSidePanelItem
            sheetItem={game.mission}
            title={"Missão"}
          ></SheetSidePanelItem>
          <Divider variant="middle" component="li" />
          <SheetSidePanelItem
            sheetItem={game.agenda}
            title={"Agenda"}
          ></SheetSidePanelItem>
          <Divider variant="middle" component="li" />
          <SheetSidePanelItem
            sheetItem={game.rewards}
            title={"Recompenças"}
            listStyleTypes={["disc", "none"]}
          ></SheetSidePanelItem>
          <Divider variant="middle" component="li" />
          <SheetSidePanelItem
            sheetItem={game.complications}
            title={"Complicações"}
            button={
              <Button
                variant="outlined"
                color={"error"}
                sx={{ borderRadius: "90px" }}
                size="small"
                startIcon={<CircleIcon></CircleIcon>}
                onClick={handleComplicationsRoll}
              >
                Rolar
              </Button>
            }
          ></SheetSidePanelItem>
          <Divider variant="middle" component="li" />

          <SheetSidePanelItem
            sheetItem={game.matrix}
            title={"Matriz"}
            button={
              <Button
                variant="outlined"
                color={"primary"}
                sx={{ borderRadius: "90px" }}
                size="small"
                startIcon={<PentagonIcon></PentagonIcon>}
                onClick={handleMatrixRoll}
              >
                Rolar
              </Button>
            }
          ></SheetSidePanelItem>
          <Divider variant="middle" component="li" />
          <SheetSidePanelItem
            sheetItem={game.themes}
            title={"Temas"}
          ></SheetSidePanelItem>
        </SheetSidePanel>
      </ScrollableDiv>
    </Box>
  );
}
function uuidv4() {
  throw new Error("Function not implemented.");
}
