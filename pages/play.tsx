import Head from "next/head";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { Button, ButtonGroup, Drawer, Grid, Paper } from "@mui/material";
import { useEffect, useRef, useState } from "react";

import TopMenu from "@/components/TopMenu";
import GameBanner from "@/components/GameBanner";
import Chat, { newMessageType } from "@/components/Chat";
import GameSheetSidePanel from "@/components/GameSheetSidePanel";
import CharacterSheetSidePanel from "@/components/CharacterSheetSidePanel";
import characters from "@/gameData/characters";
import RollMessageContent from "@/components/RollMessageContent";
import DatasetIcon from "@mui/icons-material/Dataset";
import ClickAwayListener from "@mui/base/ClickAwayListener";
import PersonIcon from "@mui/icons-material/Person";

export default function Play({
  gameName = "Guardiões de Althea",
  bannerImg = require("../public/images/altheaBack.jpg"),
}) {
  const menuColors = { color: "#6750A4", hover: "#6750A4" };

  const [messages, setMessages] = useState<newMessageType[]>([]);
  const [currentCharacter, setCurrentCharacter] = useState<{
    id: number;
    name: string;
  }>(characters[0]);

  const imgRef = useRef(null);

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

  // useEffect(() => {
  //   console.log(currentCharacter);
  //   if (currentCharacter && currentCharacter) {
  //     setMessages((messages: any[]) => {
  //       const newMessage = {
  //         text: currentCharacter.name,
  //         color: "error",
  //         author: currentCharacter.name,
  //         timestamp: new Date(),
  //         side: "LEFT",
  //       };
  //       return [...messages, newMessage];
  //     });
  //   }
  // }, [currentCharacter]);

  // const fac = new FastAverageColor();
  // //TODO - Change text color based on background image average color
  // useEffect(() => {
  //   fac
  //     .getColorAsync(imgRef.current)
  //     .then((color) => {
  //       console.log(color);
  //       // container.style.backgroundColor = color.rgba;
  //       // container.style.color = color.isDark ? "#fff" : "#000";
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });

  //   return () => {};
  // }, [fac, imgRef]);

  const [characterDrawerStatus, setCharacterDrawerStatus] = useState(false);
  const [gameDrawerStatus, setGameDrawerStatus] = useState(false);
  function toggleCharacterSheetDrawer() {
    setCharacterDrawerStatus((prev) => !prev);
  }

  function toggleGameDrawer() {
    setGameDrawerStatus((prev) => !prev);
  }
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
                  <CharacterSheetSidePanel
                    currentCharracter={currentCharacter}
                    setCurrentCharacter={setCurrentCharacter}
                    handleHideButton={toggleCharacterSheetDrawer}
                  ></CharacterSheetSidePanel>
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
                  <GameSheetSidePanel
                    setMessages={setMessages}
                    handleHideButton={toggleGameDrawer}
                  ></GameSheetSidePanel>
                </Box>
              </ClickAwayListener>
            </Drawer>
            <Box height={"100%"}>
              <Chat
                author={currentCharacter.name}
                messages={messages}
                setMessages={setMessages}
              ></Chat>
            </Box>
          </Container>

          <Grid
            container
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
          >
            <Grid xs={3} item={true}>
              <CharacterSheetSidePanel
                currentCharracter={currentCharacter}
                setCurrentCharacter={setCurrentCharacter}
              ></CharacterSheetSidePanel>
            </Grid>
            <Grid
              xs={6}
              sx={{ borderInline: "1px solid #d8d8d8" }}
              padding={2}
              item={true}
            >
              <Chat
                author={currentCharacter.name}
                messages={messages}
                setMessages={setMessages}
              ></Chat>
            </Grid>
            <Grid xs={3} item={true}>
              <GameSheetSidePanel
                setMessages={setMessages}
              ></GameSheetSidePanel>
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
