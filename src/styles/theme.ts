import { ThemeOptions } from "@mui/material";

export const lightTheme = {
  fontFamily: "Inter, sans-serif",
  color1: "#064eff",
  color2: "#3b82f6",
  success: "#52a500",
  error: "#ef4444",
  warn: "#facc15",
  text: "#1e293b",
  background: "#f8fafc",
};

export const lightThemeOptions: ThemeOptions = {
  palette: {
    mode: "light",
    background: {
      default: lightTheme.background,
    },
    primary: {
      main: lightTheme.color1,
      contrastText: lightTheme.background,
    },
    secondary: {
      main: lightTheme.color2,
      contrastText: lightTheme.background,
    },
    success: {
      main: lightTheme.success,
    },
    warning: {
      main: lightTheme.warn,
    },
    error: {
      main: lightTheme.error,
    },
  },
  typography: {
    fontFamily: lightTheme.fontFamily,

    body1: {
      fontFamily: lightTheme.fontFamily,
      fontSize: "0.875rem",
      fontWeight: 400,
      color: lightTheme.text,
    },

    body2: {
      fontFamily: lightTheme.fontFamily,
      fontSize: "0.75rem",
      fontWeight: 400,
      color: lightTheme.text,
    },

    h1: {
      fontFamily: lightTheme.fontFamily,
      fontSize: "1.5rem",
      fontWeight: 600,
    },

    h2: {
      fontFamily: lightTheme.fontFamily,
      fontSize: "1.125rem",
      fontWeight: 500,
      color: lightTheme.text,
    },
  },
};

export const darkTheme = {};

export const darkThemeOptions: ThemeOptions = {};
