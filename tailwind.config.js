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
        main: "var(--main-color)",
        muted: "var(--muted)",
        inverted: "var(--inverted)",
        subheading: "var(--subheading)",
        "text-color": "var(--text-color)",
        accent: "var(--accent)",
        "accent-hover": "var(--accent-hover)",
        "accent-faded": "var(--accent-faded)",
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
