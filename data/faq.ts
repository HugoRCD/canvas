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

export const personnal: Faq = {
  title: {
    en: "Personnal",
    fr: "Personnel",
  },
  faq: [
    {
      title: {
        en: "Who are you?",
        fr: "Qui êtes-vous?",
      },
      content: {
        en: "We offer a wide range of services, from web development to mobile development, including design and consulting. You can find more information on our services page.",
        fr: "Nous offrons une large gamme de services, du développement web au développement mobile, en passant par le design et le consulting. Vous pouvez trouver plus d'informations sur notre page services.",
      },
    },
    {
      title: {
        en: "What is your mission?",
        fr: "Quelle est votre mission?",
      },
      content: {
        en: "We offer a wide range of services, from web development to mobile development, including design and consulting. You can find more information on our services page.",
        fr: "Nous offrons une large gamme de services, du développement web au développement mobile, en passant par le design et le consulting. Vous pouvez trouver plus d'informations sur notre page services.",
      },
    },
  ],
};
