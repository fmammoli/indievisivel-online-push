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

import { Dispatch, SetStateAction, useState } from "react";
import CollapsableListItem from "./CollapsableListItem";
import ScrollableDiv from "./ScrollableDiv";
import DiceIcon from "./DiceIcon";
import PentagonIcon from "@mui/icons-material/Pentagon";
import SquareIcon from "@mui/icons-material/Square";
import CircleIcon from "@mui/icons-material/Circle";
import games from "../gameData/games";
import { newMessageType } from "./Chat";
import useDiceRoller from "./useDiceRoller";
import { DiceRoll } from "@dice-roller/rpg-dice-roller";
import { totalmem } from "os";

interface GameSheetViewProps {
  setMessages: Dispatch<SetStateAction<newMessageType[]>>;
}

export default function GameSheetView({ setMessages }: GameSheetViewProps) {
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
        text: text,
        color: "#ff1744",
        author: "Complicações",
        timestamp: new Date(),
        side: "RIGHT",
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
        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              <Box
                display={"flex"}
                alignItems="center"
                justifyContent={"flex-end"}
                gap={2}
              >
                <Typography variant="h5" component="h2" fontWeight={300}>
                  Game Sheet
                </Typography>
                <IconButton aria-label="Hide Game Sheet View">
                  <ArrowForwardIcon></ArrowForwardIcon>
                </IconButton>
              </Box>
            </ListSubheader>
          }
        >
          <ListItem alignItems="flex-start">
            <ListItemText
              primary={game.title}
              secondary={`${game.author} - ${game.version}`}
            ></ListItemText>
            <IconButton aria-label="Edit Game Sheet" color="primary">
              <EditOutlinedIcon></EditOutlinedIcon>
            </IconButton>
            <IconButton aria-label="Edit Game Sheet">
              <SettingsOutlinedIcon></SettingsOutlinedIcon>
            </IconButton>
          </ListItem>

          <Divider variant="middle" component="li" />

          <CollapsableListItem title="Sobre o jogo" noButton>
            <ListItemText
              sx={{ paddingX: 3, paddingBottom: 2 }}
              secondary={game.about.text}
            ></ListItemText>
          </CollapsableListItem>

          <Divider variant="middle" component="li" />

          <CollapsableListItem title={"Missão"} noButton>
            <ListItem sx={{ paddingX: 3, paddingBottom: 2 }}>
              <Typography
                variant="body2"
                component="p"
                color={"rgba(0, 0, 0, 0.6)"}
              >
                {game.mision.text}
              </Typography>
            </ListItem>
          </CollapsableListItem>

          <Divider variant="middle" component="li" />

          <CollapsableListItem title="Agenda" noButton>
            <ListItem sx={{ paddingX: 3, paddingBottom: 2 }}>
              <Box display={"flex"} flexDirection="column" gap={2}>
                <Typography
                  variant="body2"
                  component="p"
                  color={"rgba(0, 0, 0, 0.6)"}
                >
                  {game.agenda.description}
                </Typography>
                <Box>
                  {game.agenda.list.map((item, index) => (
                    <Typography
                      key={Math.random()}
                      variant="body2"
                      component="p"
                      color={"rgba(0, 0, 0, 0.6)"}
                      paddingBottom={1}
                    >
                      - {item}
                    </Typography>
                  ))}
                </Box>
              </Box>
            </ListItem>
          </CollapsableListItem>

          <Divider variant="middle" component="li" />

          <CollapsableListItem title="Recompenças" noButton>
            <ListItem sx={{ paddingX: 3, paddingBottom: 2 }}>
              <Box display={"flex"} flexDirection="column" gap={2}>
                <Typography
                  variant="body2"
                  component="p"
                  color={"rgba(0, 0, 0, 0.6)"}
                >
                  {game.rewards.description}
                </Typography>
                <Box>
                  {game.rewards.list.map((item, index) => (
                    <Typography
                      key={Math.random()}
                      variant="body2"
                      component="p"
                      color={"rgba(0, 0, 0, 0.6)"}
                      paddingBottom={1}
                      paddingLeft={1}
                    >
                      {item}
                    </Typography>
                  ))}
                </Box>
                <Box>
                  {game.rewards.details.map((item, index) => (
                    <Typography
                      key={Math.random()}
                      variant="body2"
                      component="p"
                      color={"rgba(0, 0, 0, 0.6)"}
                      paddingBottom={1}
                    >
                      {item}
                    </Typography>
                  ))}
                </Box>
              </Box>
            </ListItem>
          </CollapsableListItem>

          <Divider variant="middle" component="li" />

          <CollapsableListItem
            title={"Complicações"}
            color={"error"}
            icon={<CircleIcon></CircleIcon>}
            handleButtonClick={handleComplicationsRoll}
          >
            {complications.map((item, index) => (
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
            ))}
          </CollapsableListItem>

          <Divider variant="middle" component="li" />

          <CollapsableListItem
            title={"Matriz"}
            color={"primary"}
            icon={<PentagonIcon></PentagonIcon>}
            handleButtonClick={handleMatrixRoll}
          >
            {matrix.map((item, index) => (
              <>
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
                {item.id === 6 && item.text !== "" ? (
                  <Divider key={Math.random()} variant="middle" />
                ) : null}
              </>
            ))}
          </CollapsableListItem>

          <Divider variant="middle" component="li" />

          <CollapsableListItem title="Temas" noButton>
            <ListItem sx={{ paddingX: 3, paddingBottom: 2 }}>
              <Box display={"flex"} flexDirection="column" gap={2}>
                <Typography
                  variant="body2"
                  component="p"
                  color={"rgba(0, 0, 0, 0.6)"}
                >
                  {game.themes.description}
                </Typography>
                <Box>
                  {game.themes.list.map((item, index) => (
                    <Typography
                      key={Math.random()}
                      variant="body2"
                      component="p"
                      color={"rgba(0, 0, 0, 0.6)"}
                      paddingBottom={1}
                    >
                      - {item}
                    </Typography>
                  ))}
                </Box>
              </Box>
            </ListItem>
          </CollapsableListItem>
        </List>
      </ScrollableDiv>
    </Box>
  );
}
