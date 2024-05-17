<script setup lang="ts">
import { Toaster } from 'vue-sonner'

const runtimeConfig = useRuntimeConfig()
const appConfig = useAppConfig()
const { appName, email } = useAppConfig()
const { t } = useI18n()
const { locale } = useI18n()

useHead({
  titleTemplate: `%s - ${appName}`,
  script: [
    {
      'src': 'https://plausible.hrcd.fr/js/script.js',
      'defer': true,
      'data-domain': 'canvas.hrcd.fr',
    },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicon-16x16.png',
    },
    {
      rel: 'manifest',
      href: '/site.webmanifest',
    },
  ],
})

useSeoMeta({
  description: () => t('global.app_description'),
  author: 'Hugo Richard',
  ogType: 'website',
  ogTitle: appConfig.appName,
  ogDescription: () => t('global.app_description'),
  ogUrl: () => runtimeConfig.public.siteUrl,
  ogLocale: () => locale.value,
  twitterTitle: appConfig.appName,
  twitterDescription: () => t('global.app_description'),
  twitterCard: 'summary_large_image',
  twitterSite: appConfig.twitterUsername,
  twitterCreator: appConfig.twitterUsername,
  twitterImage: 'https://hrcd.fr/social-preview.jpg',
})

defineShortcuts({
  meta_o: {
    usingInput: true,
    handler: () => {
      copyToClipboard(email)
      toast.success(t('global.email_copied'))
    },
  },
})
</script>

<template>
  <div>
    <Html
      :lang="$i18n.locale"
      class="bg-zinc-950 text-main font-geist transition-colors duration-300 selection:bg-white/60 selection:text-zinc-800"
    >
      <Body>
        <LayoutScrollToTop />
        <NuxtLayout>
          <ContentQuery
            v-slot="{ data }"
            :path="$route.path"
            :locale="locale"
            find="one"
          >
            <ContentRenderer :value="data" />
          </ContentQuery>
        </NuxtLayout>
        <Toaster close-button />
        <DotPattern class="absolute inset-0 -z-10 size-full fill-white/5 [mask-image:radial-gradient(white,transparent_85%)]" />
      </Body>
    </Html>
  </div>
</template>
