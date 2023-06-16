module.exports = {
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
    extend: {
      colors: {
        accent: "var(--accent-color)",
        "accent-color-hover": "var(--accent-color-hover)",
        "accent-color-faded": "var(--accent-color-faded)",
      },
      gradientColorStops: {
        "accent-main": "var(--accent-main)",
        "accent-secondary": "var(--accent-secondary)",
      },
      borderWidth: {
        sm: "1px",
        md: "2px",
      },
    },
  },
  plugins: [],
};