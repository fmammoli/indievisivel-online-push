import Image from "next/image";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Link from "@/src/Link";
import styles from "@/styles/Home.module.scss";

import pushLogo from "../public/images/pushLogo.png";
import indieLogo from "../public/images/logoIndie-300x300.png";

import {
  Divider,
  Menu,
  MenuItem,
  Paper,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { useState } from "react";

export default function TopMenu({
  colors = "primary",
  small = false,
  linkColor,
}: {
  colors?: "primary" | "secondary";
  small?: boolean;
  linkColor?: string;
}) {
  const theme = useTheme();
  const logoSize = small ? "36" : "52";
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <nav className={styles.navWrapper}>
      <Stack
        direction={"row"}
        justifyContent="space-between"
        py={2}
        sx={{ marginInline: { xs: "1rem", sm: "1rem", md: "2rem" } }}
      >
        <Stack
          alignItems={"center"}
          gap={4}
          sx={{
            flexDirection: "row",
            justifyContent: {
              xs: "space-between",
              sm: "space-between",
              md: "flex-start",
            },
            width: { xs: "100%", sm: "100%", md: "auto" },
          }}
        >
          <Paper elevation={4} sx={{ borderRadius: "90px" }}>
            <Box
              position={"relative"}
              display="flex"
              justifyContent={"center"}
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
          <Box sx={{ display: { sm: "block", md: "none" } }}>
            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              color={colors}
            >
              Menu
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose} href={"/"}>
                <Link href={"/"} underline={"none"}>
                  Home
                </Link>
              </MenuItem>
              <MenuItem onClick={handleClose} href={"#"}>
                <Link href={"#"} underline={"none"}>
                  Sobre
                </Link>
              </MenuItem>
              <MenuItem onClick={handleClose} href={"#"}>
                <Link href={"#"} underline={"none"}>
                  Jogos
                </Link>
              </MenuItem>
              <Divider></Divider>
              <MenuItem onClick={handleClose}>
                <Link href={"/mySessions"} underline={"none"}>
                  <Button variant={"outlined"} size={"large"}>
                    Minhas Sessões
                  </Button>
                </Link>
              </MenuItem>
            </Menu>
          </Box>
          <Box gap={6} sx={{ display: { xs: "none", sm: "none", md: "flex" } }}>
            <Link href={"/"} underline={"hover"} color={"secondary"}>
              <Typography
                variant={"body1"}
                color={linkColor}
                sx={{ transition: "color 0.6s ease-out" }}
              >
                Home
              </Typography>
            </Link>
            <Link href={"#"} underline={"hover"} color={"secondary"}>
              <Typography
                variant={"body1"}
                color={linkColor}
                sx={{ transition: "color 0.6s ease-out" }}
              >
                Sobre
              </Typography>
            </Link>
            <Link href={"#"} underline={"hover"} color={"secondary"}>
              <Typography
                variant={"body1"}
                color={linkColor}
                sx={{ transition: "color 0.6s ease-out" }}
              >
                Jogos
              </Typography>
            </Link>
          </Box>
        </Stack>
        <Stack
          direction={"row"}
          alignItems={"center"}
          sx={{ display: { xs: "none", sm: "none", md: "flex" } }}
        >
          <Link href={"/mySessions"} underline={"none"}>
            <Button variant={"outlined"} size={"large"} color={colors}>
              Minhas Sessões
            </Button>
          </Link>
        </Stack>
      </Stack>
    </nav>
  );
}
