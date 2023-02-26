import { Box, Typography, Button } from "@mui/material";
import { color } from "@mui/system";
import DiceIcon from "./DiceIcon";

interface FirstRollPropsType {
  rerollable: boolean;
  value: number;
  text: string;
  handleSecondRoll: ({
    prevRoll,
    options,
    author,
    color,
  }: {
    prevRoll: number;
    options: { value: number; text: string }[];
    author: string;
    color: string;
  }) => void;
  color: string;
  author: string;
  options: any[];
}

export default function FirstRollMessageContent({
  rerollable,
  value,
  text,
  handleSecondRoll,
  color,
  author,
  options,
}: FirstRollPropsType) {
  return (
    <Box>
      <Box display={"flex"} gap={1} alignItems="flex-start">
        <DiceIcon value={value} fontSize="medium" color="disabled"></DiceIcon>
        <Typography variant="body2" color={"rgba(0, 0, 0, 0.6)"}>
          {text}
        </Typography>
      </Box>

      {rerollable ? (
        <Box>
          <Button
            fullWidth
            variant="outlined"
            onClick={(e) =>
              handleSecondRoll({
                prevRoll: value,
                color: color,
                author: author,
                options: options,
              })
            }
          >
            Rolar Novamente
          </Button>
        </Box>
      ) : null}
    </Box>
  );
}
