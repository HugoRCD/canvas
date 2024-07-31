type Where = 'home' | 'app'

export type Navigation = {
  name: string
  to: string
  icon: string
}

export function getNavigation(where: Where): Record<string, Navigation> | [] {
  switch (where) {
    case 'home':
      return {
        home: {
          name: 'Home',
          to: '/',
          icon: 'lucide:home',
        },
        works: {
          name: 'Works',
          to: '/works',
          icon: 'lucide:briefcase',
        },
        writing: {
          name: 'Writing',
          to: '/writing',
          icon: 'lucide:library',
        },
        about: {
          name: 'About',
          to: '/about',
          icon: 'lucide:user',
        },
        contact: {
          name: 'Contact',
          to: '/contact',
          icon: 'lucide:mail',
        },
      }
    default:
      return []
  }
}
