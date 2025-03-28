import { useStore } from "../../store/useStore";

interface UseSettingsPanel {
  isDarkMode?: boolean;
  onDarkModeChanged: (isLightMode: boolean) => void;
}

export const useSettingsPanel = (): UseSettingsPanel => {
  const { isDarkMode, setIsDarkMode } = useStore();

  const onDarkModeChanged = (isChecked: boolean) => {
    setIsDarkMode(!isChecked);
  };

  return { isDarkMode, onDarkModeChanged };
};
