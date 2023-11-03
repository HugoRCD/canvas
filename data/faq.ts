export type Faq = {
  title: {
    en: string;
    fr: string;
  };
  faq: {
    title: {
      en: string;
      fr: string;
    };
    content: {
      en: string;
      fr: string;
    };
  }[];
};

export const services: Faq = {
  title: {
    en: "Services",
    fr: "Services",
  },
  faq: [
    {
      title: {
        en: "What services do you offer?",
        fr: "Quels services je propose?",
      },
      content: {
        fr: "Je propose principalement des services de développement web et mobile, mais aussi de design et de consulting web. Mon objectif est de vous aider à créer des produits de qualité, qui répondent à vos besoins et à ceux de vos utilisateurs.",
        en: "I mainly offer web and mobile development services, but also web design and consulting. My goal is to help you create quality products that meet your needs and those of your users.",
      },
    },
    {
      title: {
        fr: "Peux-tu m'aider à apprendre à faire un site web?",
        en: "Can you teach me how to make a website?",
      },
      content: {
        fr: "Je ne propose pas de cours pour le moment, mais je peux vous recommander des ressources et conseils pour vous orienter au mieux dans votre apprentissage.",
        en: "I don't offer courses at the moment, but I can recommend resources and advice to help you get the most out of your learning.",
      },
    },
  ],
};

export const pricing: Faq = {
  title: {
    en: "Pricing",
    fr: "Tarification",
  },
  faq: [
    {
      title: {
        en: "How much does a project cost?",
        fr: "Combien coûte un projet?",
      },
      content: {
        en: "The cost of a project depends on many factors, such as the size of the project, the features, the development time, etc. The initial amount of my web services starts at 2000€, with an average between 3000€ and 10000€. For any other design or consulting service, I usually charge 450€ per day.",
        fr: "Le coût d'un projet dépend de nombreux facteurs, tels que la taille du projet, les fonctionnalités, le temps de développement, etc. Le montant initial de mes services web commence à 2000€, avec une moyenne comprise entre 3000€ et 10000€. Pour tout autre service de design ou de consulting, je facture généralement 450€ par jour.",
      },
    },
    {
      title: {
        en: "How does payment work for a project?",
        fr: "Comment fonctionne le paiement pour un projet?",
      },
      content: {
        en: "I ask for a 40% deposit before starting a project, and the remaining 60% after a successful delivery. I accept payments by bank transfer, PayPal, etc...",
        fr: "Je demande un acompte de 40% avant de commencer un projet, et les 60% restants après une livraison réussie. J'accepte les paiements par virement bancaire, PayPal, etc...",
      },
    },
    {
      title: {
        en: "How long does a project take?",
        fr: "Combien de temps dure un projet?",
      },
      content: {
        fr: "Il est difficile de donner une estimation précise, car chaque projet est différent, mais la majorité de mes travaux passés ont pris entre 2 semaines et 2 mois.",
        en: "It's hard to give an accurate estimate, because every project is different, but the majority of my past work has taken between 2 weeks and 2 months.",
      },
    },
    {
      title: {
        en: "Do you offer discounts?",
        fr: "Est-ce que je propose des réductions?",
      },
      content: {
        en: "I offer a 15% discount for students and non-profit organizations.",
        fr: "J'offre une réduction de 15% pour les étudiants et les organisations à but non lucratif.",
      },
    },
  ],
};

export const personal: Faq = {
  title: {
    en: "Personal",
    fr: "Personnel",
  },
  faq: [
    {
      title: {
        en: "What's your favourite thing about this work?",
        fr: "Qu'est-ce que tu préfères dans ce travail?",
      },
      content: {
        en: "I love to learn new things and to be able to create everything from scratch, create beautiful things that people will use and enjoy.",
        fr: "J'adore apprendre de nouvelles choses et pouvoir créer à peu près tout à partir de rien, créer de belles choses que les gens utiliseront et apprécieront.",
      },
    },
    {
      title: {
        en: "Any passions outside of work?",
        fr: "Des passions en dehors du travail?",
      },
      content: {
        en: "I love what I do, so I generally spend a lot of time working on personal projects, photography, etc. I'm also a huge sports addict. I go to the gym frequently, and I recently started climbing!",
        fr: "J'adore ce que je fais, donc je passe généralement beaucoup de temps à travailler sur des projets personnels, la photographie, etc. Je suis aussi un grand accro au sport. Je vais souvent à la salle de sport et j'ai récemment commencé l'escalade !",
      },
    },
  ],
};
