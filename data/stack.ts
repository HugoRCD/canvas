export type Stack = {
  name: string;
  link: string;
  tags: string[];
  logo: string;
  description: {
    en: string;
    fr: string;
  };
};

export const techStack: Stack[] = [
  {
    name: 'Nuxt',
    link: 'https://nuxt.com/',
    tags: ['framework'],
    logo: 'SvgoNuxtColor',
    description: {
      fr: 'Nuxt est un framework Vue.js, mon framework préféré qui m\'a fait redécouvrir le développement et l\'apprècier encore plus !',
      en: 'Nuxt is a Vue.js framework, my favorite framework that made me rediscover development and appreciate it even more!',
    },
  },
  {
    name: 'Vue',
    link: 'https://vuejs.org/',
    tags: ['framework'],
    logo: 'SvgoVueColor',
    description: {
      fr: 'Vue est mon language de coeur qui m\'a permis de découvrir le développement web, terriblement efficace et simple à utiliser.',
      en: 'Vue is my heart language that allowed me to discover web development, terribly efficient and simple to use.',
    },
  },
  {
    name: 'Nest',
    link: 'https://nestjs.com/',
    tags: ['framework'],
    logo: 'SvgoNestColor',
    description: {
      fr: 'Nest est un framework pour construire des API avec une architecture solide et modulaire.',
      en: 'Nest is a framework for building APIs with a solid and modular architecture.',
    },
  },
  {
    name: 'TailwindCSS',
    link: 'https://tailwindcss.com/',
    tags: ['css'],
    logo: 'SvgoTailwindColor',
    description: {
      fr: 'TailwindCSS est un framework CSS qui me permet de gagner un temps fou dans le développement en simplifiant le CSS.',
      en: 'TailwindCSS is a CSS framework that allows me to save a lot of time in development by simplifying CSS.',
    },
  },
  {
    name: 'Prisma',
    link: 'https://www.prisma.io/',
    tags: ['database', 'orm'],
    logo: 'SvgoPrismaColor',
    description: {
      fr: 'Prisma est un ORM très simple à utiliser et très puissant, avec un super support typescript et de migrations.',
      en: 'Prisma is a very simple to use and very powerful ORM, with great typescript and migrations support.',
    },
  },
  {
    name: 'Vercel',
    link: 'https://vercel.com/',
    tags: ['deployment'],
    logo: 'SvgoVercel',
    description: {
      fr: 'Vercel permet de déployer des sites/applications gratuitement et très rapidement.',
      en: 'Vercel allows you to deploy sites/applications for free and very quickly.',
    },
  },
]

