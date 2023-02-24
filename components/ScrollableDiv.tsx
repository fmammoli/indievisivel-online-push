import { Box } from "@mui/material";

export default function ScrollableDiv({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <Box sx={{ position: "absolute", inset: "0 0 0 0", overflow: "auto" }}>
        {children}
      </Box>
    </Box>
  );
}
