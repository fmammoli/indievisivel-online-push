import Head from "next/head";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { Button, ButtonGroup, Drawer, Grid, Paper } from "@mui/material";
import { useCallback, useEffect, useState } from "react";

import TopMenu from "@/components/TopMenu";
import GameBanner from "@/components/GameBanner";
import Chat, { addMessageType } from "@/components/Chat";
import GameSheetSidePanel from "@/components/GameSheetSidePanel";
import CharacterSheetSidePanel from "@/components/CharacterSheetSidePanel";
import { CharacterType } from "@/gameData/characters";
import RollMessageContent from "@/components/RollMessageContent";
import DatasetIcon from "@mui/icons-material/Dataset";
import ClickAwayListener from "@mui/base/ClickAwayListener";
import PersonIcon from "@mui/icons-material/Person";
import { GameType, games } from "@/gameData/games";
import { nanoid } from "nanoid";
import { useRouter } from "next/router";

import useLocalStorageState from "use-local-storage-state";

export interface MessageType {
  id: string;
  text: string;
  color: string;
  author: string;
  side: "LEFT" | "RIGHT";
  timestamp: Date;
  content?: JSX.Element;
  rerollable?: boolean;
  rollMessage?: boolean;
}

interface SessionType {
  id: string;
  name: string;
  lastSaved: Date;
  game: GameType | null;
  messages: MessageType[] | [];
  characters: CharacterType[] | [];
}

let annonymousCharacter: CharacterType = {
  id: "-1",
  name: "Annonymous",
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
};

// annonymousCharacter = characters[0];

interface PlayPropsType {
  gameId: string;
  sessionId: string;
  gameName: string;
  bannerImg: any;
}

