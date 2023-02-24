import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import styles from "@/styles/Home.module.scss";
import pushPowered from "../public/images/pushPoweredLogo.png";

interface GameBannerProps {
  banner: string;
  title: string;
}

export default function GameBanner({ banner, title }: GameBannerProps) {
  console.log();
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "1fr",
        gridTemplateRows: "1fr",
        borderBlock: "1px solid #D8D8D8",
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
          sx={{ marginInline: "2rem" }}
        >
          <Typography variant="h2" component="h1" color="white">
            {title}
          </Typography>

          <Image src={pushPowered} alt={""} width={160}></Image>
        </Box>
      </Container>
    </Box>
  );
}
