import { GROUP, NAMESPACE } from "./model";

// Default translations: French

export default {
  [NAMESPACE.settingsPanel]: {
    [GROUP.default]: {
      lightMode: "Mode clair",
      darkMode: "Mode sombre",
    },
  },

  [NAMESPACE.titlePanel]: {
    [GROUP.default]: {
      title: "Téléchargements d'énergie",
      uploadButton: "Télécharger",
    },
  },

  [NAMESPACE.infoPanel]: {
    [GROUP.default]: {
      title: "Instructions",
      instructions:
        "Sélectionnez chaque onglet ci-dessous et déposez un fichier dans la zone de dépôt. Lorsque vous avez terminé, cliquez sur le bouton de téléchargement en haut de cette page.",
    },
  },

  [NAMESPACE.tabs]: {
    [GROUP.default]: {
      fuel: "Utilisation de carburant",
      electricity: "Utilisation d'électricité",
    },
  },

  [NAMESPACE.dropZone]: {
    [GROUP.default]: {
      label: "Télécharger un fichier",
      dragAndDrop: "ou glissez-déposez",
      fileTypes:
        "Fichiers .csv, .doc, .docx, .eml, .gif, .jpg, .jpeg, .pdf, .msg, .pdf, .png, .txt, .xls, .xlsx",
      uploadButton: "Cliquez pour télécharger",
      removeButton: "Cliquez pour supprimer",
      fileName: "Fichier : {{fileName}}",
    },
    [GROUP.toaster]: {
      fileCount: "Veuillez télécharger un maximum d'un fichier par onglet",
      fileTypes:
        "Seuls les fichiers avec les extensions suivantes sont autorisés : {{fileTypes}}",
      validFile: "{{fileName}} est prêt à être téléchargé",
    },
  },

  [NAMESPACE.fileUploadFunction]: {
    [GROUP.toaster]: {
      success_one: "{{count}} fichier téléchargé avec succès",
      success_other: "{{count}} fichiers téléchargés avec succès",
    },
  },
};
