import { useFileUploadFn } from "../../functions";
import { useStore } from "../../store/useStore";

export interface UseTitlePanel {
  isUploadDisabled: boolean;
  isBusy: boolean;
  onUploadClick: () => void;
}

export const useTitlePanel = (): UseTitlePanel => {
  const { isBusy, uploadFiles } = useStore();
  const { fileUploadFn } = useFileUploadFn();

  const isUploadDisabled = uploadFiles.size === 0;

  const onUploadClick = () => {
    fileUploadFn();
  };

  return { isBusy, isUploadDisabled, onUploadClick };
};
