import type { ParsedContent } from '@nuxt/content/dist/runtime/types'

export type Article = ParsedContent & { _path: string, image: string, tags: string[], date: string, readingTime: string }

export type MinArticle = { title: string, description: string, image: string, tags: string[], date: string, path: string, readingTime: string }
