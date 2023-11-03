import messages from "~/locales/messages";

export default defineI18nConfig(() => ({
  legacy: false,
  locale: "en",
  fallbackLocale: "en",
  availableLocales: ["en", "fr"],
  messages: messages,
}));
