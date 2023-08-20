import { HomeIcon, BriefcaseIcon, RectangleStackIcon, UserIcon, EnvelopeIcon } from "@heroicons/vue/24/outline";
import { FunctionalComponent } from "vue";

type Where = "home" | "app" | "user" | "admin";

type Navigation = {
  name: string;
  to: string;
  icon: FunctionalComponent;
};

export function getNavigation(where: Where): Navigation[] {
  switch (where) {
    case "home":
      return [
        { name: "Home", to: "/", icon: HomeIcon },
        { name: "Projects", to: "/projects", icon: BriefcaseIcon },
        { name: "Stack", to: "/stack", icon: RectangleStackIcon },
        { name: "About", to: "/about", icon: UserIcon },
        { name: "Contact", to: "/contact", icon: EnvelopeIcon },
      ];
    default:
      return [];
  }
}
