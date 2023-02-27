import { Box, Typography, Button } from "@mui/material";
import { useEffect, useState } from "react";
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
  id: string;
}

export default function FirstRollMessageContent({
  id,
  rerollable = false,
  value,
  text,
  handleSecondRoll,
  color,
  author,
  options,
}: FirstRollPropsType) {
  useEffect(() => {
    console.log(`Rerendering: ${id}, rerroled changed to ${rerollable}`);
  }, [rerollable]);

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
