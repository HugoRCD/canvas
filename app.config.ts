export default defineAppConfig({
  appName: "HR Folio",
  appDescription: "2023 Hugo Richard Portfolio",
  appVersion: "1.0.0",
  ui: {
    primary: "emerald",
    gray: "zinc",
    input: {
      variant: {
        none: "bg-gray-100 dark:bg-gray-900 border-1 border-gray-700 hover:border-gray-400 focus:border-gray-400 transition-colors duration-300 ease-in-out",
      },
    },
    textarea: {
      variant: {
        none: "bg-gray-100 dark:bg-gray-900 border-1 border-gray-700 hover:border-gray-400 focus:border-gray-400 transition-colors duration-300 ease-in-out",
      },
    },
  },
  socials: {
    github: "https://github.com/HugoRCD",
    linkedin: "https://www.linkedin.com/in/hugo-richard-0801",
    instagram: "https://www.instagram.com/hugo.rcd_",
  },
});