export default function Play({
  gameName = "Guardiões de Althea",
  bannerImg = require("../../public/images/altheaBack.jpg"),
}: PlayPropsType) {
  const router = useRouter();
  const { gameId, sessionId } = router.query;

  const menuColors = { color: "#6750A4", hover: "#6750A4" };

  const game = games.find((game, index) => {
    return game.id === gameId;
  });

  const [session, setSession] = useLocalStorageState<SessionType>(
    "online-push",
    {
      defaultValue: {
        id: nanoid(),
        name: "my new session",
        lastSaved: new Date(),
        game: null,
        messages: [],
        characters: [{ ...annonymousCharacter, gameId: gameId as string }],
      },
    }
  );

  // const [session, setSession] = useState<SessionType>({
  //   id: nanoid(),
  //   name: "my new session",
  //   lastSaved: new Date(),
  //   game: null,
  //   messages: [],
  //   characters: [{ ...annonymousCharacter, gameId: gameId as string }],
  // });

  const [currentCharacter, setCurrentCharacter] =
    useState<CharacterType>(annonymousCharacter);

  const messages = session.messages;

  const setMessages = useCallback(
    (value: MessageType[] | ((value: MessageType[] | []) => MessageType[])) => {
      setSession((prevSession) => {
        if (prevSession) {
          if (typeof value === "function") {
            const newMessages = value(prevSession?.messages);
            return { ...prevSession, messages: newMessages };
          }
          if (Array.isArray(value)) {
            return { ...prevSession, messages: value };
          }
        }
        return prevSession;
      });
    },
    [setSession]
  );

  const characters = session?.characters || [
    {
      ...annonymousCharacter,
      gameId: gameId as string,
    },
  ];

  const setCharacters = useCallback(
    (
      value:
        | CharacterType[]
        | ((value: CharacterType[] | []) => CharacterType[])
    ) => {
      setSession((prevSession) => {
        if (prevSession) {
          if (typeof value === "function") {
            const newCharacters = value(prevSession?.characters);
            return { ...prevSession, characters: newCharacters };
          }
          if (Array.isArray(value)) {
            return { ...prevSession, characters: value };
          }
        }
        return prevSession;
      });
    },
    [setSession]
  );

  const addMessageOriginal = ({
    id,
    text,
    author,
    color,
    side = "LEFT",
    content,
    rollMessage = false,
    rerollable = false,
  }: addMessageType) => {
    const newMessage: MessageType = {
      id: id ? id : nanoid(),
      text: text,
      color: color,
      author: author,
      timestamp: new Date(),
      side: side,
      rerollable: rerollable,
      content: content,
      rollMessage: rollMessage,
    };

    setMessages((messages: MessageType[]) => {
      if (messages) {
        if (messages.length === 0) {
          return [...messages, newMessage];
        }
        if (messages.length > 0) {
          const lastItem = messages.slice(-1)[0];
          if (lastItem.rerollable === true && lastItem.content) {
            const newContentProps = {
              ...lastItem.content.props,
              rerollable: false,
            };
            return [
              ...messages.slice(0, -1),
              {
                ...lastItem,
                rerollable: false,
                content: (
                  <RollMessageContent {...newContentProps}></RollMessageContent>
                ),
              },
              newMessage,
            ];
          } else {
            return [...messages, newMessage];
          }
        }
      }
      return messages;
    });
  };

  const addMessage = useCallback(addMessageOriginal, [setMessages]);

  const [characterDrawerStatus, setCharacterDrawerStatus] = useState(false);
  const [gameDrawerStatus, setGameDrawerStatus] = useState(false);

  function toggleCharacterSheetDrawer() {
    setCharacterDrawerStatus((prev) => !prev);
  }

  function toggleGameDrawer() {
    setGameDrawerStatus((prev) => !prev);
  }

  useEffect(() => {
    if (gameId && sessionId) {
      const game = games.find((game, index) => {
        return game.id === gameId;
      });

      if (game) {
        setSession((prevSession) => {
          if (prevSession) {
            return { ...prevSession, game: game };
          }
          return prevSession;
        });
      }
    }
  }, [gameId, sessionId, setSession]);

  // if (!session) setSession(initialSesstionState(gameId, sessionId));
  // console.log(session);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Box
          sx={{
            height: "100svh",
            maxHeight: "100svh",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <section>
            <TopMenu colors={menuColors} small={true}></TopMenu>

            <GameBanner banner={bannerImg} title={gameName}></GameBanner>
          </section>

          <Box
            sx={{ display: { xs: "flex", sm: "flex", md: "none" } }}
            justifyContent="center"
            gap={2}
          >
            <ButtonGroup variant="contained" fullWidth>
              <Button
                onClick={toggleCharacterSheetDrawer}
                startIcon={<PersonIcon></PersonIcon>}
                sx={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
              >
                Characters
              </Button>
              <Button
                onClick={toggleGameDrawer}
                endIcon={<DatasetIcon></DatasetIcon>}
                sx={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
              >
                Game
              </Button>
            </ButtonGroup>
          </Box>
          <Container
            id={"contianer"}
            sx={{
              height: "100%",
              display: { xs: "block", sm: "block", md: "none" },
              paddingBottom: 1,
            }}
          >
            <Drawer
              anchor="left"
              variant="temporary"
              open={characterDrawerStatus}
              id={"characterDrawer"}
            >
              <ClickAwayListener
                onClickAway={(e) => {
                  if (characterDrawerStatus === true)
                    setCharacterDrawerStatus(false);
                }}
              >
                <Box width={300} height={"100%"}>
                  {session && session.game && (
                    <CharacterSheetSidePanel
                      game={session.game}
                      characters={characters}
                      currentCharracter={currentCharacter}
                      setCurrentCharacter={setCurrentCharacter}
                      handleHideButton={toggleCharacterSheetDrawer}
                      setCharacters={setCharacters}
                    ></CharacterSheetSidePanel>
                  )}
                </Box>
              </ClickAwayListener>
            </Drawer>
            <Drawer
              anchor="right"
              variant="temporary"
              open={gameDrawerStatus}
              id={"gameDrawer"}
            >
              <ClickAwayListener
                onClickAway={(e) => {
                  if (gameDrawerStatus === true) setGameDrawerStatus(false);
                }}
              >
                <Box width={300} height={"100%"}>
                  {session && session.game && (
                    <GameSheetSidePanel
                      game={session.game}
                      setMessages={setMessages}
                      handleHideButton={toggleGameDrawer}
                    ></GameSheetSidePanel>
                  )}
                </Box>
              </ClickAwayListener>
            </Drawer>
            <Box height={"100%"}>
              {session && session.game && (
                <Chat
                  oracle={session.game.oracle}
                  basicRoll={session.game.basicRoll}
                  author={currentCharacter}
                  messages={messages}
                  setMessages={setMessages}
                  addMessage={addMessage}
                ></Chat>
              )}
            </Box>
          </Container>

          <Grid
            container
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
          >
            <Grid xs={3} item={true}>
              {session && session.game && (
                <CharacterSheetSidePanel
                  game={session.game}
                  characters={characters}
                  currentCharracter={currentCharacter}
                  setCurrentCharacter={setCurrentCharacter}
                  setCharacters={setCharacters}
                ></CharacterSheetSidePanel>
              )}
            </Grid>
            <Grid
              xs={6}
              sx={{ borderInline: "1px solid #d8d8d8" }}
              padding={2}
              item={true}
            >
              {session && session.game && (
                <Chat
                  author={currentCharacter}
                  messages={messages}
                  setMessages={setMessages}
                  oracle={session.game.oracle}
                  basicRoll={session.game.basicRoll}
                  addMessage={addMessage}
                ></Chat>
              )}
            </Grid>
            <Grid xs={3} item={true}>
              {session && session.game && (
                <GameSheetSidePanel
                  game={session.game}
                  setMessages={setMessages}
                ></GameSheetSidePanel>
              )}
            </Grid>
          </Grid>

          <Box>
            <Paper elevation={5} square sx={{ backgroundColor: "#6750A4" }}>
              <Typography variant="body2" component="h2" color={"white"} p={1}>
                Footer
              </Typography>
            </Paper>
          </Box>
        </Box>
      </main>
    </>
  );
}
