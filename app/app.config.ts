export default defineAppConfig({
  appName: 'Canvas a Nuxt portfolio template',
  appDescription: 'Canvas is a simple but beautiful portfolio template for designers and developers built with Nuxt and Tailwind CSS. Made with ❤️ by HugoRCD',
  profilePicture: '/assets/hugo-richard-light.webp',
  footerName: 'HugoRCD',
  email: 'contact@hrcd.fr',
  twitterUsername: '@HugoRCD__',
  phone: '(+33) 6 21 56 22 18',
  openGraphImage: 'https://canvas.hrcd.fr/social-preview.jpg',
  socials: {
    github: 'https://github.com/HugoRCD',
    twitter: 'https://twitter.com/HugoRCD__',
    linkedin: 'https://www.linkedin.com/in/hugo-richard-0801',
    instagram: 'https://www.instagram.com/hugo.rcd_',
    spotify: 'https://open.spotify.com/user/yuvl0zpp3bpx4hne1ag7huten?si=df7ee2777c0c4fc4',
  },
  ui: {
    primary: 'emerald',
    gray: 'neutral',
    notifications: {
      position: 'top-0 bottom-auto',
    },
    notification: {
      progress: {
        base: 'absolute bottom-0 end-0 start-0 h-0',
        background: 'bg-transparent dark:bg-transparent',
      },
    },
    button: {
      slots: {
        base: 'cursor-pointer',
      },
      defaultVariants: {
        color: 'neutral',
      },
    },
    icons: {
      loading: 'lucide:loader',
    },
  },
})
