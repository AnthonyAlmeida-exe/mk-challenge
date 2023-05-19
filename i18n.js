import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Importe os arquivos de tradução
import translationEN from "./locales/en.json";
import translationPT from "./locales/pt.json";

// Configuração do i18n
i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: translationEN,
    },
    pt: {
      translation: translationPT,
    },
  },
  lng: "pt", // Idioma padrão
  fallbackLng: "en", // Idioma de fallback (caso o idioma solicitado não esteja disponível)
  interpolation: {
    escapeValue: false, // Permite que você insira códigos HTML nos textos traduzidos
  },
});

export default i18n;
