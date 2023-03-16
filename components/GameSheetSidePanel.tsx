import { Box, Button, Divider } from "@mui/material";

import { Dispatch, Fragment, SetStateAction, useMemo } from "react";
import ScrollableDiv from "./ScrollableDiv";
import PentagonIcon from "@mui/icons-material/Pentagon";
import CircleIcon from "@mui/icons-material/Circle";

import useDiceRoller from "./useDiceRoller";
import { DiceRoll } from "@dice-roller/rpg-dice-roller";
import SheetSidePanel from "./SheetSidePanel";
import SheetSidePanelTitleItem from "./SheetSidePanelTitleItem";
import SheetSidePanelItem from "./SheetSidePanelItem";
import { nanoid } from "nanoid";
import { MessageType } from "@/pages/[gameId]/[sessionId]";
import { GameType } from "@/gameData/games";

interface GameSheetViewProps {
  game: GameType;
  setMessages: Dispatch<SetStateAction<MessageType[]>>;
  handleHideButton?: () => void;
}

export default function GameSheetSidePanel({
  game,
  setMessages,
  handleHideButton,
}: GameSheetViewProps) {
  const diceRoller = useDiceRoller();
  const complications = game.complications;
  const matrix = game.matrix;

  function handleComplicationsRoll(e: React.MouseEvent<HTMLButtonElement>) {
    const roll = diceRoller.roll("1d6");
    setMessages((messages: MessageType[]) => {
      const value = (roll as DiceRoll).total;
      const text = complications[value - 1].text;
      const newMessage: MessageType = {
        id: nanoid(),
        text: text,
        color: "complications.main",
        author: "Complicações",
        timestamp: new Date(),
        side: "RIGHT",
        rerollable: false,
        content: { props: { value1: value, text: text } },
      };
      return [...messages, newMessage];
    });
  }
  function handleMatrixRoll(e: React.MouseEvent<HTMLButtonElement>) {
    const roll1 = diceRoller.roll("1d6");
    const roll2 = diceRoller.roll("1d6");

    const total =
      ((roll1 as DiceRoll).total - 1) * 6 +
      ((roll1 as DiceRoll).total - 1) +
      (roll2 as DiceRoll).total;

    const text = matrix[total].text;

    setMessages((messages: MessageType[]) => {
      const newMessage: MessageType = {
        id: nanoid(),
        text: text,
        color: "matrix.main",
        author: "Matrix",
        timestamp: new Date(),
        side: "RIGHT",
        content: {
          props: {
            value1: (roll1 as DiceRoll).total,
            value2: (roll2 as DiceRoll).total,
            text: text,
          },
        },
        rerollable: false,
      };
      return [...messages, newMessage];
    });
  }
  const pdfProps = useMemo(
    () =>
      game.pdf ? { showButton: true, link: `/pdfViewer/${game.pdf}` } : {},
    [game]
  );

  const handleHide = handleHideButton ? { handleHide: handleHideButton } : {};

  function handleContentButtonClick(table: {
    id: string;
    title: string;
    rolls: {
      value: number;
      text: string;
    }[];
  }) {
    const roll = diceRoller.roll(`1d${table.rolls.length}`);
    setMessages((messages: MessageType[]) => {
      const value = (roll as DiceRoll).total;
      const text = table.rolls[value - 1].text;
      const newMessage: MessageType = {
        id: nanoid(),
        text: text,
        color: "other.main",
        author: `Tabela ${table.title}`,
        timestamp: new Date(),
        side: "RIGHT",
        rerollable: false,
        content: { props: { value1: value, text: text } },
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
        <SheetSidePanel title={"Jogo"} {...handleHide} {...pdfProps}>
          <SheetSidePanelTitleItem
            noEdit
            noSettings
            id={game.id}
            title={game.title}
            secondaryText={`${game.author} - ${game.version}`}
          ></SheetSidePanelTitleItem>
          {Object.keys(game.gameDescriptions).map((keyName, index) => {
            return (
              <Fragment key={index}>
                <Divider variant="middle" component="li" />
                <SheetSidePanelItem
                  sheetItem={game.gameDescriptions[keyName]}
                  title={game.gameDescriptions[keyName].title}
                  handleContentButtons={handleContentButtonClick}
                ></SheetSidePanelItem>
              </Fragment>
            );
          })}
          <Divider variant="middle" component="li" />
          <SheetSidePanelItem
            sheetItem={game.complications}
            title={"Complicações"}
            button={
              <Button
                variant="outlined"
                color={"complications"}
                sx={{ borderRadius: "90px", maxHeight: "33px" }}
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
                color={"matrix"}
                sx={{ borderRadius: "90px", maxHeight: "33px" }}
                size="small"
                startIcon={<PentagonIcon></PentagonIcon>}
                onClick={handleMatrixRoll}
              >
                Rolar
              </Button>
            }
          ></SheetSidePanelItem>
        </SheetSidePanel>
      </ScrollableDiv>
    </Box>
  );
}
