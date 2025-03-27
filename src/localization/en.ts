import { GROUP, NAMESPACE } from "./model";

// Default translations: US English

export default {
  [NAMESPACE.titlePanel]: {
    [GROUP.default]: {
      title: "Energy Uploads",
      uploadButton: "Upload",
    },
  },

  [NAMESPACE.infoPanel]: {
    [GROUP.default]: {
      title: "Instructions",
      instructions:
        "Select each tab below and drag a file into the drop zone. When you have finished, click on the submit button at the top of this page.",
    },
  },

  [NAMESPACE.tabs]: {
    [GROUP.default]: {
      fuel: "Fuel usage",
      electricity: "Electricity usage",
    },
  },

  [NAMESPACE.dropZone]: {
    [GROUP.default]: {
      dragAndDrop: "or drag and drop",
      fileTypes:
        ".csv, .doc, .docx, .eml, .gif, .jpg, .jpeg, .pdf, .msg, .pdf, .png, .txt, .xls, .xlsx files",
      uploadButton: "Click to upload",
      removeButton: "Click to remove",
      fileName: "File: {{fileName}}",
    },
    [GROUP.toaster]: {
      fileCount: "Please upload max. one file for each tab",
      fileTypes:
        "Only files with the following extensions are permitted: {{fileTypes}}",
      validFile: "{{fileName}} is ready to upload",
    },
  },

  [NAMESPACE.fileUploadFunction]: {
    [GROUP.toaster]: {
      success_one: "{{count}} file uploaded successfully",
      success_other: "{{count}} files uploaded successfully",
    },
  },
};
