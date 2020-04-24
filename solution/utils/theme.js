import React from "react";
import {
  createMuiTheme,
  MuiThemeProvider as ThemeProvider,
} from "@material-ui/core/styles";

const defaultTheme = createMuiTheme();
const { palette, shape } = createMuiTheme({
  palette: {
    primary: {
      main: "#002d40",
    },
    secondary: {
      main: "#dfa928",
    },
    background: {
      default: "#ffffff",
      paper: "#fcfdfd",
    },
    text: {
      secondary: "#333333",
    },
    divider: "rgba(0, 0, 0, 0.08)",
  },
  shape: {
    borderRadius: 4,
  },
});

const theme = createMuiTheme({
  palette,
  typography: {
    fontSize: 12,
  },
  shape,
  typography: {
    h1: {
      fontFamily: "Montserrat",
      fontSize: "48px",
      fontWeight: 200,
    },
    h2: {
      fontFamily: "Montserrat",
      fontSize: "36px",
      fontWeight: 800,
    },
    h3: {
      fontFamily: "Montserrat",
      fontSize: "30px",
      fontWeight: 400,
    },
    h4: {
      fontFamily: "Montserrat",
      fontSize: "24px",
      fontWeight: 800,
    },
    h5: {
      fontFamily: "Montserrat",
      fontSize: "24px",
      fontWeight: 600,
    },
  },
});

export const ThemeWrapper = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default theme;
