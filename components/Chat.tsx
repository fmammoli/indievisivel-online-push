import {
  Box,
  Button,
  Fab,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import ScrollableDiv from "./ScrollableDiv";
import SendIcon from "@mui/icons-material/Send";
import Message from "./Message";
import { DiceRoll } from "@dice-roller/rpg-dice-roller";
import DiceIcon from "./DiceIcon";
import useDiceRoller from "./useDiceRoller";
import { time } from "console";

export interface newMessageType {
  text?: string;
  color: string;
  author: string;
  side: "LEFT" | "RIGHT";
  timestamp: Date;
  content?: JSX.Element;
  rerollable?: boolean;
}

export interface addMessageType {
  text: string;
  author: string;
  color: string;
  side?: "LEFT" | "RIGHT";
}

export interface ChatPropsType {
  author: string;
  messages: newMessageType[];
  setMessages: Dispatch<SetStateAction<newMessageType[]>>;
}

const oracle = [
  { value: 1, text: "Sucesso Parcial" },
  { value: 2, text: "Sucesso Parcial" },
  { value: 3, text: "Sucesso Parcial" },
  { value: 4, text: "Sucesso Parcial" },
  { value: 5, text: "Sucesso" },
  { value: 6, text: "Sucesso" },
  { value: 7, text: "Falha" },
  { value: 8, text: "Falha" },
  { value: 9, text: "Falha" },
  { value: 10, text: "Falha" },
  { value: 11, text: "Falha" },
  { value: 12, text: "Falha" },
];

export default function Chat({
  author = "My Character Name",
  messages,
  setMessages,
}: ChatPropsType) {
  const bottomRef = useRef<HTMLDivElement>(null);
  const textFieldRef = useRef<HTMLDivElement>(null);

  const diceRoller = useDiceRoller();

  useEffect(() => {
    if (messages.length && messages.length > 0) {
      if (messages.length > 1) {
        if (messages[messages.length - 2].rerollable) {
          setMessages((prevMessages) => {
            const lastElement = prevMessages[messages.length - 1];
            const element = prevMessages[prevMessages.length - 2];
            element.rerollable = false;

            console.log(element);
            return [
              ...prevMessages.slice(0, prevMessages.length - 2),
              element,
              lastElement,
            ];
          });
        }
      }
    }
  }, [messages]);

  const addMessage = ({
    text,
    author,
    color,
    side = "LEFT",
  }: addMessageType) => {
    if (textFieldRef.current) {
      textFieldRef.current.getElementsByTagName("textarea")[0].value = "";
    }

    setMessages((messages: newMessageType[]) => {
      const newMessage = {
        text: text,
        color: color,
        author: author,
        timestamp: new Date(),
        side: side,
      };
      return [...messages, newMessage];
    });
  };

  async function handleSecondRoll(prevRoll: number) {
    const roll2 = diceRoller.roll("1d6");
    const roll2Total = (roll2 as DiceRoll).total;
    const rollTotal = prevRoll + roll2Total;

    setMessages((messages: newMessageType[]) => {
      const newMessage: newMessageType = {
        text: "text",
        color: "#ff1744",
        author: "Oráculo",
        timestamp: new Date(),
        side: "RIGHT",
        content: (
          <Box>
            <Box display={"flex"} gap={1} alignItems="flex-start">
              <Box>
                <DiceIcon
                  value={prevRoll}
                  fontSize="medium"
                  color="disabled"
                ></DiceIcon>
                <DiceIcon
                  value={roll2Total}
                  fontSize="medium"
                  color="disabled"
                ></DiceIcon>
              </Box>

              <Typography variant="body2" color={"rgba(0, 0, 0, 0.6)"}>
                {oracle[rollTotal - 1].text}
              </Typography>
            </Box>
          </Box>
        ),
      };
      return [...messages.slice(0, messages.length - 1), newMessage];
    });
  }

  async function handleOracle() {
    const roll1 = diceRoller.roll("1d6");
    const roll1Total = (roll1 as DiceRoll).total;
    const rerollable = roll1Total <= 4 ? true : false;

    setMessages((messages: newMessageType[]) => {
      const timestamp = new Date();

      const newMessage: newMessageType = {
        text: oracle[roll1Total - 1].text,
        color: "#ff1744",
        author: "Oráculo",
        timestamp: timestamp,
        side: "RIGHT",
        rerollable: rerollable,
        content: (
          <Box>
            <Box display={"flex"} gap={1} alignItems="flex-start">
              <DiceIcon
                value={roll1Total}
                fontSize="medium"
                color="disabled"
              ></DiceIcon>
              <Typography variant="body2" color={"rgba(0, 0, 0, 0.6)"}>
                {oracle[roll1Total - 1].text}
              </Typography>
            </Box>

            {rerollable ? (
              <Box>
                <Button
                  fullWidth
                  variant="outlined"
                  onClick={(e) => handleSecondRoll(roll1Total)}
                >
                  Rolar Novamente
                </Button>
              </Box>
            ) : null}
          </Box>
        ),
      };
      return [...messages, newMessage];
    });
  }

  async function handleDice() {
    addMessage({
      text: "D6",
      author: "Dados",
      color: "#19857b",
      side: "RIGHT",
    });
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      message: { value: string };
    };
    if (target.message.value) {
      addMessage({
        text: target.message.value,
        author: author,
        color: "#6750A4",
      });
    }
  }

  const handleKeyDown = (event: React.KeyboardEvent) => {
    const target = event.target as typeof event.target & {
      value: string;
    };
    if (event.code === "Enter" && !event.shiftKey) {
      event.preventDefault();
      if (target.value) {
        addMessage({ text: target.value, author: author, color: "#6750A4" });
      }
    }
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <ScrollableDiv>
        <Box sx={{ flexGrow: 1 }}>
          {messages.map((message, index) => {
            return (
              <Message
                key={index}
                color={message.color}
                author={message.author}
                timestamp={message.timestamp}
                side={message.side}
              >
                {message.content ? (
                  message.content
                ) : (
                  <Typography variant="body2">{message.text}</Typography>
                )}
              </Message>
            );
          })}
          <div ref={bottomRef}></div>
        </Box>
      </ScrollableDiv>
      <Box py={1} display="flex" gap={1}>
        <Button variant="outlined" color="error" onClick={handleOracle}>
          Oráculo
        </Button>
        <Button variant="outlined" color="secondary" onClick={handleDice}>
          Dados
        </Button>
      </Box>
      <form onSubmit={handleSubmit}>
        <Box sx={{ display: "flex" }} gap={2}>
          <TextField
            ref={textFieldRef}
            multiline
            maxRows={5}
            fullWidth
            label="Mensagem..."
            id="message"
            style={{ borderRadius: "90px" }}
            name="message"
            onKeyDown={handleKeyDown}
          />
          <Box sx={{ aspectRatio: "1", alignSelf: "flex-end" }}>
            <Fab aria-label="send" size="large" color={"primary"} type="submit">
              <SendIcon />
            </Fab>
          </Box>
        </Box>
      </form>
    </Box>
  );
}
