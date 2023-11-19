export default defineNuxtConfig({
  app: {
    pageTransition: {
      name: "fade",
      mode: "out-in",
    },
  },

  routeRules: {
    "/": { isr: true, prerender: true },
  },

  css: ["~/assets/style/main.scss"],

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

  modules: ["nuxt-headlessui", "@vueuse/nuxt", "@nuxtjs/i18n", "@nuxt/ui", "nuxt-svgo", "@nuxt/content", "@nuxthq/studio", "@nuxt/image", "nuxt-og-image"],

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
    vueI18n: "~/i18n.config.ts",
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

  svgo: {
    autoImportPath: "./assets/logo/",
  },

  plugins: [{ src: "~/plugins/vercel.ts", mode: "client" }],
});
