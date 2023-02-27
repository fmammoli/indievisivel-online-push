import { Box, Typography, Button } from "@mui/material";
import { useEffect, useState } from "react";
import DiceIcon from "./DiceIcon";

interface FirstRollPropsType {
  rerollable: boolean;
  value: number;
  value2?: number;
  text: string;
  handleSecondRoll?: ({
    prevRoll,
    options,
    author,
    color,
    id,
  }: {
    prevRoll: number;
    options: { value: number; text: string }[];
    author: string;
    color: string;
    id: string;
  }) => void;
  color: string;
  author: string;
  options: any[];
  id: string;
}

export default function RollMessageContent({
  id,
  rerollable = false,
  value,
  text,
  handleSecondRoll,
  color,
  author,
  options,
  value2,
}: FirstRollPropsType) {
  return (
    <Box>
      <Box display={"flex"} gap={1} alignItems="flex-start">
        <DiceIcon value={value} fontSize="medium" color="disabled"></DiceIcon>
        {value2 ? (
          <DiceIcon
            value={value2}
            fontSize="medium"
            color="disabled"
          ></DiceIcon>
        ) : null}

        <Typography variant="body2" color={"rgba(0, 0, 0, 0.6)"}>
          {text}
        </Typography>
      </Box>

      {rerollable && handleSecondRoll ? (
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
                id: id,
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
