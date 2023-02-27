import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import styles from "@/styles/Home.module.scss";
import pushPowered from "../public/images/pushPoweredLogo.png";

interface GameBannerProps {
  banner: string;
  title: string;
}
console.log(pushPowered);
export default function GameBanner({ banner, title }: GameBannerProps) {
  console.log();
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
        }}
      >
        <Image
          src={banner}
          alt={""}
          className={styles.bannerImage}
          fill
        ></Image>
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
          <Typography
            variant="h2"
            component="h1"
            color="white"
            sx={{ fontSize: { xs: "2rem", sm: "2rem", md: "3.75rem" } }}
          >
            {title}
          </Typography>
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
