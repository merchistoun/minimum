export type MainTab = {
  value: number;
  name: string;
  showIcon: boolean;
};

export type Option = {
  label: string;
  value: string;
};

export enum TAB {
  fuel = "fuel",
  electricity = "electricity",
}

export enum LOCAL_STORAGE_KEY {
  userDarkMode = "userDarkMode",
}
