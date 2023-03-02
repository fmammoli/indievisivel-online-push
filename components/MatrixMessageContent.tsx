import { Box, Typography } from "@mui/material";
import DiceIcon from "./DiceIcon";

export default function MatrixMessageContent({
  value1,
  value2,
  text,
}: {
  value1: number;
  value2?: number;
  text: string;
}) {
  return (
    <Box display={"flex"} gap={1} alignItems="flex-start">
      <Box>
        <DiceIcon value={value1} fontSize="medium" color="disabled"></DiceIcon>
        {value2 && (
          <DiceIcon
            value={value2}
            fontSize="medium"
            color="disabled"
          ></DiceIcon>
        )}
      </Box>
      <Typography variant="body2" color={"rgba(0, 0, 0, 0.6)"}>
        {text}
      </Typography>
    </Box>
  );
}
