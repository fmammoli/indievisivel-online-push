import { Roboto } from "@next/font/google";
import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

export const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#612F74",
      link: "#612F74",
    },
    secondary: {
      main: "#76F0DA",
      link: "#ffff",
    },
    error: {
      main: red[400],
    },
    oracle: {
      main: red[400],
    },
    primaryAccent: {
      main: "#612F74",
    },
    secondaryAccent: {
      main: "#76F0DA",
      contrastText: "white",
    },
    success: {
      main: "#43742f",
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
    button: {
      textTransform: "none",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {},
      styleOverrides: {
        root: { borderWidth: "2px" },
        outlined: {
          borderRadius: "24px",
          fontVariant: "normal",

          ":hover": { borderWidth: "2px" },
        },
      },
    },
    MuiLink: {
      styleOverrides: {},
    },
  },
});

export default theme;
