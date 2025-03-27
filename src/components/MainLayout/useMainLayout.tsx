import { NAMESPACE, useTranslate } from "../../localization";
import { Items, TAB } from "../../model";
import { useStore } from "../../store/useStore";

export interface UseMainLayout {
  tabs: Items<number>;
  selectedTab: number;
  onTabChanged: (tabIndex: number) => void;
}

export const useMainLayout = (): UseMainLayout => {
  const { translate } = useTranslate(NAMESPACE.tabs);
  const { selectedTab, setSelectedTab } = useStore();

  const tabs: Items<number> = [TAB.fuel, TAB.electricity].map(
    (name, value) => ({
      name: translate(name),
      value,
      showIcon: false,
    })
  );

  return { tabs, selectedTab, onTabChanged: setSelectedTab };
};
