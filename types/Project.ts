export type Project = {
  name: string;
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
};
