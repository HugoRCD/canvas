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
      fr: "Nuxt est un framework Vue.js, mon framework préféré qui m'a fait redécouvrir le développement et l'apprècier encore plus !",
      en: "Nuxt is a Vue.js framework, my favorite framework that made me rediscover development and appreciate it even more!",
    },
  },
  {
    name: "Vue",
    link: "https://vuejs.org/",
    tag: "development",
    type: "languages",
    logo: "SvgoVueColor",
    description: {
      fr: "Vue est mon language de coeur qui m'a permis de découvrir le développement web, terriblement efficace et simple à utiliser.",
      en: "Vue is my heart language that allowed me to discover web development, terribly efficient and simple to use.",
    },
  },
  {
    name: "Nest",
    link: "https://nestjs.com/",
    tag: "development",
    type: "languages",
    logo: "SvgoNestColor",
    description: {
      fr: "Nest est un framework pour construire des API avec une architecture solide et modulaire.",
      en: "Nest is a framework for building APIs with a solid and modular architecture.",
    },
  },
  {
    name: "TailwindCSS",
    link: "https://tailwindcss.com/",
    tag: "development",
    type: "languages",
    logo: "SvgoTailwindColor",
    description: {
      fr: "TailwindCSS est un framework CSS qui me permet de gagner un temps fou dans le développement en simplifiant le CSS.",
      en: "TailwindCSS is a CSS framework that allows me to save a lot of time in development by simplifying CSS.",
    },
  },
  {
    name: "Linear",
    link: "https://linear.app/",
    tag: "development",
    type: "software",
    logo: "SvgoLinearColor",
    description: {
      fr: "Linear est probablement le meilleur outil de gestion de projet que j'ai jamais utilisé. Il est simple, incroyablement rapide et très puissant.",
      en: "Linear is probably the best project management tool I've ever used. It's simple, incredibly fast and very powerful.",
    },
  },
  {
    name: "Figma",
    link: "https://www.figma.com/",
    tag: "design",
    type: "software",
    logo: "SvgoFigmaColor",
    description: {
      fr: "Figma me permet de prototyper et de designer toutes mes idées et projets.",
      en: "Figma allows me to prototype and design all my ideas and projects.",
    },
  },
  {
    name: "Arc",
    link: "https://arc.net/",
    tag: "productivity",
    type: "software",
    logo: "SvgoArcColor",
    description: {
      fr: "Arc est le nouveau navigateur web, rapide, incroyablement bien conçu et avec des fonctionnalités incroyables.",
      en: "Arc is the new web browser, fast, incredibly well designed and with incredible features.",
    },
  },
  {
    name: "Raycast",
    link: "https://raycast.com/",
    tag: "productivity",
    type: "software",
    logo: "SvgoRaycastColor",
    description: {
      fr: "Raycast est ma révélation de l'année 2022. C'est un outil de productivité qui vous permet d'en remplacer des dizaines d'autres !",
      en: "Raycast is my revelation of the year 2022. It's a productivity tool that allows you to replace dozens of others!",
    },
  },
  {
    name: "Notion",
    link: "https://www.notion.so/",
    tag: "productivity",
    type: "software",
    logo: "SvgoNotionColor",
    description: {
      fr: "Notion est le meilleur outil que j'ai jamais utilisé, prise de notes, gestion de projet, gestion de tâches, etc. Il est tout simplement incroyable.",
      en: "Notion is the best tool I've ever used, note taking, project management, task management, etc. It's just amazing.",
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
      fr: "IntelliJ IDEA est tout simplement l'IDE le plus complet et le plus puissant pour le développement dans n'importe quel langage.",
      en: "IntelliJ IDEA is simply the most complete and powerful IDE for development in any language.",
    },
  },
  {
    name: "Prisma",
    link: "https://www.prisma.io/",
    tag: "development",
    type: "software",
    logo: "SvgoPrismaColor",
    description: {
      fr: "Prisma est un ORM très simple à utiliser et très puissant, avec un super support typescript et de migrations.",
      en: "Prisma is a very simple to use and very powerful ORM, with great typescript and migrations support.",
    },
  },
  {
    name: "Spark",
    link: "https://sparkmailapp.com/",
    tag: "productivity",
    type: "software",
    logo: "SvgoSparkColor",
    description: {
      fr: "Spark est une application de messagerie, super pratique pour gérer plusieurs boîtes mail, des templates de réponses, réponse avec IA, etc.",
      en: "Spark is a messaging application, super convenient to manage multiple mailboxes, response templates, AI response, etc.",
    },
  },
  {
    name: "1Password",
    link: "https://1password.com/",
    tag: "productivity",
    type: "software",
    logo: "SvgoOnepasswordColor",
    description: {
      fr: "1Password est un incroyable gestionnaire de mots de passe, il m'a permis de me débarrasser de tous mes mots de passe et de les remplacer par des mots de passe forts et uniques.",
      en: "1Password is an incredible password manager, it allowed me to get rid of all my passwords and replace them with strong and unique passwords.",
    },
  },
  {
    name: "Fig",
    link: "https://fig.io/",
    tag: "productivity",
    type: "software",
    logo: "SvgoFigColor",
    description: {
      fr: "Fig est un assistant de terminal intelligent qui vous aide à réduire le temps passé à taper des commandes dans votre terminal.",
      en: "Fig is an intelligent terminal assistant that helps you reduce time spent typing commands in your terminal.",
    },
  },
  {
    name: "Vercel",
    link: "https://vercel.com/",
    tag: "development",
    type: "software",
    logo: "SvgoVercel",
    description: {
      fr: "Vercel permet de déployer des sites/applications gratuitement et très rapidement.",
      en: "Vercel allows you to deploy sites/applications for free and very quickly.",
    },
  },
  {
    name: "Photoshop",
    link: "https://www.adobe.com/products/photoshop.html",
    tag: "design",
    type: "software",
    logo: "SvgoPhotoshopColor",
    description: {
      fr: "Photoshop est un logiciel de retouche d'image, il me permet de créer des visuels pour mes projets.",
      en: "Photoshop is an image editing software, it allows me to create visuals for my projects.",
    },
  },
  {
    name: "Illustrator",
    link: "https://www.adobe.com/products/illustrator.html",
    tag: "design",
    type: "software",
    logo: "SvgoIllustratorColor",
    description: {
      fr: "Illustrator est un logiciel de création vectorielle, il me permet de créer des visuels pour mes projets.",
      en: "Illustrator is a vector creation software, it allows me to create visuals for my projects.",
    },
  },
  {
    name: "Lightroom",
    link: "https://www.adobe.com/products/photoshop-lightroom.html",
    tag: "design",
    type: "software",
    logo: "SvgoLightroomColor",
    description: {
      fr: "Lightroom est un logiciel de retouche photo, il me permet de retoucher mes photos.",
      en: "Lightroom is a photo editing software, it allows me to edit my photos.",
    },
  },
];

export default stack;
