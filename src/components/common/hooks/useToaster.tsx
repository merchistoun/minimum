import { toast } from "react-toastify";

export interface UseToast {
  success: (message: string) => void;
  error: (message: string) => void;
  info: (message: string) => void;
}

export const useToaster = (): UseToast => {
  const success = (message: string) => {
    toast(message, {
      type: "success",
      position: "bottom-right",
      autoClose: 2000,
    });
  };
  const error = (message: string) => {
    toast(message, { type: "error", position: "bottom-right" });
  };
  const info = (message: string) => {
    toast(message, { type: "info", position: "bottom-right" });
  };

  return { success, error, info };
};
