function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
    "./error.vue",
    "./**/*.svg",
  ],
  theme: {
    extend: {
      colors: {
        main: "var(--bg-main)",
        "main-opacity": withOpacity("--bg-main-opacity"),
        secondary: "var(--bg-secondary)",
        card: "var(--bg-card)",
        "card-hover": "var(--bg-card-hover)",
        accent: withOpacity("--accent-color"),
        "accent-hover": withOpacity("--accent-color-hover"),
        "accent-faded": "var(--accent-color-faded)",
        muted: "var(--font-muted)",
        placeholder: "var(--font-placeholder)",
      },
      textColor: {
        main: "var(--font-primary)",
        muted: "var(--font-muted)",
        placeholder: "var(--font-placeholder)",
        inverted: "var(--font-inverted)",
        accent: withOpacity("--accent-color"),
        "accent-hover": withOpacity("--accent-color-hover"),
      },
      borderColor: {
        primary: "var(--border-primary)",
        "primary-hover": "var(--border-primary-hover)",
        muted: "var(--border-muted)",
        accent: withOpacity("--accent-color"),
        "accent-faded": "var(--accent-color-faded)",
        transparent: "transparent",
      },
      gradientColorStops: {
        "accent-primary": "var(--accent-primary)",
        "accent-secondary": "var(--accent-secondary)",
      },
      borderWidth: {
        sm: "1px",
        md: "2px",
      },
      animation: {
        loop: "loop 10s linear infinite",
      },
      keyframes: {
        loop: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-50% - var(--gap)/2))" },
        },
      },
      textShadow: {
        sm: "rgba(255, 255, 255, 0.35) 1px 1px 12px",
      },
    },
  },
  plugins: [
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") },
      );
    },
  ],
};
