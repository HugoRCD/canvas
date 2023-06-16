import {
  HomeIcon,
} from "@heroicons/vue/24/outline";

type Where = "home" | "app" | "user" | "admin";

type Navigation = {
  name: string;
  to: string;
  icon: any;
};

export function getNavigation(where: Where): Navigation[] {
  switch (where) {
    case "home":
      return [
        { name: "Home", to: "/", icon: HomeIcon },
        { name: "Pricing", to: "/pricing", icon: HomeIcon },
        { name: "Integrations", to: "/integrations", icon: HomeIcon },
        { name: "Changelog", to: "/changelog", icon: HomeIcon },
        { name: "Team", to: "/team", icon: HomeIcon },
        { name: "Contact", to: "/contact", icon: HomeIcon },
      ];
    default:
      return [];
  }
}