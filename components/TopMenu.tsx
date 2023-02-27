import Image from "next/image";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Link from "@/src/Link";
import styles from "@/styles/Home.module.scss";

import pushLogo from "../public/images/pushLogo.png";
import indieLogo from "../public/images/logoIndie-300x300.png";

import { Divider, Menu, MenuItem, Paper, Stack } from "@mui/material";
import { useState } from "react";

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
      <Stack direction={"row"} justifyContent="space-between" py={2}>
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
          <Box sx={{ display: { sm: "block", md: "none" } }}>
            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              sx={{
                "&:hover": { color: textColor.hover },
                color: textColor.color,
              }}
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
              <MenuItem onClick={handleClose}>
                <Link href={"/"} underline={"none"}>
                  Home
                </Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link href={"#"} underline={"none"}>
                  Sobre
                </Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link href={"#"} underline={"none"}>
                  Jogos
                </Link>
              </MenuItem>
              <Divider></Divider>
              <MenuItem onClick={handleClose}>
                <Button
                  variant={"outlined"}
                  sx={{ borderRadius: "24px" }}
                  size={"large"}
                >
                  Minhas Sessões
                </Button>
              </MenuItem>
            </Menu>
          </Box>
          <Box gap={6} sx={{ display: { xs: "none", sm: "none", md: "flex" } }}>
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
          </Box>
        </Stack>
        <Stack
          direction={"row"}
          alignItems={"center"}
          sx={{ display: { xs: "none", sm: "none", md: "flex" } }}
        >
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
