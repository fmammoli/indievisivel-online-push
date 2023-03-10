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
import MatrixMessageContent from "./MatrixMessageContent";

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
        content: (
          <MatrixMessageContent
            value1={value}
            text={text}
          ></MatrixMessageContent>
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

    setMessages((messages: MessageType[]) => {
      const newMessage: MessageType = {
        id: nanoid(),
        text: text,
        color: "matrix.main",
        author: "Matrix",
        timestamp: new Date(),
        side: "RIGHT",
        content: (
          <MatrixMessageContent
            value1={(roll1 as DiceRoll).total}
            value2={(roll2 as DiceRoll).total}
            text={text}
          ></MatrixMessageContent>
        ),
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
                  sheetItem={game.gameDescriptions[keyName].text}
                  title={game.gameDescriptions[keyName].title}
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
                color={"matrix"}
                sx={{ borderRadius: "90px" }}
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
