import Head from "next/head";
import Image from "next/image";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@/src/Link";
import SwipeView from "@/components/SwipeView";
import styles from "@/styles/Home.module.scss";
import { Fade, Stack } from "@mui/material";
import CasinoOutlinedIcon from "@mui/icons-material/CasinoOutlined";
import { useEffect, useMemo, useRef, useState } from "react";

import TopMenu from "@/components/TopMenu";
import { nanoid } from "nanoid";

export type heroBannerItemType = {
  id: number;
  gameId: string;
  text: {
    title: string;
    description: string;
  };
  frontImg?: {
    src: any;
    alt: string;
  };
  backgroundImg: {
    src?: any;
    alt?: string;
    backgroundColor?: string;
  };
};
export type heroBannerType = heroBannerItemType[];
const heroBanner: heroBannerType = [
  {
    id: 0,
    gameId: "0",
    text: {
      title: "Push Online por IndieVisível",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce velit leo, eleifend eu suscipit at, ullamcorper in dui. Donec eget varius ipsum. Vestibulum neque nulla, tristique ac risus quis, posuere tincidunt odio.",
    },
    frontImg: {
      src: require("../public/images/logoIndie-300x300.png"),
      alt: "IndieVisível Logo",
    },
    backgroundImg: {
      backgroundColor: "#612F74",
    },
  },
  {
    id: 1,
    gameId: "1",
    text: {
      title: "Push: System Reference Document",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce velit leo, eleifend eu suscipit at, ullamcorper in dui. Donec eget varius ipsum. Vestibulum neque nulla, tristique ac risus quis, posuere tincidunt odio.",
    },
    frontImg: {
      src: require("../public/images/push2.png"),
      alt: "Push Logo",
    },
    backgroundImg: {
      src: require("../public/images/pushBackground.jpg"),
      alt: "Purple textured image",
    },
  },
  {
    id: 2,
    gameId: "2",
    text: {
      title: "Guardiões de Althea",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce velit leo, eleifend eu suscipit at, ullamcorper in dui. Donec eget varius ipsum. Vestibulum neque nulla, tristique ac risus quis, posuere tincidunt odio.",
    },

    backgroundImg: {
      src: require("../public/images/altheaBack.jpg"),
      alt: "Dragon and some other characters",
    },
  },
  {
    id: 3,
    gameId: "3",
    text: {
      title: "Season: A letter to the future",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce velit leo, eleifend eu suscipit at, ullamcorper in dui. Donec eget varius ipsum. Vestibulum neque nulla, tristique ac risus quis, posuere tincidunt odio.",
    },

    backgroundImg: {
      src: require("../public/images/season.jpeg"),
      alt: "Cover image for the Season game.",
    },
  },
];

export default function Home() {
  const data = heroBanner;
  const [heroData, setHeroData] = useState(data[0]);
  const [textColor, setTextColor] = useState({
    color: "white",
    hover: "#6750A4",
  });
  const imgRef = useRef(null);

  function changeHeroData(newHeroData: heroBannerItemType) {
    setHeroData(newHeroData);
  }
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

  let newSessionId = "";

  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (hydrated) {
    newSessionId = nanoid();
  }

  return (
    <>
      <Head>
        <title>IndiVisivel Push Online</title>
        <meta name="description" content="Play Push RPG System online" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className={styles.firstSection}>
          <div>
            <SwipeView data={data} handleSwipe={changeHeroData}></SwipeView>
          </div>

          <div className={styles.hero}>
            <Container>
              <TopMenu></TopMenu>
            </Container>
            <Container>
              <Box marginX={"2rem"} marginTop={"2rem"}>
                <div className={styles.heroContentContainer}>
                  <div className={styles.heroContentGrid}>
                    <div className={styles.heroImage}>
                      {heroData.frontImg && (
                        <div className={styles.imageWrapperHero}>
                          <Image
                            ref={imgRef}
                            src={heroData.frontImg.src}
                            alt={heroData.frontImg.alt}
                            className={styles.image}
                            fill
                          ></Image>
                        </div>
                      )}
                    </div>
                    <div className={styles.heroBox}>
                      <Stack
                        border={3}
                        borderColor={"white"}
                        sx={{ backdropFilter: "blur(3px)" }}
                        spacing={3}
                        p={2}
                        paddingTop={2}
                      >
                        <Fade in={!!heroData.text.title}>
                          <Typography
                            variant="h3"
                            component="h1"
                            color="white"
                            sx={{
                              fontSize: {
                                xs: "1.8rem",
                                sm: "2rem",
                                md: "3rem",
                              },
                            }}
                          >
                            {heroData.text.title}
                          </Typography>
                        </Fade>
                        <Typography
                          variant="subtitle1"
                          color="white"
                          sx={{
                            fontSize: { xs: "0.9em", sm: "1rem" },
                          }}
                        >
                          {heroData.text.description}
                        </Typography>
                        <Box maxWidth={50}>
                          <Button
                            variant="contained"
                            component={Link}
                            noLinkStyle
                            href={`/${heroData.gameId}/${newSessionId}`}
                            startIcon={<CasinoOutlinedIcon />}
                            sx={{ borderRadius: "24px" }}
                          >
                            Jogar
                          </Button>
                        </Box>
                      </Stack>
                    </div>
                  </div>
                </div>
              </Box>
            </Container>
          </div>
        </section>
        <section>
          <Container>
            <Typography variant="h3" component="h1" color="black">
              O que é o Push?
            </Typography>
          </Container>
        </section>
      </main>
    </>
  );
}
