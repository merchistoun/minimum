import { NAMESPACE, useTranslate } from "../../localization";
import { MainTab, TAB } from "../../model";
import { useStore } from "../../store/useStore";

export interface UseMainLayout {
  tabs: MainTab[];
  selectedTab: number;
  selectedTabFile: File | undefined;
  onTabChanged: (tabIndex: number) => void;
  onFileDropped: (files: File) => void;
  onFileRemove: () => void;
}

export const useMainLayout = (): UseMainLayout => {
  const { translate } = useTranslate(NAMESPACE.tabs);

  const {
    selectedTab,
    uploadFiles,
    setSelectedTab,
    setUploadFile,
    delUploadFile,
  } = useStore();

  const tabs: MainTab[] = [TAB.fuel, TAB.electricity].map((name, value) => ({
    name: translate(name),
    value,
    showIcon: !!uploadFiles.get(value),
  }));

  const onFileDropped = (file: File) => {
    if (selectedTab !== undefined) {
      setUploadFile(file);
    }
  };

  const onFileRemove = () => {
    if (selectedTab !== undefined) {
      delUploadFile(selectedTab);
    }
  };
  return {
    tabs,
    selectedTab,
    selectedTabFile: uploadFiles.get(selectedTab),
    onTabChanged: setSelectedTab,
    onFileDropped,
    onFileRemove,
  };
};
