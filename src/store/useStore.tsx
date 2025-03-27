import { create } from "zustand";

type State = {
  isBusy: boolean;
  selectedTab: number;
  uploadFiles: Map<number, File>;

  setIsBusy: (isBusy: boolean) => void;
  setSelectedTab: (tabIndex: number) => void;
  setUploadFile: (file: File) => void;
};

export const useStore = create<State>((set) => ({
  selectedTab: 0,
  isBusy: false,
  uploadFiles: new Map<number, File>(),

  setSelectedTab: (selectedTab: number) => set(() => ({ selectedTab })),
  setIsBusy: (isBusy: boolean) => set(() => ({ isBusy })),
  setUploadFile: (file: File) =>
    set((state) => {
      state.uploadFiles.set(state.selectedTab, file);
      return { uploadFiles: new Map(state.uploadFiles) };
    }),
}));
