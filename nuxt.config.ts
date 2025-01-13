export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@nuxtjs/i18n',
    '@nuxt/ui',
    '@nuxt/content',
    '@nuxt/image',
    'nuxt-og-image',
    '@nuxt/fonts',
    '@nuxt/scripts',
  ],

  imports: {
    presets: [
      {
        from: 'vue-sonner',
        imports: ['toast'],
      },
    ],
  },

  devtools: {
    enabled: true,
  },

  css: ['~/assets/style/main.css'],

  site: {
    url: 'https://canvas.hrcd.fr',
    defaultLocale: 'en',
    indexable: true,
  },

  colorMode: {
    preference: 'dark',
    fallback: 'dark',
  },

  content: {
    renderer: {
      anchorLinks: false,
    },
    studio: {
      enabled: true,
      dev: true,
    },
  },

  mdc: {
    highlight: {
      theme: {
        dark: 'github-dark',
        default: 'github-dark',
        light: 'github-light',
      },
    },
  },

  runtimeConfig: {
    public: {
      available: process.env.NUXT_PUBLIC_AVAILABLE,
      meetingLink: process.env.NUXT_PUBLIC_MEETING_LINK,
    },
    private: {
      resendApiKey: process.env.NUXT_PRIVATE_RESEND_API_KEY,
    },
  },

  routeRules: {
    '/': { isr: true, prerender: true },
  },

  future: {
    compatibilityVersion: 4,
  },

  experimental: {
    viewTransition: true,
  },

  compatibilityDate: '2025-01-05',

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/writing', '/works', '/about', '/contact'],
    },
  },

  i18n: {
    locales: [
      { code: 'en', name: 'English', language: 'en-US', dir: 'ltr' },
      { code: 'fr', name: 'French', language: 'fr-FR' },
    ],
    strategy: 'prefix_except_default',
    defaultLocale: 'en',
    vueI18n: '~/i18n.config.ts',
  },

  icon: {
    customCollections: [
      {
        prefix: 'custom',
        dir: './app/assets/icons',
      },
    ],
    clientBundle: {
      scan: true,
      includeCustomCollections: true,
    },
    provider: 'iconify',
  },
})
