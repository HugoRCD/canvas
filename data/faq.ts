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

export const servicesAndToolstack: Faq = {
  title: {
    en: "Services and toolstack",
    fr: "Services et outils",
  },
  faq: [
    {
      title: {
        en: "What services do you offer?",
        fr: "Quels services offrez-vous?",
      },
      content: {
        en: "We offer a wide range of services, from web development to mobile development, including design and consulting. You can find more information on our services page.",
        fr: "Nous offrons une large gamme de services, du développement web au développement mobile, en passant par le design et le consulting. Vous pouvez trouver plus d'informations sur notre page services.",
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
        en: "How much does it cost?",
        fr: "Combien ça coûte?",
      },
      content: {
        en: "We offer a wide range of services, from web development to mobile development, including design and consulting. You can find more information on our services page.",
        fr: "Nous offrons une large gamme de services, du développement web au développement mobile, en passant par le design et le consulting. Vous pouvez trouver plus d'informations sur notre page services.",
      },
    },
  ],
};
