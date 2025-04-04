import { createTheme } from "@mui/material";
import { useDarkModeFn } from "../../functions";
import { useStore } from "../../store/useStore";
import { darkThemeOptions, lightThemeOptions } from "../../styles/theme";

export interface UseApp {
  theme: ReturnType<typeof createTheme>;
}

export const useApp = (): UseApp => {
  useDarkModeFn();

  const { isDarkMode } = useStore();
  const theme = createTheme(isDarkMode ? darkThemeOptions : lightThemeOptions);

  return { theme };
};
