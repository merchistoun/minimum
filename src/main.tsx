import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./components";
import "./styles/global.css";

// Initialize i18n
import initializeTranslation from "./localization";
const FALLBACK_LOCALE = "en";
(async () => {
  await initializeTranslation(
    localStorage.getItem("userLanguage") ||
      navigator.language ||
      FALLBACK_LOCALE
  );
})();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
