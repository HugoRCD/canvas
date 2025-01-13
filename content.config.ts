import { defineCollection, z } from '@nuxt/content'

const commonContentSchema = z.object({
  title: z.string().nonempty(),
  description: z.string().nonempty(),
  date: z.string().nonempty(),
})

const commonProjectSchema = z.object({
  name: z.string().nonempty(),
  image: z.string().url(),
  link: z.string().url(),
  release: z.string().nonempty(),
  date: z.string().nonempty(),
})

const commonFaqSchema = z.object({
  title: z.string().nonempty(),
  subtitle: z.string().nonempty(),
  faqQuestions: z.array(
    z.object({
      title: z.string().nonempty(),
      questions: z.array(
        z.object({
          label: z.string().nonempty(),
          content: z.string().nonempty(),
        }),
      ),
    }),
  ),
})

export const collections = {
  content_en: defineCollection({
    type: 'page',
    source: {
      include: 'en/**/*.md',
      prefix: '/',
    },
    schema: commonContentSchema,
  }),
  content_fr: defineCollection({
    type: 'page',
    source: {
      include: 'fr/**/*.md',
      prefix: '/',
    },
    schema: commonContentSchema,
  }),
  articles_en: defineCollection({
    type: 'page',
    source: 'en/articles/*.md',
    schema: commonContentSchema,
  }),
  articles_fr: defineCollection({
    type: 'page',
    source: 'fr/articles/*.md',
    schema: commonContentSchema,
  }),
  projects_en: defineCollection({
    type: 'data',
    source: {
      include: 'en/projects/*.json',
      prefix: '/',
    },
    schema: commonProjectSchema,
  }),
  projects_fr: defineCollection({
    type: 'data',
    source: {
      include: 'fr/projects/*.json',
      prefix: '/',
    },
    schema: commonProjectSchema,
  }),
  stack: defineCollection({
    type: 'data',
    source: 'stack.json',
    schema: z.object({
      items: z.array(
        z.object({
          name: z.string().nonempty(),
          link: z.string().url(),
          icon: z.string().nonempty(),
        }),
      ),
    }),
  }),
  faq_en: defineCollection({
    type: 'data',
    source: 'en/faq.json',
    schema: commonFaqSchema,
  }),
  faq_fr: defineCollection({
    type: 'data',
    source: 'fr/faq.json',
    schema: commonFaqSchema,
  }),
}
