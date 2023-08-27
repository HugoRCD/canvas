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
    "/**": { isr: 60, prerender: true },
  },

  css: ["~/assets/style/main.scss"],

  imports: {
    dirs: ["store"],
  },

  runtimeConfig: {
    public: {
      available: process.env.AVAILABLE,
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
  ],

  alias: {
    "micromark/lib/preprocess.js": "micromark",
    "micromark/lib/postprocess.js": "micromark",
  },

  colorMode: {
    preference: "dark",
    fallback: "dark",
    classSuffix: "",
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

  nitro: {
    prerender: {
      routes: ["/sitemap.xml"],
    },
  },

  robots: {
    UserAgent: "*",
    Disallow: "",
  },

  svgo: {
    autoImportPath: "./assets/logo/",
  },

  plugins: [{ src: "~/plugins/vercel.ts", mode: "client" }],
});
