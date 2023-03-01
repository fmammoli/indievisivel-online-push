import Head from "next/head";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { Button, ButtonGroup, Drawer, Grid, Paper } from "@mui/material";
import { useEffect, useState } from "react";

import TopMenu from "@/components/TopMenu";
import GameBanner from "@/components/GameBanner";
import Chat from "@/components/Chat";
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
import characters from "../../gameData/characters";
import { Session } from "inspector";

export interface MessageType {
  id: string;
  text: string;
  color: string;
  author: string;
  side: "LEFT" | "RIGHT";
  timestamp: Date;
  content?: JSX.Element;
  rerollable?: boolean;
}

interface SessionType {
  id: string;
  name: string;
  lastSaved: Date;
  game: GameType;
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

  function initialSesstionState(
    gameId: string | string[] | undefined,
    sessionId: string | string[] | undefined
  ): SessionType {
    if (typeof gameId === "string" && gameId !== "") {
      if (sessionId === "new") {
        return newSession(gameId);
      } else {
        return newSession(gameId);
      }
    } else {
      return {
        id: "0",
        name: "session 1",
        lastSaved: new Date(),
        game: games[0],
        messages: [],
        characters: [],
      };
      // throw new Error("Malformed gameId");
    }
  }

  function newSession(gameId: string): SessionType {
    const game = games.find((game: GameType, index) => game.id === gameId);
    if (!game) throw new Error(`Error, no game found with id:${gameId}`);
    console.log("Creating new Session");
    return {
      id: nanoid(),
      name: "my new session",
      lastSaved: new Date(),
      game: game,
      messages: [],
      characters: [{ ...annonymousCharacter, gameId: gameId }],
    };
  }

  // const [session, setSession] = useState(initialSession);

  // const [messages, setMessages] = useState<MessageType[]>(session.messages);
  // const [characters, setCharacters] = useState<CharacterType[]>(
  //   session.characters
  // );

  // const [currentCharacter, setCurrentCharacter] = useState<CharacterType>(
  //   session.characters[0]
  // );

  const [session, setSession] = useState<SessionType | null>(null);

  const [messages, setMessages] = useState<MessageType[]>([]);
  const [characters, setCharacters] = useState<CharacterType[]>([
    annonymousCharacter,
  ]);

  const [currentCharacter, setCurrentCharacter] =
    useState<CharacterType>(annonymousCharacter);

  useEffect(() => {
    // console.log("characters changed");
    // console.log(characters);
    if (characters) {
      setSession((prev) => {
        // console.log(characters);
        if (prev !== null) return { ...prev, characters: [...characters] };
        return prev;
      });
    }
  }, [characters, setSession]);

  useEffect(() => {
    console.log("messages changed");
    if (messages) {
      setSession((prev) => {
        if (prev !== null) return { ...prev, messages: [...messages] };
        return prev;
      });
    }
  }, [messages, setSession]);

  //Remove the Roll Again Button from the second to last message
  useEffect(() => {
    if (messages.length > 1) {
      if (messages.at(-2)?.rerollable === true) {
        const newMessages = messages.map((item, index) => {
          if (index === messages.length - 2) {
            if (item.rerollable === true) {
              const newProps = { ...item.content?.props, rerollable: false };
              const newContent = (
                <RollMessageContent {...newProps}></RollMessageContent>
              );
              return { ...item, content: newContent, rerollable: false };
            }
          }
          return item;
        });

        setMessages(newMessages);
      }
    }
  }, [messages]);

  const [characterDrawerStatus, setCharacterDrawerStatus] = useState(false);
  const [gameDrawerStatus, setGameDrawerStatus] = useState(false);
  function toggleCharacterSheetDrawer() {
    setCharacterDrawerStatus((prev) => !prev);
  }

  function toggleGameDrawer() {
    setGameDrawerStatus((prev) => !prev);
  }

  // useEffect(() => {
  //   const newSession = initialSesstionState(gameId, sessionId);
  //   setSession(newSession);
  //   setCharacters(newSession.characters);
  //   setCurrentCharacter(newSession.characters[0]);
  //   setMessages(newSession.messages);
  // }, [gameId, sessionId]);

  if (!session) setSession(initialSesstionState(gameId, sessionId));
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
                  {session && (
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
                  {session && (
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
              {session && (
                <Chat
                  oracle={session.game.oracle}
                  basicRoll={session.game.basicRoll}
                  author={currentCharacter}
                  messages={messages}
                  setMessages={setMessages}
                ></Chat>
              )}
            </Box>
          </Container>

          <Grid
            container
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
          >
            <Grid xs={3} item={true}>
              {session && (
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
              {session && (
                <Chat
                  author={currentCharacter}
                  messages={messages}
                  setMessages={setMessages}
                  oracle={session.game.oracle}
                  basicRoll={session.game.basicRoll}
                ></Chat>
              )}
            </Grid>
            <Grid xs={3} item={true}>
              {session && (
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
