<script setup lang="ts">
useScriptPlausibleAnalytics({
  domain: 'hrcd.fr',
  scriptInput: {
    src: 'https://analytics.hrcd.fr/js/script.js',
  },
})

const route = useRoute()
const { link, seo, profile } = useAppConfig()

const getPageSEO = () => ({
  title: seo.title,
  description: seo.description,
})

const getTitleTemplate = (title: string | undefined) => {
  if (route.path === '/') return title || `${seo.title} | ${profile.job}`
  return `${title} | ${seo.title} - ${profile.job}`
}

const pageSEO = getPageSEO()

useSeoMeta({
  ogSiteName: seo.title,
  ogType: 'website',
  author: profile.name,
  title: pageSEO.title,
  description: pageSEO.description,
  twitterTitle: pageSEO.title,
  twitterDescription: pageSEO.description,
  twitterCard: 'summary_large_image',
})

useHead({
  title: seo.title,
  titleTemplate: getTitleTemplate,
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
    { name: 'charset', content: 'utf-8' },
    { name: 'robots', content: 'index, follow' },
    { name: 'color-scheme', content: 'light dark' },
  ],
  link,
})

defineOgImage({ url: 'https://canvas.hrcd.fr/social-preview.jpg', width: 1200, height: 630, alt: 'Home image' })
</script>

<template>
  <slot />
</template>
