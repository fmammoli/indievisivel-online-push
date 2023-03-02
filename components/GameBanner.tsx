import {
  Box,
  Container,
  Fade,
  FormControl,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import styles from "@/styles/Home.module.scss";
import pushPowered from "../public/images/pushPoweredLogo.png";
import { Dispatch, SetStateAction, useState } from "react";
import { SessionType } from "@/pages/[gameId]/[sessionId]";
import UpdateIcon from "@mui/icons-material/Update";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
interface GameBannerProps {
  banner?: string;
  title: string;
  backgroundColor?: string;
  sessionName: string;
  lastSaved: string | Date;
  setSession: Dispatch<SetStateAction<SessionType>>;
}

export default function GameBanner({
  banner,
  title,
  backgroundColor = "white",
  sessionName,
  lastSaved,
  setSession,
}: GameBannerProps) {
  const [inputState, setInputState] = useState(sessionName);

  const [focus, setFocus] = useState(false);

  const handleBlur = () => {
    if (inputState !== sessionName) {
      setSession((session: SessionType) => {
        return { ...session, name: inputState, lastSaved: new Date() };
      });
    }
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputState(event.target.value);
  };

  const handleFocus = () => {
    setFocus(true);
  };
  const onBlur = () => {
    setFocus(false);
  };

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "1fr",
        gridTemplateRows: "1fr",
        borderBlock: { xs: "", sm: "", md: "1px solid #D8D8D8" },
      }}
    >
      <Box
        sx={{
          height: "100%",
          position: "relative",
          isolation: "isolate",
          gridArea: "1 / 1 / 2 / 2",
          backgroundColor: backgroundColor,
        }}
      >
        {banner && (
          <Image
            priority
            src={banner}
            alt={""}
            className={styles.bannerImage}
            fill
          ></Image>
        )}
      </Box>
      <Container sx={{ gridArea: "1 / 1 / 2 / 2", zIndex: "1" }}>
        <Box
          display={"flex"}
          alignItems="center"
          justifyContent="space-between"
          sx={{
            marginInline: "2rem",
            flexDirection: "row",
          }}
        >
          <Box paddingY={1}>
            <Typography
              variant="h2"
              component="h1"
              color="white"
              sx={{ fontSize: { xs: "2rem", sm: "2rem", md: "3.75rem" } }}
              borderRadius={"50%"}
            >
              {title}
            </Typography>
            <Typography
              variant="h2"
              component="h1"
              color="white"
              sx={{ fontSize: { xs: "2rem", sm: "2rem", md: "3.75rem" } }}
              borderRadius={"50%"}
            >
              {sessionName}
            </Typography>

            {/* <Box
              display={"flex"}
              alignItems="center"
              gap={4}
              bgcolor={focus ? "gray" : "transparent"}
            >
              <TextField
                value={inputState}
                defaultValue={sessionName}
                onFocus={handleFocus}
                onBlur={onBlur}
                variant={"standard"}
                sx={{
                  "& .MuiInputBase-root": {
                    color: "white",
                  },
                }}
                onChange={onChange}
              ></TextField>
              <Fade in={focus}>
                <IconButton onClick={handleBlur} color={"primary"}>
                  <CheckBoxIcon></CheckBoxIcon>
                </IconButton>
              </Fade>
              <Box display={"flex"} alignItems="center" gap={1}>
                <UpdateIcon color={"success"}></UpdateIcon>
                <Typography variant="body2" color={"white"}>
                  {new Date(lastSaved).toLocaleString(["pt-BR"])}
                </Typography>
              </Box>
            </Box> */}
          </Box>

          <Box
            alignSelf={"flex-end"}
            position={"relative"}
            sx={{
              width: { xs: "50px", sm: "50px", md: "160px" },
              height: { xs: "27.8px", sm: "27.8px", md: "100%" },
            }}
          >
            <Image src={pushPowered} alt={""} fill></Image>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
