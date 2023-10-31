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

  routeRules: {
    "/": { isr: true, prerender: true },
    "/articles": { ssr: false },
  },

  css: ["~/assets/style/main.scss"],

  imports: {
    dirs: ["store"],
  },

  runtimeConfig: {
    public: {
      available: process.env.AVAILABLE,
      meetingLink: process.env.MEETING_LINK,
    },
    private: {
      resendApiKey: process.env.RESEND_API_KEY,
      openAiKey: process.env.OPENAI_API_KEY,
      apiKey: process.env.LINEAR_API_KEY,
    },
  },

  devtools: { enabled: true },

  modules: [
    "nuxt-headlessui",
    "@vueuse/nuxt",
    "@nuxtjs/i18n",
    "@pinia/nuxt",
    "@nuxt/ui",
    "nuxt-svgo",
    "@nuxt/content",
    "@nuxthq/studio",
    "@nuxt/image",
    "nuxt-time",
  ],

  image: {
    format: ["webp"],
    screens: {
      avatar: 96,
      cover: 256,
      project: 1536,
    },
  },

  /*colorMode: {
    preference: "dark",
    fallback: "dark",
    classSuffix: "",
    storageKey: "hr-folio-color-mode",
  },*/

  i18n: {
    strategy: "no_prefix",
    detectBrowserLanguage: {
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

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ["/sitemap.xml"],
    },
  },

  content: {
    watch: {
      ws: {
        showURL: false,
      },
    },
    navigation: {
      fields: ["image", "_id"],
    },
    markdown: {
      anchorLinks: false,
    },
    locales: ["en", "fr"],
    defaultLocale: "en",
  },

  buildModules: ["@nuxt/image"],

  svgo: {
    autoImportPath: "./assets/logo/",
  },

  plugins: [{ src: "~/plugins/vercel.ts", mode: "client" }],
});
