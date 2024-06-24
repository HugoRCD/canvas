<script setup lang="ts">
import { Toaster } from 'vue-sonner'

const route = useRoute()
const { data: page } = await useAsyncData(`${route.path}`, () => queryContent(route.path).findOne())

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found' })
}

useContentHead(page.value)

const runtimeConfig = useRuntimeConfig()
const appConfig = useAppConfig()
const { appName, email } = useAppConfig()
const { t, locale } = useI18n()

useHead({
  titleTemplate: `%s - ${appName}`,
})

useSeoMeta({
  description: () => t('global.app_description'),
  author: 'Hugo Richard',
  ogImage: 'https://canvas.hrcd.fr/social-preview.jpg',
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
  twitterImage: 'https://canvas.hrcd.fr/social-preview.jpg',
})

const { copy } = useClipboard({
  source: email,
})

defineShortcuts({
  meta_o: {
    usingInput: true,
    handler: () => {
      copy()
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
