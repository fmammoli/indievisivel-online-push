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
import {
  Dispatch,
  FormEvent,
  SetStateAction,
  useEffect,
  useMemo,
  useState,
} from "react";
import { SessionType } from "@/pages/[gameId]/[sessionId]";
import UpdateIcon from "@mui/icons-material/Update";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

import HistoryIcon from "@mui/icons-material/History";

interface GameBannerProps {
  banner?: string;
  title: string;
  backgroundColor?: string;
  sessionName: string;
  lastSaved: string | Date;
  setSession: Dispatch<SetStateAction<SessionType>>;
  gameColor?: string;
}

export default function GameBanner({
  banner,
  title,
  backgroundColor = "white",
  sessionName,
  lastSaved,
  setSession,
  gameColor = "#6e6e6e",
}: GameBannerProps) {
  const [inputState, setInputState] = useState(sessionName);

  const [focus, setFocus] = useState(false);

  const [show, setShow] = useState(false);

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

  const showForm = () => {
    setShow(true);
  };

  const hideForm = () => {
    setShow(false);
  };

  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  let renderDate = "";

  if (hydrated) {
    renderDate =
      typeof lastSaved === "string"
        ? new Date(lastSaved).toLocaleString(["pt-BR"], {
            weekday: "long",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          })
        : lastSaved.toLocaleString(["pt-BR"], {
            weekday: "long",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          });
  }

  function handleSubmit(e: FormEvent<Element>) {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      sessionName: { value: string };
    };
    if (target.sessionName.value !== sessionName) {
      setSession((session: SessionType) => {
        return {
          ...session,
          name: target.sessionName.value,
          lastSaved: new Date(),
        };
      });
    }
  }

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

      <Container
        sx={{
          gridArea: "1 / 1 / 2 / 2",
          zIndex: "1",
          background: `linear-gradient(90deg, ${gameColor}80 1%, ${gameColor}80 25%, ${gameColor}20 70%, rgba(151,151,151,0) 100%)`,
          margin: 0,
          display: "flex",
          width: "100%",
        }}
      >
        <Box
          display={"flex"}
          alignItems="center"
          justifyContent="space-between"
          sx={{
            marginInline: { sx: "0", sm: "0", md: "2rem" },
            flexDirection: "row",
          }}
          flexGrow={1}
        >
          <Box paddingY={1} paddingX={2}>
            <Typography
              variant="h2"
              component="h1"
              color="white"
              sx={{ fontSize: { xs: "2rem", sm: "2rem", md: "3.75rem" } }}
              borderRadius={"50%"}
            >
              {title}
            </Typography>
            <Box
              display={"flex"}
              sx={{
                flexDirection: { xs: "column", sm: "column", md: "row" },
                gap: { xs: "0", sm: "0", md: "4" },
              }}
            >
              <form
                onSubmit={handleSubmit}
                onMouseEnter={showForm}
                onMouseLeave={hideForm}
              >
                <Box display={"flex"} gap={1}>
                  <TextField
                    defaultValue={sessionName}
                    variant={"standard"}
                    name="sessionName"
                    sx={{
                      "& .MuiInputBase-root": {
                        color: "white",
                      },
                    }}
                  ></TextField>
                  <Fade in={show}>
                    <IconButton color="primary" type="submit">
                      <CheckCircleOutlineIcon></CheckCircleOutlineIcon>
                    </IconButton>
                  </Fade>
                </Box>
              </form>
              <Box display={"flex"} gap={1} alignItems="center">
                <HistoryIcon color={"primary"}></HistoryIcon>
                <Typography variant="body2" color={"white"}>
                  {renderDate}
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box
            alignSelf={"flex-end"}
            position={"relative"}
            sx={{
              width: { xs: "50px", sm: "50px", md: "100px" },
              height: { xs: "27.8px", sm: "27.8px", md: "56px" },
            }}
          >
            <Image src={pushPowered} alt={""} fill></Image>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
