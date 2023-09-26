type Stack = {
  name: string;
  link: string;
  tag: string;
  type: "software" | "languages";
  logo: string;
  description: {
    en: string;
    fr: string;
  };
};

const stack: Stack[] = [
  {
    name: "Nuxt",
    link: "https://nuxt.com/",
    tag: "development",
    type: "languages",
    logo: "SvgoNuxtColor",
    description: {
      en: "Nuxt is a Vue.js framework to create modern web applications.",
      fr: "Nuxt est un framework Vue.js pour créer des applications web modernes.",
    },
  },
  {
    name: "Vue",
    link: "https://vuejs.org/",
    tag: "development",
    type: "languages",
    logo: "SvgoVueColor",
    description: {
      en: "Vue is a progressive framework for building user interfaces.",
      fr: "Vue est un framework progressif pour construire des interfaces utilisateurs.",
    },
  },
  {
    name: "Nest",
    link: "https://nestjs.com/",
    tag: "development",
    type: "languages",
    logo: "SvgoNestColor",
    description: {
      en: "Nest is a framework for building efficient, scalable Node.js server-side applications.",
      fr: "Nest est un framework pour construire des applications Node.js côté serveur efficaces et évolutives.",
    },
  },
  {
    name: "TailwindCSS",
    link: "https://tailwindcss.com/",
    tag: "development",
    type: "languages",
    logo: "SvgoTailwindColor",
    description: {
      en: "TailwindCSS is a utility-first CSS framework for rapidly building custom designs.",
      fr: "TailwindCSS est un framework CSS de première utilité pour construire rapidement des designs personnalisés.",
    },
  },
  {
    name: "Linear",
    link: "https://linear.app/",
    tag: "development",
    type: "software",
    logo: "SvgoLinearColor",
    description: {
      en: "Linear is a project management tool for high-performance teams.",
      fr: "Linear est un outil de gestion de projet pour les équipes à haute performance.",
    },
  },
  {
    name: "Figma",
    link: "https://www.figma.com/",
    tag: "design",
    type: "software",
    logo: "SvgoFigmaColor",
    description: {
      en: "Figma is a collaborative interface design tool.",
      fr: "Figma est un outil de conception d'interface collaboratif.",
    },
  },
  {
    name: "Arc",
    link: "https://arc.net/",
    tag: "productivity",
    type: "software",
    logo: "SvgoArcColor",
    description: {
      en: "Arc is a tool to build and deploy serverless applications.",
      fr: "Arc est un outil pour construire et déployer des applications serverless.",
    },
  },
  {
    name: "Raycast",
    link: "https://raycast.com/",
    tag: "productivity",
    type: "software",
    logo: "SvgoRaycastColor",
    description: {
      en: "Raycast is an app for macOS to control your tools with a few keystrokes.",
      fr: "Raycast est une application pour macOS pour contrôler vos outils avec quelques frappes.",
    },
  },
  {
    name: "Notion",
    link: "https://www.notion.so/",
    tag: "productivity",
    type: "software",
    logo: "SvgoNotionColor",
    description: {
      en: "Notion is an all-in-one workspace for your notes, tasks, wikis, and databases.",
      fr: "Notion est un espace de travail tout-en-un pour vos notes, tâches, wikis et bases de données.",
    },
  },
  {
    name: "Cron",
    link: "https://calendar.cron.com/",
    tag: "productivity",
    type: "software",
    logo: "SvgoCronColor",
    description: {
      en: "Cron is a calendar app for your meetings.",
      fr: "Cron est une application de calendrier pour vos réunions.",
    },
  },
  {
    name: "IntelliJ IDEA",
    link: "https://www.jetbrains.com/idea/",
    tag: "development",
    type: "software",
    logo: "SvgoIntellijColor",
    description: {
      en: "IntelliJ IDEA is a Java integrated development environment.",
      fr: "IntelliJ IDEA est un environnement de développement intégré Java.",
    },
  },
  {
    name: "Prisma",
    link: "https://www.prisma.io/",
    tag: "development",
    type: "software",
    logo: "SvgoPrismaColor",
    description: {
      en: "Prisma is a database toolkit.",
      fr: "Prisma est une boîte à outils de base de données.",
    },
  },
];

export default stack;
