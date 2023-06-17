import messages from "./locales/messages";

export default defineNuxtConfig({
  app: {
    layoutTransition: {
      name: "fade",
      mode: "out-in",
    },
    pageTransition: {
      name: "fade",
      mode: "out-in",
    },
  },

  css: ["~/assets/style/main.scss"],

  imports: {
    dirs: ["store"],
  },

  devtools: { enabled: true },

  modules: ["nuxt-headlessui", "@vueuse/nuxt", "@nuxtjs/i18n", "@pinia/nuxt", "nuxt-mailer", "@nuxthq/ui", "@nuxtjs/robots"],

  colorMode: {
    preference: "system",
    fallback: "dark",
    storageKey: "hr-folio-color-mode",
  },

  i18n: {
    detectBrowserLanguage: {
      alwaysRedirect: true,
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
    },
    locales: [
      {
        code: "en",
        iso: "en-US",
      },
      {
        code: "fr",
        iso: "fr-FR",
      },
    ],
    baseUrl: "https://hrcd.fr",
    vueI18n: {
      legacy: false,
      locale: "en",
      fallbackLocale: "en",
      availableLocales: ["en", "fr"],
      messages: messages,
    },
  },

  robots: {
    UserAgent: "*",
    Disallow: "",
  },

  plugins: [{ src: "~/plugins/vercel.ts", mode: "client" }],
});
