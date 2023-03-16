import { PaletteColorOptions } from "@mui/material";

declare module "@mui/material/styles" {
  interface PaletteOptions {
    oracle: PaletteColorOptions;
    dices: PaletteColorOptions;
    complications: PaletteColorOptions;
    matrix: PaletteColorOptions;
    primaryAccent: PaletteColorOptions;
    secondaryAccent: PaletteColorOptions;
    other: PaletteColorOptions;
  }
  interface PaletteColor {
    darker?: string;
    link?: string;
  }

  interface SimplePaletteColorOptions {
    darker?: string;
    link?: string;
  }
}
