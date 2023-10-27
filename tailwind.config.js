import plugin from "tailwindcss/plugin";
import { flattenColorPalette } from "tailwindcss/lib/util/flattenColorPalette";
import svgToDataUri from "mini-svg-data-uri";

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
        marquee: "marquee 30s linear infinite",
      },

      keyframes: {
        marquee: {
          to: { transform: "translateX(-50%)" },
        },
      },

      textShadow: {
        sm: "rgba(255, 255, 255, 0.35) 1px 1px 12px",
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") },
      );
      matchUtilities(
        {
          "bg-grid": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" stroke="${value}" fill="none"><path d="M64 0H0V64"/></svg>`,
            )}")`,
          }),
        },
        {
          values: flattenColorPalette(theme("backgroundColor")),
          type: ["color"],
        },
      );
      matchUtilities(
        {
          "bg-grid": (value) => ({
            backgroundSize: value,
          }),
        },
        {
          values: theme("spacing"),
          type: ["number", "length", "any"],
        },
      );
    }),
  ],
};
