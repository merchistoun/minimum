import { create } from "zustand";

type State = {
  isBusy: boolean;
  setIsBusy: (isBusy: boolean) => void;

  selectedTab: number;
  setSelectedTab: (tabIndex: number) => void;
};

export const useStore = create<State>((set) => ({
  selectedTab: 0,
  isBusy: false,
  setSelectedTab: (selectedTab: number) => set(() => ({ selectedTab })),
  setIsBusy: (isBusy: boolean) => set(() => ({ isBusy })),
}));
