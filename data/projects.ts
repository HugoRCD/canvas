export type Project = {
  name: string;
  logo: string;
  description: {
    short: {
      en: string;
      fr: string;
    };
    long?: {
      en: string;
      fr: string;
    };
  };
  link: string | "soon";
  tags: string[];
  release: string;
  featured: boolean;
  color: string;
};

const projects: Project[] = [
  {
    name: "Sekoïa",
    logo: "SvgoSekoia",
    description: {
      short: {
        fr: "Marque d'ameublement et de décoration haut de gamme",
        en: "High-end furniture and decoration brand",
      },
    },
    link: "https://sekoia.studio/",
    release: "soon",
    featured: true,
    tags: [],
    color: "#3f3f3f",
  },
  {
    name: "Helpr",
    logo: "SvgoHelpr",
    description: {
      short: {
        fr: "Outils d'automatisation connectant diverses applications afin de créer de puissants workflows",
        en: "Automation tools connecting various applications to create powerful workflows",
      },
    },
    link: "https://helpr.tech/",
    release: "2023",
    featured: true,
    tags: ["Nuxt"],
    color: "#FFFFFF",
  },
  {
    name: "Maison Hochard",
    logo: "SvgoMaisonHochard",
    description: {
      short: {
        fr: "Agence de design graphique et de communication visuelle",
        en: "Graphic design and visual communication agency",
      },
    },
    link: "https://mh.hrcd.fr/",
    release: "2022",
    featured: true,
    tags: ["Design", "Graphic Design"],
    color: "#000",
  },
];

export default projects;
