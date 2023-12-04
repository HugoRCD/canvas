export default defineNuxtConfig({
  app: {
    head: {
      viewport: "width=device-width, initial-scale=1",
      charset: "utf-8",
      meta: [
        {
          name: "author",
          content: "Hugo Richard",
        },
      ],
    },
    pageTransition: {
      name: "fade",
      mode: "out-in",
    },
  },

  routeRules: {
    "/": { isr: true, prerender: true },
  },

  site: {
    url: process.env.NUXT_SITE_URL || "https://hrcd.fr",
    identity: {
      type: "Person",
    },
    twitter: "@HugoRCD__",
  },

  css: ["~/assets/style/main.scss"],

  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_SITE_URL,
      available: process.env.AVAILABLE,
      meetingLink: process.env.MEETING_LINK,
    },
    private: {
      resendApiKey: process.env.RESEND_API_KEY,
      openAiKey: process.env.OPENAI_API_KEY,
      apiKey: process.env.LINEAR_API_KEY,
    },
  },

  colorMode: {
    preference: "dark",
    fallback: "dark",
  },

  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },

  modules: ["nuxt-headlessui", "@vueuse/nuxt", "@nuxtjs/i18n", "@nuxt/ui", "nuxt-svgo", "@nuxt/content", "@nuxthq/studio", "@nuxt/image", "nuxt-og-image"],

  image: {
    format: ["webp"],
    screens: {
      avatar: 96,
      cover: 256,
      project: 1536,
    },
  },

  i18n: {
    strategy: "prefix_except_default",
    defaultLocale: "en",
    customRoutes: "config",
    pages: {
      "articles/[slug]": {
        en: "/articles/[slug]",
        fr: "/articles/[slug]",
      },
    },
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
