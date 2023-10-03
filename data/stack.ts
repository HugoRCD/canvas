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
      en: "Currently using Linear as a project management tool. It's a beautiful and practical tool.",
      fr: "J'utilise Linear, un outil de gestion de projet magnifique et pratique.",
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
      en: "Arc is the new kid in the block. If you enjoy an innovative frameless browser experience you definitely should give it a try!",
      fr: "Arc est le petit nouveau du quartier. Si vous aimez une expérience de navigation innovante sans cadre, vous devriez certainement l'essayer !",
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
      en: "It's a calendar application based on Gmail. Wonderful UI and a handful of very useful additional features. Highly recommend trying it!",
      fr: "Calendrier basée sur Gmail. Une interface utilisateur magnifique et une poignée de fonctionnalités supplémentaires très utiles. Je recommande vivement de l'essayer !",
    },
  },
  {
    name: "IntelliJ IDEA",
    link: "https://www.jetbrains.com/idea/",
    tag: "development",
    type: "software",
    logo: "SvgoIntellijColor",
    description: {
      en: "IntelliJ IDEA is simply the most complete IDE.",
      fr: "IntelliJ IDEA est tout simplement l'IDE le plus complet.",
    },
  },
  {
    name: "Prisma",
    link: "https://www.prisma.io/",
    tag: "development",
    type: "software",
    logo: "SvgoPrismaColor",
    description: {
      en: "Prisma is a wonderful and blazing fast database ORM, it's a must-have for any project.",
      fr: "Prisma est un ORM de base de données merveilleux et ultra-rapide, c'est un must-have pour tout projet.",
    },
  },
  {
    name: "Spark",
    link: "https://sparkmailapp.com/",
    tag: "productivity",
    type: "software",
    logo: "SvgoSparkColor",
    description: {
      en: "Spark is a beautiful and intelligent email client.",
      fr: "Spark est un client de messagerie électronique beau et intelligent.",
    },
  },
  {
    name: "1Password",
    link: "https://1password.com/",
    tag: "productivity",
    type: "software",
    logo: "SvgoOnepasswordColor",
    description: {
      en: "1Password is a password manager that keeps you safe online.",
      fr: "1Password est un gestionnaire de mots de passe qui vous protège en ligne.",
    },
  },
  {
    name: "Fig",
    link: "https://fig.io/",
    tag: "productivity",
    type: "software",
    logo: "SvgoFigColor",
    description: {
      en: "Fig is a terminal assistant that helps you rediscover CLI tools.",
      fr: "Fig est un assistant de terminal qui vous aide à redécouvrir les outils CLI.",
    },
  },
  {
    name: "Vercel",
    link: "https://vercel.com/",
    tag: "development",
    type: "software",
    logo: "SvgoVercel",
    description: {
      en: "Vercel is a cloud platform for static sites and Serverless Functions.",
      fr: "Vercel est une plateforme cloud pour les sites statiques et les fonctions sans serveur.",
    },
  },
];

export default stack;
