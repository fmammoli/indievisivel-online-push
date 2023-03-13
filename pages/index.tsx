import Head from "next/head";
import Image from "next/image";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@/src/Link";
import SwipeView from "@/components/SwipeView";
import styles from "@/styles/Home.module.scss";
import {
  Grow,
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Paper,
  Slide,
  Stack,
} from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import CasinoOutlinedIcon from "@mui/icons-material/CasinoOutlined";
import { RefObject, useEffect, useRef, useState } from "react";

import TopMenu from "@/components/TopMenu";
import { nanoid } from "nanoid";
import { FastAverageColor } from "fast-average-color";
import Color from "colorjs.io";
import games from "@/gameData/games";
import Footer from "@/components/Footer";

export type heroBannerItemType = {
  id: number;
  gameId?: string;
  isGame: boolean;
  buttonText?: string;
  href?: string;
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
    isGame: false,
    buttonText: "Saber Mais",
    href: "#about",
    text: {
      title: "Push Online por IndieVisível",
      description:
        "A IndieVisível Press apresenta o Push Online, uma nova forma de jogar seus jogos Push Powered de uma nova!",
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
    isGame: false,
    buttonText: "Jogos",
    href: "#games",
    text: {
      title: "Push System",
      description:
        "Push é um sistema de RPG leve e focado em histórias, projetado para aventuras cooperativas e cheias de ação. Este é um sistema que você pode usar para criar seus próprios jogos sobre personagens extraordinários embarcando em missões perigosas por mundos fantásticos, independente do gênero do jogo, seja ação, romance, terror, futurista ou fantasia medieval!",
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
    gameId: "0",
    isGame: true,
    buttonText: "Jogar",
    text: {
      title: "A Cidade-Poço",
      description:
        "Escavada no solo da Terra 2014, essa cidade vertical que ocupa toda a superfície do planeta é organizada em incontáveis níveis. O status social é que define em qual deles você mora: os aristos ficam nos mais altos possíveis enquanto que os inferiores abrigam os de reputação duvidosa. E é aqui onde você mora, em um futuro que obviamente não deu certo. Para você.",
    },
    backgroundImg: {
      src: require("../public/images/a_cidade_poco_cover.jpg"),
      alt: "Person falling from sci fi building",
    },
  },
  {
    id: 3,
    gameId: "1",
    isGame: true,
    buttonText: "Jogos",
    href: "#jogos",
    text: {
      title: "KStar Squad",
      description:
        "Em K Star Squad você é um membro de um grupo de super sentai formado por uma banda de K-Pop! Você tem que conciliar as turnês mundiais com sua missão de proteger a Terra de uma invasão que está em andamento, já  que os governos não tem como fazer nada para impedir. Você e seus amigos são a única coisa que impede a conquista da Terra pelo vilanesco Império Unovhian.",
    },

    backgroundImg: {
      src: require("../public/images/kstar_cover_1.png"),
      alt: "Cover image for the Season game.",
    },
  },
  {
    id: 4,
    gameId: "0",
    isGame: false,
    buttonText: "Jogos",
    href: "#jogos",
    text: {
      title: "Guardiões de Althea",
      description:
        "Você vai jogar como um dos aventureiros que está tentando salvar os seres mágicos de Althea das energias sombrias. O seu objetivo e de seus amigos é restaurar a harmonia de Althea, livrando as criaturas fantásticas das forças sombrias que assolam o reino. Você deve encontrar magias antigas e proteções para quebrar a maldição que afeta os grandes guardiões do mundo.",
    },

    backgroundImg: {
      src: require("../public/images/guardioes_de_althea_cover.jpg"),
      alt: "Some characters with a dragon.",
    },
  },
  {
    id: 5,
    gameId: "0",
    isGame: false,
    buttonText: "Jogar",
    href: "#jogos",
    text: {
      title: "Maré de Ferro",
      description:
        "Você faz parte de um grupo de humanos e andróides que deixou seu passado de lado para salvar toda a humanidade. Hoje, você e seu grupo lutam por toda a Via Láctea com tudo que temos à nossa disposição: poderosos Kaisers criados por andróides, que foi o responsável pela salvação da população em fuga de Marte; E mesmo essas armas não se comparam ao que parou o avanço dos inimigos na Lua: nossa música!",
    },

    backgroundImg: {
      src: require("../public/images/mare_de_ferro_cover_2.jpg"),
      alt: "Some robots figthing",
    },
  },
];

export default function Home() {
  const data = heroBanner;
  const [heroData, setHeroData] = useState(data[0]);

  const imgRef = useRef<HTMLImageElement>(null);
  const fac = new FastAverageColor();

  const [linkColor, setLinkColor] = useState({
    backgroundColor: "secondary.main",
    textColor: "#fff",
  });

  function changeHeroData(
    newHeroData: heroBannerItemType,
    backgroundImgRef?: RefObject<HTMLImageElement> | null
  ) {
    if (newHeroData.backgroundImg.src?.default) {
      fac
        .getColorAsync(newHeroData.backgroundImg.src.default.src)
        .then((color) => {
          setLinkColor({
            backgroundColor: color.hex,
            textColor: color.isDark ? "#fff" : "#000",
          });
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      if (newHeroData.backgroundImg.backgroundColor) {
        if (newHeroData.id === 0) {
          setLinkColor({
            backgroundColor: "secondary.main",
            textColor: "white",
          });
        } else {
          let color = new Color(newHeroData.backgroundImg.backgroundColor);
          const contrastWhite = color.contrast("white", "APCA");
          const contrastBlack = color.contrast("black", "APCA");
          console.log(`white:${contrastWhite}__black${contrastBlack}`);
          setLinkColor({
            backgroundColor: newHeroData.backgroundImg.backgroundColor,
            textColor:
              Math.abs(contrastBlack) > Math.abs(contrastWhite)
                ? "#000"
                : "#fff",
          });
        }
      }
    }

    setHeroData(newHeroData);
  }
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
        <title>IndieVisivel Push Online</title>
        <meta name="description" content="Play Push RPG System online" />
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
      <main className={styles.smoothScroll}>
        <section className={styles.firstSection}>
          <div>
            <SwipeView data={data} handleSwipe={changeHeroData}></SwipeView>
          </div>

          <div className={styles.hero}>
            <Container>
              <TopMenu
                linkColor={linkColor.textColor}
                colors="secondary"
                home
              ></TopMenu>
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
                        sx={{
                          backdropFilter: "blur(3px)",
                          transition: "background-color 0.8s ease-out",
                        }}
                        spacing={3}
                        p={2}
                        paddingTop={2}
                        bgcolor={
                          linkColor.textColor === "#fff"
                            ? "#0000005c"
                            : "#ffffff96"
                        }
                      >
                        <Typography
                          variant="h3"
                          component="h3"
                          color={linkColor.textColor}
                          sx={{
                            transition: "color 0.6s ease-out",
                            fontSize: {
                              xs: "1.8rem",
                              sm: "2rem",
                              md: "3rem",
                            },
                          }}
                        >
                          {heroData.text.title}
                        </Typography>

                        <Typography
                          variant="body1"
                          color={linkColor.textColor}
                          sx={{ transition: "color 0.6s ease-out" }}
                        >
                          {heroData.text.description}
                        </Typography>
                        <Box>
                          <Button
                            variant="contained"
                            component={Link}
                            noLinkStyle
                            href={
                              heroData.isGame === false
                                ? heroData.href
                                : `/${heroData.gameId}/${newSessionId}`
                            }
                            startIcon={<CasinoOutlinedIcon />}
                            color={"secondary"}
                            sx={{
                              backgroundColor: linkColor.backgroundColor,
                              color:
                                heroData.id === 0
                                  ? "black"
                                  : linkColor.textColor,
                              transition: "background-color 0.8s ease",
                              ":hover": {
                                // backgroundColor: "secondary.main",
                                color: "white",
                              },
                            }}
                          >
                            {heroData.buttonText
                              ? heroData.buttonText
                              : "Jogar"}
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
        <section id="about">
          <Container maxWidth={"md"} sx={{ paddingY: 4 }}>
            <Box>
              <Typography variant="h1" component="h1" color={"primary"}>
                Indie Visível Press
              </Typography>
              <Typography
                variant="h3"
                component="h2"
                color={"primary"}
                fontWeight={300}
              >
                Tornando o Indie Visível
              </Typography>
            </Box>
            <Box display={"flex"} justifyContent={"center"} paddingY={3}>
              <Image
                src={data[0].frontImg?.src}
                alt="Logo da editora indivisível"
              ></Image>
            </Box>
            <Box>
              <Box paddingY={2}>
                <Typography variant="body1" color={"black"} component={"p"}>
                  O Brasil tem um enorme mercado de quadrinhos, mas ainda
                  dominado por publicações estrangeiras. Os quadrinistas
                  brasileiros acabam se publicando de forma independente, e
                  assim, acabaram por criar uma forte cena indie, vibrante e
                  plural, mas que ainda luta para conseguir seu espaço ao sol.
                </Typography>
              </Box>
              <Box paddingY={2}>
                <Typography variant="body1" color={"black"} component={"p"}>
                  A
                  <Typography
                    variant="body1"
                    component={"span"}
                    paddingX={"0.3rem"}
                  >
                    <Link
                      href={"https://indievisivelpress.com.br/"}
                      underline={"hover"}
                      target="_blank"
                      rel="noopener noreferrer"
                      fontWeight={"bolder"}
                    >
                      IndieVisível Press
                    </Link>
                  </Typography>
                  veio com a missão de trazer o indie a mais pessoas, levando
                  essas histórias maravilhosas e únicas a um público cada vez
                  maior, mostrando a qualidade dos quadrinhos nacionais e os
                  colocando no mesmo patamar das grandes editoras.
                </Typography>
              </Box>
              <Box paddingY={2}>
                <Typography variant="body1" color={"black"} component={"p"}>
                  A{" "}
                  <Typography
                    variant="body1"
                    component={"span"}
                    paddingX={"0.3rem"}
                  >
                    <Link
                      href={"https://indievisivelpress.com.br/"}
                      underline={"hover"}
                      target="_blank"
                      rel="noopener noreferrer"
                      fontWeight={"bolder"}
                    >
                      IndieVisível Press
                    </Link>
                  </Typography>
                  foi fundada em 2018, com a intenção de permitir a seus
                  fundadores contarem as histórias que queriam mostrar ao mundo.
                  No mesmo ano, o estúdio teve sucesso em duas campanhas de
                  financiamento coletivo e foi convidado para a Bienal de
                  Quadrinhos de Curitiba, apresentando seu primeiro quadrinho
                  impresso, O Gato e Sua Lua. Logo depois veio a CCXP, e a
                  partir de então, muita coisa aconteceu! Hoje, já foram treze
                  campanhas de financiamento pelo Catarse, resultando em mais de
                  quinze obras impressas, e o estúdio não quer parar!
                </Typography>
              </Box>
            </Box>
          </Container>
        </section>
        <section id={"#push"}>
          <Box bgcolor={"primary.main"} paddingY={4}>
            <Container maxWidth={"md"}>
              <Box paddingY={2}>
                <Typography
                  variant="h1"
                  component="h2"
                  color={"primary.contrastText"}
                  sx={{ fontSize: { xs: "2rem", sm: "6rem", md: "6rem" } }}
                >
                  Sistema Push
                </Typography>
                <Typography
                  variant="h3"
                  component="h3"
                  color={"primary.contrastText"}
                  fontWeight={300}
                ></Typography>
              </Box>
              <Box
                display={"flex"}
                justifyContent={"center"}
                paddingY={3}
                position={"relative"}
              >
                <Image
                  src={data[1].frontImg?.src}
                  alt="Logo da editora indivisível"
                  height={300}
                ></Image>
              </Box>
              <Box paddingY={2}>
                <Typography variant={"body1"} color={"primary.contrastText"}>
                  Push é um sistema de RPG leve e focado em histórias, projetado
                  para aventuras cooperativas e cheias de ação. Este é um
                  sistema que você pode usar para criar seus próprios jogos
                  sobre personagens extraordinários embarcando em missões
                  perigosas por mundos fantásticos, independente do gênero do
                  jogo, seja ação, romance, terror, futurista ou fantasia
                  medieval!
                </Typography>
              </Box>
              <Box paddingY={2}>
                <Typography variant={"body1"} color={"primary.contrastText"}>
                  O Push é publicado como um Documento de Referência do Sistema,
                  que pode ser baixado gratuitamente aqui. Funcionando como um
                  guia passo a passo sobre como criar um jogo usando o sistema.
                  Você poderá adquirir em breve também a versão física em nossa
                  loja. O sistema Push é de criação de Cezar Capacle, que já
                  possui anos de carreira no cenário de RPG e trabalhou em
                  projetos como Criaturas Fantásticas (para Fate), Intrépidos e
                  diversos outros jogos focados em histórias emocionantes.
                </Typography>
              </Box>
              <Box paddingY={2}>
                <Typography
                  variant={"body1"}
                  color={"primary.contrastText"}
                  fontWeight={"bold"}
                  sx={{
                    textDecoration: "underline",
                    textDecorationColor: "#76F0DA",
                  }}
                >
                  Desde o lançamento, o SRD teve mais de 1100 downloads e o
                  modelo de 2 páginas foi traduzido para 6 idiomas!
                </Typography>
              </Box>
              <Box paddingY={2}>
                <Typography variant={"body1"} color={"primary.contrastText"}>
                  Com o Push, a IndieVisivel Press começa uma iniciativa para
                  aumentar o acesso a um motor para a criação de novos e mais
                  acessíveis jogos de RPG. Nosso primeiro jogo foi K-Star Squad,
                  lançado internacionalmente no Itch.io em Maio de 2022; o jogo
                  já foi baixado mais de 300 vezes em 1 mês! Com um valor de
                  R$15 reais para cópia digital e R$25 para cópia física, nossos
                  jogos Powered by Push buscarão ser a entrada para novos
                  jogadores. Teremos temas diversos, mostrando as possibilidades
                  e poder do sistema.
                </Typography>
              </Box>
            </Container>
          </Box>
        </section>
        <section id={"games"}>
          <Container maxWidth={"lg"} sx={{ paddingBottom: 4 }}>
            <Box paddingY={2} textAlign={"center"}>
              <Typography variant="h2" component="h2" color={"primary.main"}>
                Jogos
              </Typography>
              <Typography
                variant="body1"
                component="p"
                color={"primary.main"}
                fontWeight={300}
              >
                Jogue os jogos Powered by Push publicados pela IndieVisível
                Press
              </Typography>
            </Box>
            <Grid container gap={0} justifyContent="center">
              {games.map((item, index) => (
                <GameItem
                  newSessionId={newSessionId}
                  key={`${item.id}-${index}`}
                  about={item.gameDescriptions.about.text}
                  id={item.id}
                  title={item.title}
                  imageObject={
                    item.listImageObject
                      ? item.listImageObject
                      : item.imageObject
                  }
                  backgroundColor={item.backgroundColor}
                ></GameItem>
              ))}
            </Grid>
          </Container>
        </section>
        <footer>
          <Footer></Footer>
        </footer>
      </main>
    </>
  );
}
function GameItem({
  id,
  title,
  imageObject,
  backgroundColor,
  about,
  newSessionId,
}: {
  id: string;
  title: string;
  imageObject: any;
  backgroundColor: string;
  about: string;
  newSessionId: string;
}) {
  let textColor: string | undefined = "#fff";
  const findColor = (backgroundColor: string) => {
    if (!backgroundColor || backgroundColor === "") {
      return "#fff";
    }
    if (backgroundColor) {
      let color = new Color(backgroundColor);
      const contrastWhite = color.contrast("white", "APCA");
      const contrastBlack = color.contrast("black", "APCA");

      return Math.abs(contrastBlack) > Math.abs(contrastWhite)
        ? "#000"
        : "#fff";
    }
  };
  textColor = findColor(backgroundColor);

  const [show, setShow] = useState(false);

  function open() {
    setShow(true);
  }
  function close() {
    setShow(false);
  }

  function toggle() {
    setShow(!show);
  }

  return (
    <Grid key={id} md={4} padding={1}>
      <Box
        position={"relative"}
        sx={{ overflow: "hidden" }}
        maxWidth={400}
        bgcolor={backgroundColor}
      >
        <Image
          src={imageObject ? imageObject : ""}
          alt={title}
          width={400}
          height={500}
          style={{
            objectFit: "cover",
            objectPosition: "center center",
          }}
        ></Image>

        <Box position={"absolute"} bottom={70}>
          <Grow
            in={show}
            unmountOnExit
            mountOnEnter
            style={{ transformOrigin: "50% 100% 0" }}
          >
            <Box
              paddingBottom={2}
              paddingX={2}
              paddingTop={1}
              bgcolor={backgroundColor}
            >
              <IconButton
                onClick={close}
                sx={{ position: "absolute", top: 0, right: 0 }}
              >
                <CancelIcon></CancelIcon>
              </IconButton>
              <Typography variant={"h6"} color={textColor} paddingBottom={2}>
                {title}
              </Typography>
              <Typography variant={"body2"} color={textColor}>
                {about}
              </Typography>
              <Button
                variant={"contained"}
                color={"secondary"}
                fullWidth
                sx={{ marginTop: 3 }}
                component={Link}
                noLinkStyle
                disabled={id === "upcoming" ? true : false}
                href={`/${id}/${newSessionId}`}
                startIcon={<CasinoOutlinedIcon />}
              >
                {id !== "upcoming" ? "Jogar" : "Em Breve"}
              </Button>
            </Box>
          </Grow>
        </Box>
        <Box paddingBottom={2} paddingX={2} paddingTop={1}>
          <Paper elevation={1} sx={{ bgcolor: backgroundColor }}>
            <Button variant="text" onClick={toggle} fullWidth>
              <Typography variant={"subtitle1"} color={textColor}>
                {title}
              </Typography>
            </Button>
          </Paper>
        </Box>
      </Box>
    </Grid>
  );
}
