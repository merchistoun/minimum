import { create } from "zustand";
import { LOCAL_STORAGE_KEY } from "../model";

type State = {
  isBusy: boolean;
  selectedTab: number;
  uploadFiles: Map<number, File>;
  isDarkMode: boolean | undefined;
  language: string;

  setIsBusy: (isBusy: boolean) => void;
  setSelectedTab: (tabIndex: number) => void;
  setUploadFile: (file: File) => void;
  delUploadFile: (tab: number) => void;
  setIsDarkMode: (isDarkMode: boolean) => void;
  setLanguage: (language: string) => void;
};

export const useStore = create<State>((set) => ({
  selectedTab: 0,
  isBusy: false,
  uploadFiles: new Map<number, File>(),
  isDarkMode: localStorage.getItem(LOCAL_STORAGE_KEY.userDarkMode) === "true",
  language: localStorage.getItem("userLanguage") || navigator.language || "en",

  setSelectedTab: (selectedTab: number) => set(() => ({ selectedTab })),
  setIsBusy: (isBusy: boolean) => set(() => ({ isBusy })),
  setUploadFile: (file: File) =>
    set((state) => {
      state.uploadFiles.set(state.selectedTab, file);
      return { uploadFiles: new Map(state.uploadFiles) };
    }),
  delUploadFile: (tab: number) => {
    set((state) => {
      state.uploadFiles.delete(tab);
      return { uploadFiles: new Map(state.uploadFiles) };
    });
  },
  setIsDarkMode: (isDarkMode: boolean) =>
    set(() => {
      localStorage.setItem(
        LOCAL_STORAGE_KEY.userDarkMode,
        isDarkMode ? "true" : "false"
      );
      return { isDarkMode };
    }),

  setLanguage: (language: string) =>
    set(() => {
      localStorage.setItem("userLanguage", language);
      return { language };
    }),
}));
