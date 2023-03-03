import { ButtonPropsColorOverrides } from "@mui/material";
import { TrueLiteral } from "typescript";

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    oracle: true;
    primaryAccent: true;
    secondaryAccent: true;
  }
}
