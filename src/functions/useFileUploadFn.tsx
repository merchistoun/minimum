import { useToaster } from "../components/common";
import { GROUP, NAMESPACE, useTranslate } from "../localization";
import { useStore } from "../store/useStore";

export interface UseFileUploadFn {
  fileUploadFn: () => Promise<void>;
}

export const useFileUploadFn = (): UseFileUploadFn => {
  const { uploadFiles, delUploadFile, setIsBusy } = useStore();
  const { success, error } = useToaster();
  const { translate } = useTranslate(
    NAMESPACE.fileUploadFunction,
    GROUP.toaster
  );

  const fileUploadFn = async (): Promise<void> => {
    setIsBusy(true);

    try {
      const results = await Promise.all(
        Array.from(uploadFiles).map(async ([tab, _file]) => {
          // Simulate upload delay
          await new Promise((res) => setTimeout(res, 2000));
          delUploadFile(tab);
        })
      );

      success(
        translate("success", { placeholders: { count: results.length } })
      );
    } catch {
      error(translate("error"));
    }

    setIsBusy(false);

    // Note: If concurrency needs to be limited (e.g. max 2 uploads at once),
    // we could use a concurrency control helper like `p-limit`
  };

  return { fileUploadFn };
};
