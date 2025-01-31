import { field, group } from '@nuxt/content/preview'

export default defineNuxtSchema({
  appConfig: {
    global: group({
      title: 'Website',
      description: 'Global website configuration',
      icon: 'lucide:settings',
      fields: {
        meetingLink: field({
          type: 'string',
          title: 'Meeting link',
          description: 'Your meeting link.',
          icon: 'lucide:calendar',
          default: 'https://schedule.rdv.fr',
        }),
        available: field({
          type: 'boolean',
          title: 'Available',
          description: 'Your availability.',
          icon: 'lucide:check',
          default: true,
        }),
      },
    }),
    profile: group({
      title: 'Personal information',
      description: 'Personal information configuration',
      icon: 'lucide:user',
      fields: {
        name: field({
          type: 'string',
          title: 'Name',
          description: 'Your name.',
          icon: 'lucide:user',
          default: 'Hugo Richard',
        }),
        job: field({
          type: 'string',
          title: 'Job',
          description: 'Your job.',
          icon: 'lucide:briefcase',
          default: 'Front-end developer',
        }),
        email: field({
          type: 'string',
          title: 'Email',
          description: 'Your email.',
          icon: 'lucide:mail',
          default: 'contact@hrcd.fr',
        }),
        phone: field({
          type: 'string',
          title: 'Phone',
          description: 'Your phone.',
          icon: 'lucide:phone',
          default: '(+33) 6 21 56 22 18',
        }),
        picture: field({
          type: 'string',
          title: 'Picture',
          description: 'Your picture.',
          icon: 'lucide:image',
          default: 'https://avatars.githubusercontent.com/u/71938701?v=4',
        }),
      },
    }),
    seo: group({
      title: 'SEO',
      description: 'SEO configuration',
      icon: 'lucide:search',
      fields: {
        title: field({
          type: 'string',
          title: 'Title',
          description: 'Title of your website (used in the preview of your website).',
          icon: 'lucide:title',
          default: 'My website',
        }),
        description: field({
          type: 'string',
          title: 'Description',
          description: 'Description of your website (used in the preview of your website).',
          icon: 'lucide:description',
          default: 'My website description',
        }),
        url: field({
          type: 'string',
          title: 'URL',
          description: 'Public URL of your website.',
          icon: 'lucide:link',
          default: 'https://mywebsite.com',
        }),
        lang: field({
          type: 'string',
          title: 'Language',
          description: 'The language that you want to use for your website.',
          icon: 'lucide:language',
          default: 'en',
          required: ['en', 'fr'],
        }),
      },
    }),
    socials: group({
      title: 'Socials',
      description: 'Socials configuration',
      icon: 'lucide:link',
      fields: {
        github: field({
          type: 'string',
          title: 'Github',
          description: 'Your Github account.',
          icon: 'lucide:github',
          default: 'https://github.com/myusername',
        }),
        twitter: field({
          type: 'string',
          title: 'Twitter',
          description: 'Your Twitter account.',
          icon: 'lucide:twitter',
          default: 'https://twitter.com/myusername',
        }),
        linkedin: field({
          type: 'string',
          title: 'Linkedin',
          description: 'Your Linkedin account.',
          icon: 'lucide:linkedin',
          default: 'https://www.linkedin.com/in/myusername',
        }),
        instagram: field({
          type: 'string',
          title: 'Instagram',
          description: 'Your Instagram account.',
          icon: 'lucide:instagram',
          default: 'https://www.instagram.com/myusername',
        }),
        spotify: field({
          type: 'string',
          title: 'Spotify',
          description: 'Your Spotify account.',
          icon: 'lucide:spotify',
          default: 'https://open.spotify.com/user/myusername',
        }),
      },
    }),
  },
})
