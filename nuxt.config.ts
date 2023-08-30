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
    "@nuxtjs/robots",
    "@tresjs/nuxt",
    "@nuxtjs/color-mode",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/web-vitals",
    "nuxt-svgo",
    "@nuxt/content",
    "@nuxthq/studio",
    "@nuxt/image",
  ],

  image: {
    format: ["webp"],
    screens: {
      avatar: 96,
      cover: 256,
    },
  },

  colorMode: {
    preference: "dark",
    fallback: "dark",
    classSuffix: "",
    storageKey: "hr-folio-color-mode",
  },

  i18n: {
    strategy: "no_prefix",
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

  nitro: {
    prerender: {
      routes: ["/sitemap.xml"],
    },
  },

  content: {
    watch: {
      ws: {
        showURL: false,
      },
    },
  },

  buildModules: ["@nuxt/image"],

  robots: {
    UserAgent: "*",
    Disallow: "",
  },

  svgo: {
    autoImportPath: "./assets/logo/",
  },

  plugins: [{ src: "~/plugins/vercel.ts", mode: "client" }],
});
