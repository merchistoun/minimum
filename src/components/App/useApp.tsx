import { createTheme } from "@mui/material";
import { useDarkModeFn } from "../../functions";
import { LOCAL_STORAGE_KEY } from "../../model";
import { darkThemeOptions, lightThemeOptions } from "../../styles/theme";
import { useStore } from "../../store/useStore";

export interface UseApp {
  theme: ReturnType<typeof createTheme>;
}

export const useApp = (): UseApp => {
  useDarkModeFn();

  const { isDarkMode } = useStore();
  const theme = createTheme(isDarkMode ? darkThemeOptions : lightThemeOptions);

  return { theme };
};
