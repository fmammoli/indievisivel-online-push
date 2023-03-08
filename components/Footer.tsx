import Link from "@/src/Link";
import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box bgcolor={"primary.main"} padding={3}>
      <Box
        display={"flex"}
        justifyContent="center"
        alignItems={"center"}
        gap={0.5}
      >
        <Typography variant={"body2"} color={"white"}>
          Copyright © 2023 IndieVisivel Press | Desenvolvido por
        </Typography>
        <Typography variant="body2">
          <Link
            href={"https://github.com/fmammoli"}
            underline={"always"}
            target="_blank"
            rel="noopener noreferrer"
            color={"secondary.main"}
          >
            fmammoli
          </Link>
        </Typography>
      </Box>
    </Box>
  );
}
