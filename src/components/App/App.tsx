import {
  createTheme,
  StyledEngineProvider,
  ThemeProvider,
  useMediaQuery,
} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { ToastContainer } from "react-toastify";
import { MainLayout } from "../";
import { darkThemeOptions, lightThemeOptions } from "../../styles/theme";

export const App = (): React.ReactElement => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = createTheme(
    prefersDarkMode ? darkThemeOptions : lightThemeOptions
  );

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MainLayout />
        <ToastContainer pauseOnFocusLoss={false} theme="colored" />
      </ThemeProvider>
    </StyledEngineProvider>
  );
};
