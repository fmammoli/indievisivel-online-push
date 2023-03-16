import Head from "next/head";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import {
  Button,
  ButtonGroup,
  Drawer,
  Grid,
  useMediaQuery,
  useTheme,
} from "@mui/material";
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
import { SessionListType } from "../mySessions";
import { version } from "@/gameData/systemVersion";

export interface MessageType {
  id: string;
  text: string;
  color: string;
  author: string;
  side: "LEFT" | "RIGHT";
  timestamp: Date;
  content?: { props: any };
  rerollable?: boolean;
  rollMessage?: boolean;
}

export interface SessionType {
  id: string;
  name: string;
  createdAt: Date;
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
  notes: "",
};

// annonymousCharacter = characters[0];

export default function Play() {
  const { query, isReady } = useRouter();
  const { gameId, sessionId } = query;

  const menuColors = { color: "#6750A4", hover: "#6750A4" };

  const game = games.find((game, index) => {
    return game.id === gameId;
  });
  const theme = useTheme();
  const smallSreen = useMediaQuery(theme.breakpoints.down("md"));

  const [session, setSession] = useLocalStorageState<SessionType>(
    `indivisivel-online-push-${sessionId}`,
    {
      defaultValue: {
        id: sessionId && !Array.isArray(sessionId) ? sessionId : "",
        name: "My new session",
        lastSaved: new Date(),
        createdAt: new Date(),
        game: game || null,
        messages: [],
        characters: [{ ...annonymousCharacter, gameId: gameId as string }],
      },
    }
  );

  const [sessions, setSessions] = useLocalStorageState<SessionListType>(
    `indivisivel-online-push-session-list-${version}`,
    {
      defaultValue: {
        sessions: [
          {
            gameId: session.game ? session.game.id : "",
            gameName: session.game ? session.game?.title : "",
            sessionId: session.id,
            sessionName: session.name,
            sessionKey: `indivisivel-online-push-${sessionId}`,
            lastSaved: session.lastSaved,
            charactersCount: session.characters.length,
            messagesCount: session.messages.length,
            createdAt: session.createdAt,
          },
        ],
      },
    }
  );

  const [currentCharacter, setCurrentCharacter] =
    useState<CharacterType>(annonymousCharacter);

  const messages = session.messages;

  const setMessages = useCallback(
    (value: MessageType[] | ((value: MessageType[] | []) => MessageType[])) => {
      updateSession((prevSession) => {
        if (prevSession) {
          if (typeof value === "function") {
            const newMessages = value(prevSession?.messages);
            const newSession = {
              ...prevSession,
              messages: newMessages,
              lastSaved: new Date(),
            };

            return newSession;
          }
          if (Array.isArray(value)) {
            return { ...prevSession, messages: value, lastSaved: new Date() };
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

  const setCharacters = (
    value: CharacterType[] | ((value: CharacterType[] | []) => CharacterType[])
  ) => {
    const newDate = new Date();

    updateSession((prevSession) => {
      if (typeof value === "function") {
        const newCharacters = value(prevSession?.characters);

        return {
          ...prevSession,
          characters: newCharacters,
          lastSaved: newDate,
        };
      }
      if (Array.isArray(value)) {
        return { ...prevSession, characters: value, lastSaved: newDate };
      }
      return prevSession;
    });
  };

  const addMessage = ({
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

  const updateSession = (
    value: SessionType | ((value: SessionType) => SessionType)
  ) => {
    if (typeof value === "function") {
      setSession((prev) => {
        const newSession = value(prev);

        return newSession;
      });
    } else {
      return setSession(value);
    }
  };

  useEffect(() => {
    if (session.id !== "")
      setSessions((prev) => {
        const toUpdateIndex = prev.sessions.findIndex(
          (item, index) => item.sessionId === session.id
        );
        if (toUpdateIndex === -1) {
          return {
            sessions: [
              ...prev.sessions,
              {
                sessionId: session.id,
                sessionKey: `indivisivel-online-push-${session.id}`,
                sessionName: session.name,
                gameName: session.game ? session.game.title : "",
                gameId: session.game ? session.game.id : "",
                lastSaved: session.lastSaved,
                messagesCount: session.messages.length,
                charactersCount: session.characters.length,
                createdAt: session.createdAt,
              },
            ],
          };
        } else {
          const prevElement = prev.sessions[toUpdateIndex];

          return {
            sessions: [
              ...prev.sessions.slice(0, toUpdateIndex),
              {
                ...prevElement,
                sessionName: session.name,
                lastSaved: session.lastSaved,
                gameName: session.game ? session.game.title : "",
                gameId: session.game ? session.game.id : "",
                messagesCount: session.messages.length,
                charactersCount: session.characters.length,
              },
              ...prev.sessions.slice(toUpdateIndex + 1, prev.sessions.length),
            ],
          };
        }
      });
  }, [session, setSessions]);

  const [characterDrawerStatus, setCharacterDrawerStatus] = useState(false);
  const [gameDrawerStatus, setGameDrawerStatus] = useState(false);

  function toggleCharacterSheetDrawer() {
    setCharacterDrawerStatus((prev) => !prev);
  }

  function toggleGameDrawer() {
    setGameDrawerStatus((prev) => !prev);
  }

  const [linkColor, setLinkColor] = useState({
    backgroundColor: "secondary.main",
    textColor: "white",
  });

  // const findColor = (backgroundColor: string) =>
  //   useMemo(() => {
  //     if (backgroundColor) {
  //       let color = new Color(backgroundColor);
  //       const contrastWhite = color.contrast("white", "APCA");
  //       const contrastBlack = color.contrast("black", "APCA");
  //       console.log(`white:${contrastWhite}__black${contrastBlack}`);
  //       setLinkColor({
  //         backgroundColor: backgroundColor,
  //         textColor:
  //           Math.abs(contrastBlack) > Math.abs(contrastWhite)
  //             ? "black"
  //             : "white",
  //       });
  //       return backgroundColor;
  //     }
  //   }, [game]);
  // findColor(game?.backgroundColor || "");

  return (
    <>
      <Head>
        <title>IndieVisível Push Online</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest"></link>
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
            <GameBanner
              gameColor={game?.backgroundColor}
              banner={game?.bannerImg && game.bannerImg}
              title={game?.title ? game.title : ""}
              backgroundColor={game?.backgroundColor}
              sessionName={session.name}
              lastSaved={session.lastSaved.toString()}
              setSession={updateSession}
            >
              <TopMenu
                linkColor={linkColor.textColor}
                colors={"secondary"}
                small={true}
              ></TopMenu>
            </GameBanner>
          </section>

          {smallSreen ? (
            <>
              <Box display={"flex"} justifyContent="center" gap={2}>
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
                  display: "block",
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
            </>
          ) : (
            <Grid container flexGrow={1}>
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
          )}
        </Box>
      </main>
    </>
  );
}
