import { Box, Button, Fab, TextField, Typography } from "@mui/material";
import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import ScrollableDiv from "./ScrollableDiv";
import SendIcon from "@mui/icons-material/Send";
import Message from "./Message";
import { DiceRoll } from "@dice-roller/rpg-dice-roller";

import useDiceRoller from "./useDiceRoller";

import { nanoid } from "nanoid";
import RollMessageContent from "./RollMessageContent";
import { MessageType } from "@/pages/[gameId]/[sessionId]";
import { GameType } from "@/gameData/games";
import { CharacterType } from "@/gameData/characters";

export interface addMessageType {
  text: string;
  author: string;
  color: string;
  side?: "LEFT" | "RIGHT";
}

export interface ChatPropsType {
  author: CharacterType;
  messages: MessageType[];
  oracle: GameType["oracle"];
  basicRoll: GameType["basicRoll"];
  setMessages: Dispatch<SetStateAction<MessageType[]>>;
}

export default function Chat({
  author,
  messages,
  setMessages,
  oracle,
  basicRoll,
}: ChatPropsType) {
  const bottomRef = useRef<HTMLDivElement>(null);
  const textFieldRef = useRef<HTMLDivElement>(null);

  const diceRoller = useDiceRoller();

  const addMessage = ({
    text,
    author,
    color,
    side = "LEFT",
  }: addMessageType) => {
    if (textFieldRef.current) {
      textFieldRef.current.getElementsByTagName("textarea")[0].value = "";
    }

    setMessages((messages: MessageType[]) => {
      const newMessage: MessageType = {
        id: nanoid(),
        text: text,
        color: color,
        author: author,
        timestamp: new Date(),
        side: side,
        rerollable: false,
      };
      return [...messages, newMessage];
    });
  };

  async function handleSecondRoll({
    prevRoll,
    options,
    author,
    color,
    id,
  }: {
    id: string;
    prevRoll: number;
    options: { value: number; text: string }[];
    author: string;
    color: string;
  }) {
    const roll2 = diceRoller.roll("1d6");
    const roll2Total = (roll2 as DiceRoll).total;
    const rollTotal = prevRoll + roll2Total;

    setMessages((messages: MessageType[]) => {
      const newMessages = messages.map((item, index) => {
        if (item.id === id) {
          if (item.content) {
            const newProps = {
              ...item.content.props,
              rerollable: false,
              value2: roll2Total,
            };
            const newContent = (
              <RollMessageContent {...newProps}></RollMessageContent>
            );
            return { ...item, content: newContent, rerollable: false };
          }
        }
        return item;
      });
      return newMessages;
    });
  }

  function handleFirstRoll({
    options,
    author,
    color,
  }: {
    options: { value: number; text: string }[];
    author: string;
    color: string;
  }) {
    const roll1 = diceRoller.roll("1d6");
    const roll1Total = (roll1 as DiceRoll).total;
    const rerollable = roll1Total <= 4 ? true : false;

    setMessages((messages: MessageType[]) => {
      const timestamp = new Date();
      const id = nanoid();
      const newMessage: MessageType = {
        id: id,
        text: options[roll1Total - 1].text,
        color: color,
        author: author,
        timestamp: timestamp,
        side: "RIGHT",
        rerollable: rerollable,
        content: (
          <RollMessageContent
            id={id}
            rerollable={rerollable}
            value={roll1Total}
            text={options[roll1Total - 1].text}
            handleSecondRoll={handleSecondRoll}
            color={color}
            author={author}
            options={options}
          ></RollMessageContent>
        ),
      };
      return [...messages, newMessage];
    });
  }

  async function handleOracle() {
    handleFirstRoll({ options: oracle, author: "Oráculo", color: "#ff1744" });
  }

  async function handleDice() {
    handleFirstRoll({
      options: basicRoll,
      author: "Dados",
      color: "#19857b",
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
        author: author.name,
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
        addMessage({
          text: target.value,
          author: author.name,
          color: "#6750A4",
        });
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
                id={message.id}
                key={message.id}
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
