export default defineAppConfig({
  appName: "HR Folio",
  appDescription: "2023 Hugo Richard Portfolio",
  appVersion: "1.0.0",
  ui: {
    primary: "emerald",
    gray: "zinc",
    notifications: {
      position: "top-0 bottom-auto",
    },
    notification: {
      progress: {
        base: "absolute bottom-0 end-0 start-0 h-0",
        background: "bg-transparent dark:bg-transparent",
      },
    },
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
