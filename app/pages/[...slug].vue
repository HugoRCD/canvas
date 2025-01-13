<script setup lang="ts">
import type { Collections } from '@nuxt/content'

const route = useRoute()
const { locale, localeProperties, t } = useI18n()

const { data: page } = await useAsyncData(route.path, async () => {
  const collection = ('content_' + locale.value) as keyof Collections
  return await queryCollection(collection).path(route.path).first() as Collections['content_en'] | Collections['content_fr']
}, {
  watch: [locale],
})

if (!page.value)
  throw createError({ statusCode: 404, statusMessage: 'Page not found' })

const { profile } = useAppConfig()

const { copy } = useClipboard()

defineShortcuts({
  meta_o: {
    usingInput: true,
    handler: () => {
      copy(profile.email!)
      toast.success(t('global.email_copied'))
    },
  },
})
</script>

<template>
  <div v-if="page">
    <FolioMeta
      :page
      :is-writing="route.path.includes('/articles/')"
    />
    <ContentRenderer
      :dir="localeProperties?.dir ?? 'ltr'"
      :value="page"
    />
  </div>
</template>
