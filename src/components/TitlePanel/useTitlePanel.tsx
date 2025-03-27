import { useStore } from "../../store/useStore";

export interface UseTitlePanel {
  isUploadDisabled: boolean;
  onUploadClick: () => void;
}

export const useTitlePanel = (): UseTitlePanel => {
  const { uploadFiles, setUploadFile } = useStore();
  const isUploadDisabled = uploadFiles.size === 0;

  const onUploadClick = () => {
    setUploadFile(new File([], "test.txt"));
  };

  return { isUploadDisabled, onUploadClick };
};
