import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const i18nForTests = i18n;

i18nForTests.use(initReactI18next).init({
  lng: "ru",
  fallbackLng: "ru",

  // have a common namespace used around the full app
  ns: ["translationsNS"],
  defaultNS: "translationsNS",

  debug: false,

  interpolation: {
    escapeValue: false, // not needed for react!!
  },

  resources: { ru: { translationsNS: {} } },
});

export default i18nForTests;
