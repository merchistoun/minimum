import { SetStateAction, useEffect, useState } from "react";
import { LOCAL_STORAGE_KEY } from "../../../model";

export type UseLocalStorage<T> = [
  T,
  (setStateAction: SetStateAction<T | undefined | null>) => void
];

const getItemFromLocalStorage = <T,>(key: string): T | undefined => {
  try {
    const value = localStorage.getItem(key);
    console.log(">>> useLocalStorage:12", { key, value });
    return value !== null && value !== undefined
      ? (JSON.parse(value) as T)
      : undefined;
  } catch {
    return undefined;
  }
};

const setItemToLocalStorage = <T,>(key: string, value: T | null): void => {
  try {
    localStorage.setItem(
      key,
      value !== null && value !== undefined ? JSON.stringify(value) : ""
    );
  } catch {
    /* yum yum */
  }
};

export const useLocalStorage = <T,>(
  key: LOCAL_STORAGE_KEY,
  initialValue?: T
): UseLocalStorage<T> => {
  const [get, set] = useState<T | null | undefined>(
    getItemFromLocalStorage(key) || initialValue
  );

  const handleSet = (value: SetStateAction<T | null | undefined>): void => {
    set(value);
  };

  useEffect(() => {
    setItemToLocalStorage(key, get);
  }, [get, key]);

  return [get as T, handleSet];
};
