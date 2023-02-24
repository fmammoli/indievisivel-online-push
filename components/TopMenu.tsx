import Head from "next/head";
import Image from "next/image";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@/src/Link";
import SwipeView from "@/components/SwipeView";
import styles from "@/styles/Home.module.scss";

import pushBackgroundImg from "../public/images/pushBackground.jpg";
import push from "../public/images/push.png";
import pushLogo from "../public/images/pushLogo.png";
import indieLogo from "../public/images/logoIndie-300x300.png";
import seasonImg from "../public/images/season.jpeg";

import { Avatar, Grid, Paper, Stack } from "@mui/material";
import CasinoOutlinedIcon from "@mui/icons-material/CasinoOutlined";
import { useEffect, useRef, useState } from "react";

import { FastAverageColor } from "fast-average-color";

export type MenuColorsType = {
  color: string;
  hover: string;
};

export default function TopMenu({
  colors = { color: "white", hover: "#6750A4" },
  small = false,
}: {
  colors?: MenuColorsType;
  small?: boolean;
}) {
  const [textColor, setTextColor] = useState(colors);

  const logoSize = small ? "36" : "52";
  return (
    <nav className={styles.navWrapper}>
      <Stack direction={"row"} justifyContent="space-between" py={2}>
        <Stack direction={"row"} alignItems={"center"} spacing={6}>
          <Paper elevation={4} sx={{ borderRadius: "90px" }}>
            <Box
              position={"relative"}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
              gap={2}
              padding={1}
            >
              <Image
                src={indieLogo}
                alt="Indivisivel logo"
                width={logoSize}
                height={logoSize}
                style={{ alignSelf: "center" }}
              ></Image>
              <Image
                src={pushLogo}
                alt="Push logo"
                width={logoSize}
                height={logoSize}
                style={{ alignSelf: "center" }}
              ></Image>
            </Box>
          </Paper>
          <Link
            href={"/"}
            underline={"none"}
            sx={{
              "&:hover": { color: textColor.hover },
              color: textColor.color,
            }}
          >
            Home
          </Link>
          <Link
            href={"#"}
            underline={"none"}
            sx={{
              "&:hover": { color: textColor.hover },
              color: textColor.color,
            }}
          >
            Sobre
          </Link>
          <Link
            href={"#"}
            underline={"none"}
            sx={{
              "&:hover": { color: textColor.hover },
              color: textColor.color,
            }}
          >
            Jogos
          </Link>
        </Stack>
        <Stack direction={"row"} alignItems={"center"}>
          <Button
            variant={"outlined"}
            sx={{ borderRadius: "24px", color: textColor.color }}
            size={"large"}
          >
            Minhas Sessões
          </Button>
        </Stack>
      </Stack>
    </nav>
  );
}
