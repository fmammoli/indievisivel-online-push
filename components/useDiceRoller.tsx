import { DiceRoll, DiceRoller } from "@dice-roller/rpg-dice-roller";
import { useState } from "react";
export default function useDiceRoller() {
  const [diceRoller, setDiceRoller] = useState(new DiceRoller());

  return diceRoller;
}
