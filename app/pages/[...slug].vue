<script setup lang="ts">
import { withLeadingSlash } from 'ufo'
import type { Collections } from '@nuxt/content'

const route = useRoute()
const { locale, localeProperties, t } = useI18n()

const slug = computed(() => withLeadingSlash(String(route.params.slug)))
const { data: page } = await useAsyncData('page-' + slug.value, async () => {
  const collection = ('content_' + locale.value) as keyof Collections
  return await queryCollection(collection).path(slug.value).first()
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
      copy(profile.email)
      toast.success(t('global.email_copied'))
    },
  },
})
</script>

<template>
  <ContentRenderer
    v-if="page"
    :dir="localeProperties?.dir ?? 'ltr'"
    :value="page"
  />
</template>
