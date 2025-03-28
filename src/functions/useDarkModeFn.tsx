import { useMediaQuery } from "@mui/material";
import { useEffect } from "react";
import { LOCAL_STORAGE_KEY } from "../model";
import { useStore } from "../store/useStore";

export const useDarkModeFn = () => {
  const { setIsDarkMode } = useStore();
  const systemDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const userDarkMode = localStorage.getItem(LOCAL_STORAGE_KEY.userDarkMode);

  useEffect(() => {
    if (userDarkMode === null) {
      setIsDarkMode(systemDarkMode);
    }
  }, [systemDarkMode, setIsDarkMode, userDarkMode]);
};
