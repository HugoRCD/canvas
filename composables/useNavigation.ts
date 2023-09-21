import { HomeIcon, BriefcaseIcon, UserIcon, EnvelopeIcon, PencilIcon } from "@heroicons/vue/24/outline";
import { FunctionalComponent } from "vue";

type Where = "home" | "app";

type Navigation = {
  name: string;
  to: string;
  icon: FunctionalComponent;
  devOnly?: boolean;
};

export function getNavigation(where: Where): Navigation[] {
  switch (where) {
    case "home":
      return [
        { name: "Home", to: "/", icon: HomeIcon },
        { name: "Projects", to: "/projects", icon: BriefcaseIcon },
        { name: "Writing", to: "/writing", icon: PencilIcon, devOnly: true },
        { name: "About", to: "/about", icon: UserIcon },
        { name: "Contact", to: "/contact", icon: EnvelopeIcon },
      ];
    default:
      return [];
  }
}
