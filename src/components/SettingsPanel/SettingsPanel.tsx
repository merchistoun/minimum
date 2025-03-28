import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import { styled } from "@mui/material";
import React from "react";
import initializeTranslation, {
  NAMESPACE,
  useTranslate,
} from "../../localization";
import { useStore } from "../../store/useStore";
import { Accordion, Select, Switch } from "../common";
import { useSettingsPanel } from "./useSettingsPanel";

export const SettingsPanel = (): React.ReactElement => {
  const { isDarkMode, onDarkModeChanged } = useSettingsPanel();
  const { translate } = useTranslate(NAMESPACE.settingsPanel);
  const { language, setLanguage } = useStore();

  const handleLanguageChange = (locale: string) => {
    initializeTranslation(locale);
    setLanguage(locale);
  };

  return (
    <SettingsPanelLayout>
      <Accordion expander={<SettingsRoundedIcon />}>
        <AccordionContents>
          <Switch
            checked={!isDarkMode}
            labelPosition="end"
            checkedLabel={translate("lightMode")}
            uncheckedLabel={translate("darkMode")}
            onChange={onDarkModeChanged}
          />
          <Select
            value={language}
            onChange={handleLanguageChange}
            options={[
              { value: "en", label: "English" },
              { value: "hr", label: "Hrvatski" },
              { value: "fr", label: "Français" },
            ]}
          />
        </AccordionContents>
      </Accordion>
    </SettingsPanelLayout>
  );
};

const SettingsPanelLayout = styled("div")`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: -2rem;
`;

const AccordionContents = styled("div")`
  background: #00000010;
  padding: 1rem 1rem;
  border-radius: 0.5rem 0.5rem 0 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
