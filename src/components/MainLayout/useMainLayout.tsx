import { NAMESPACE, useTranslate } from "../../localization";
import { MainTab, TAB } from "../../model";
import { useStore } from "../../store/useStore";

export interface UseMainLayout {
  tabs: MainTab[];
  selectedTab: number;
  onTabChanged: (tabIndex: number) => void;
}

export const useMainLayout = (): UseMainLayout => {
  const { translate } = useTranslate(NAMESPACE.tabs);
  const { selectedTab, setSelectedTab, uploadFiles } = useStore();

  const tabs: MainTab[] = [TAB.fuel, TAB.electricity].map((name, value) => ({
    name: translate(name),
    value,
    showIcon: !!uploadFiles.get(value),
  }));

  return { tabs, selectedTab, onTabChanged: setSelectedTab };
};
