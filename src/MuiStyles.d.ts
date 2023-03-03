import { PaletteColorOptions } from "@mui/material";

declare module "@mui/material/styles" {
  interface PaletteOptions {
    oracle: PaletteColorOptions;
    primaryAccent: PaletteColorOptions;
    secondaryAccent: PaletteColorOptions;
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
