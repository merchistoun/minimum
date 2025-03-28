import { GROUP, NAMESPACE } from "./model";

// Default translations: Croatian

export default {
  [NAMESPACE.settingsPanel]: {
    [GROUP.default]: {
      lightMode: "Svijetli način",
      darkMode: "Tamni način",
    },
  },

  [NAMESPACE.titlePanel]: {
    [GROUP.default]: {
      title: "Energetski prijenosi",
      uploadButton: "Prenesi",
    },
  },

  [NAMESPACE.infoPanel]: {
    [GROUP.default]: {
      title: "Upute",
      instructions:
        "Odaberite svaku karticu ispod i povucite datoteku u zonu za prijenos. Kada završite, kliknite na gumb za prijenos na vrhu ove stranice.",
    },
  },

  [NAMESPACE.tabs]: {
    [GROUP.default]: {
      fuel: "Potrošnja goriva",
      electricity: "Potrošnja električne energije",
    },
  },

  [NAMESPACE.dropZone]: {
    [GROUP.default]: {
      label: "Prenesi datoteku",
      dragAndDrop: "ili povucite i ispustite",
      fileTypes:
        ".csv, .doc, .docx, .eml, .gif, .jpg, .jpeg, .pdf, .msg, .pdf, .png, .txt, .xls, .xlsx datoteke",
      uploadButton: "Kliknite za prijenos",
      removeButton: "Kliknite za uklanjanje",
      fileName: "Datoteka: {{fileName}}",
    },
    [GROUP.toaster]: {
      fileCount: "Molimo prenesite najviše jednu datoteku za svaku karticu",
      fileTypes:
        "Dopuštene su samo datoteke sa sljedećim ekstenzijama: {{fileTypes}}",
      validFile: "{{fileName}} je spremna za prijenos",
    },
  },

  [NAMESPACE.fileUploadFunction]: {
    [GROUP.toaster]: {
      success_one: "{{count}} datoteka uspješno prenesena",
      success_other: "{{count}} datoteka uspješno preneseno",
    },
  },
};
