import { StyledEngineProvider, ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { ToastContainer } from "react-toastify";
import { MainLayout } from "../";
import { useApp } from "./useApp";
import { useStore } from "../../store/useStore";

export const App = (): React.ReactElement => {
  const { theme } = useApp();
  const { language } = useStore();

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <div lang={language}>
          <CssBaseline />
          <MainLayout />
          <ToastContainer pauseOnFocusLoss={false} theme="colored" />
        </div>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};
