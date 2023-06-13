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

  modules: [
    "@nuxtjs/i18n",
    "@pinia/nuxt",
    "nuxt-headlessui",
    "nuxt-mailer",
  ],

  i18n: {
    vueI18n: {
      legacy: false,
      locale: "en",
      fallbackLocale: "en",
      availableLocales: ["en", "fr"],
      messages: messages,
    },
  },

  plugins: [{ src: "~/plugins/vercel.ts", mode: "client" }],

  tailwindcss: {
    cssPath: "~/assets/style/main.scss",
    config: {
      content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
        "./app.vue",
        "./error.vue",
      ],
      theme: {
        extend: {},
      },
      plugins: [],
    },
  },
});
