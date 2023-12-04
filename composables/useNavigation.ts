import { HomeIcon, BriefcaseIcon, UserIcon, EnvelopeIcon, PencilIcon } from "@heroicons/vue/24/outline";
import { type FunctionalComponent } from "vue";

type Where = "home" | "app";

export type Navigation = {
  name: string;
  to: string;
  icon: FunctionalComponent;
};

export function getNavigation(where: Where): Record<string, Navigation> | [] {
  switch (where) {
    case "home":
      return {
        home: {
          name: "Home",
          to: "/",
          icon: HomeIcon,
        },
        works: {
          name: "Works",
          to: "/works",
          icon: BriefcaseIcon,
        },
        writing: {
          name: "Writing",
          to: "/writing",
          icon: PencilIcon,
        },
        about: {
          name: "About",
          to: "/about",
          icon: UserIcon,
        },
        contact: {
          name: "Contact",
          to: "/contact",
          icon: EnvelopeIcon,
        },
      };
    default:
      return [];
  }
}