export const productivityStack: Stack[] = [
  {
    name: 'Linear',
    link: 'https://linear.app/',
    tags: ['task_manager'],
    logo: 'SvgoLinearColor',
    description: {
      fr: 'Linear est probablement le meilleur outil de gestion de projet que j\'ai jamais utilisé. Il est simple, incroyablement rapide et très puissant.',
      en: 'Linear is probably the best project management tool I\'ve ever used. It\'s simple, incredibly fast and very powerful.',
    },
  },
  {
    name: 'Arc',
    link: 'https://arc.net/',
    tags: ['browser'],
    logo: 'SvgoArcColor',
    description: {
      fr: 'Arc est le nouveau navigateur web, rapide, incroyablement bien conçu et avec des fonctionnalités incroyables.',
      en: 'Arc is the new web browser, fast, incredibly well designed and with incredible features.',
    },
  },
  {
    name: 'Raycast',
    link: 'https://raycast.com/',
    tags: ['productivity'],
    logo: 'SvgoRaycastColor',
    description: {
      fr: 'Raycast est ma révélation de l\'année 2022. C\'est un outil de productivité qui vous permet d\'en remplacer des dizaines d\'autres !',
      en: 'Raycast is my revelation of the year 2022. It\'s a productivity tool that allows you to replace dozens of others!',
    },
  },
  {
    name: 'Notion',
    link: 'https://www.notion.so/',
    tags: ['notes'],
    logo: 'SvgoNotionColor',
    description: {
      fr: 'Notion est le meilleur outil que j\'ai jamais utilisé, prise de notes, gestion de projet, gestion de tâches, etc. Il est tout simplement incroyable.',
      en: 'Notion is the best tool I\'ve ever used, note taking, project management, task management, etc. It\'s just amazing.',
    },
  },
  {
    name: 'Cron',
    link: 'https://calendar.cron.com/',
    tags: ['calendar'],
    logo: 'SvgoCronColor',
    description: {
      en: 'It\'s a calendar application based on Gmail. Wonderful UI and a handful of very useful additional features. Highly recommend trying it!',
      fr: 'Calendrier basée sur Gmail. Une interface utilisateur magnifique et une poignée de fonctionnalités supplémentaires très utiles. Je recommande vivement de l\'essayer !',
    },
  },
  {
    name: 'Spark',
    link: 'https://sparkmailapp.com/',
    tags: ['mail'],
    logo: 'SvgoSparkColor',
    description: {
      fr: 'Spark est une application de messagerie, super pratique pour gérer plusieurs boîtes mail, des templates de réponses, réponse avec IA, etc.',
      en: 'Spark is a messaging application, super convenient to manage multiple mailboxes, response templates, AI response, etc.',
    },
  },
  {
    name: '1Password',
    link: 'https://1password.com/',
    tags: ['password_manager'],
    logo: 'SvgoOnepasswordColor',
    description: {
      fr: '1Password est un incroyable gestionnaire de mots de passe, il m\'a permis de me débarrasser de tous mes mots de passe et de les remplacer par des mots de passe forts et uniques.',
      en: '1Password is an incredible password manager, it allowed me to get rid of all my passwords and replace them with strong and unique passwords.',
    },
  },
  {
    name: 'Fig',
    link: 'https://fig.io/',
    tags: ['terminal'],
    logo: 'SvgoFigColor',
    description: {
      fr: 'Fig est un assistant de terminal intelligent qui vous aide à réduire le temps passé à taper des commandes dans votre terminal.',
      en: 'Fig is an intelligent terminal assistant that helps you reduce time spent typing commands in your terminal.',
    },
  },
]

export const designStack: Stack[] = [
  {
    name: 'Figma',
    link: 'https://www.figma.com/',
    tags: ['prototyping'],
    logo: 'SvgoFigmaColor',
    description: {
      fr: 'Figma me permet de prototyper et de designer toutes mes idées et projets.',
      en: 'Figma allows me to prototype and design all my ideas and projects.',
    },
  },
  {
    name: 'Photoshop',
    link: 'https://www.adobe.com/products/photoshop.html',
    tags: ['illustration'],
    logo: 'SvgoPhotoshopColor',
    description: {
      fr: 'Le meilleur logiciel pour créer de sublimes mockups, designs, etc...',
      en: 'The best software to create beautiful mockups, designs, etc...',
    },
  },
  {
    name: 'Illustrator',
    link: 'https://www.adobe.com/products/illustrator.html',
    tags: ['illustration', 'logo', 'graphic_design'],
    logo: 'SvgoIllustratorColor',
    description: {
      fr: 'Illustrator me permet de créer tous les logos et illustrations de mes projets.',
      en: 'Illustrator allows me to create all the logos and illustrations of my projects.',
    },
  },
  {
    name: 'Lightroom',
    link: 'https://www.adobe.com/products/photoshop-lightroom.html',
    tags: ['retouching', 'photography'],
    logo: 'SvgoLightroomColor',
    description: {
      fr: 'Si vous aimez la photographie, Lightroom est le meilleur logiciel pour retoucher, organiser et partager vos photos.',
      en: 'If you like photography, Lightroom is the best software to edit, organize and share your photos.',
    },
  },
]
