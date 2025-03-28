import { ThemeOptions } from "@mui/material";

export const lightTheme = {
  fontFamily: "Inter, sans-serif",
  color1: "#064ebf",
  color2: "#a8c7f4",
  success: "#52a500",
  error: "#ef4444",
  warn: "#ea8c15",
  text: "#1e293b",
  background: "#f8fafc",
};

export const darkTheme = {
  fontFamily: "Inter, sans-serif",
  color1: "#9BDBFC",
  color2: "#555",
  success: "#52a500",
  error: "#ef4444",
  warn: "#facc15",
  text: "#eee",
  background: "#252524",
  paper: "#353535",
};

export const lightThemeOptions: ThemeOptions = {
  palette: {
    mode: "light",
    background: {
      default: lightTheme.background,
    },
    primary: {
      main: lightTheme.color1,
      light: lightTheme.color2,
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
      fontSize: "1.125rem",
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

export const darkThemeOptions: ThemeOptions = {
  palette: {
    mode: "dark",
    background: {
      default: darkTheme.background,
      paper: darkTheme.paper,
    },
    primary: {
      main: darkTheme.color1,
      light: darkTheme.color2,
      contrastText: darkTheme.background,
    },
    secondary: {
      main: darkTheme.color2,
      contrastText: darkTheme.background,
    },
    success: {
      main: darkTheme.success,
    },
    warning: {
      main: darkTheme.warn,
    },
    error: {
      main: darkTheme.error,
    },
  },
  typography: {
    fontFamily: darkTheme.fontFamily,

    body1: {
      fontFamily: darkTheme.fontFamily,
      fontSize: "0.875rem",
      fontWeight: 400,
      color: darkTheme.text,
    },

    body2: {
      fontFamily: darkTheme.fontFamily,
      fontSize: "0.75rem",
      fontWeight: 400,
      color: darkTheme.text,
    },

    h1: {
      fontFamily: darkTheme.fontFamily,
      fontSize: "1.125rem",
      fontWeight: 600,
    },

    h2: {
      fontFamily: darkTheme.fontFamily,
      fontSize: "1.125rem",
      fontWeight: 500,
      color: darkTheme.text,
    },
  },
};
