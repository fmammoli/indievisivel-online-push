import { Box, Button, Fab, TextField, Typography } from "@mui/material";
import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import ScrollableDiv from "./ScrollableDiv";
import SendIcon from "@mui/icons-material/Send";
import { MemoedMessage } from "./Message";
import { DiceRoll } from "@dice-roller/rpg-dice-roller";

import useDiceRoller from "./useDiceRoller";

import { nanoid } from "nanoid";
import RollMessageContent from "./RollMessageContent";
import { MessageType } from "@/pages/[gameId]/[sessionId]";
import { GameType } from "@/gameData/games";
import { CharacterType } from "@/gameData/characters";
import MatrixMessageContent from "./MatrixMessageContent";

export interface addMessageType {
  id?: string;
  text: string;
  author: string;
  color: string;
  side?: "LEFT" | "RIGHT";
  rerollable?: boolean;
  content?: any;
  rollMessage?: boolean;
}

export interface ChatPropsType {
  author: CharacterType;
  messages: MessageType[];
  oracle: GameType["oracle"];
  basicRoll: GameType["basicRoll"];
  setMessages: Dispatch<SetStateAction<MessageType[]>>;
  addMessage: ({ text, author, color, side }: addMessageType) => void;
}

export default function Chat({
  author,
  messages,
  setMessages,
  oracle,
  basicRoll,
  addMessage,
}: ChatPropsType) {
  const bottomRef = useRef<HTMLDivElement>(null);
  const textFieldRef = useRef<HTMLDivElement>(null);

  const diceRoller = useDiceRoller();

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

            return { ...item, content: { props: newProps }, rerollable: false };
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
    const id = nanoid();
    const newMessage: MessageType = {
      id: id,
      text: options[roll1Total - 1].text,
      color: color,
      author: author,
      timestamp: new Date(),
      side: "RIGHT",
      rerollable: rerollable,
      rollMessage: true,
      content: {
        props: {
          id: id,
          rerollable: rerollable,
          value: roll1Total,
          text: options[roll1Total - 1].text,
          handleSecondRoll: handleSecondRoll,
          color: color,
          author: author,
          options: options,
        },
      },
    };
    addMessage({ ...newMessage });
  }
  async function handleOracle() {
    handleFirstRoll({
      options: oracle,
      author: "Oráculo",
      color: "oracle.main",
    });
  }

  async function handleDice() {
    handleFirstRoll({
      options: basicRoll,
      author: "Dados",
      color: "dices.main",
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
      if (textFieldRef.current) {
        textFieldRef.current.getElementsByTagName("textarea")[0].value = "";
      }
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
        if (textFieldRef.current) {
          textFieldRef.current.getElementsByTagName("textarea")[0].value = "";
        }
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
              <MemoedMessage
                id={message.id}
                key={message.id}
                color={message.color}
                author={message.author}
                timestamp={message.timestamp}
                side={message.side}
              >
                {message.content ? (
                  message.rollMessage ? (
                    <RollMessageContent
                      {...message.content.props}
                      handleSecondRoll={() =>
                        handleSecondRoll({ ...message.content?.props })
                      }
                    ></RollMessageContent>
                  ) : (
                    <MatrixMessageContent
                      {...message.content.props}
                    ></MatrixMessageContent>
                  )
                ) : (
                  <Typography variant="body2" whiteSpace={"pre-line"}>
                    {message.text}
                  </Typography>
                )}
              </MemoedMessage>
            );
          })}
          <div ref={bottomRef}></div>
        </Box>
      </ScrollableDiv>
      <Box py={1} display="flex" gap={1}>
        <Button variant="outlined" color="oracle" onClick={handleOracle}>
          Oráculo
        </Button>
        <Button variant="outlined" color="dices" onClick={handleDice}>
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
