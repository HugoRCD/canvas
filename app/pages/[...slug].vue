<script setup lang="ts">
const { t, locale } = useI18n()
const route = useRoute()

const { data: page } = await useAsyncData(route.path, () => queryContent(route.path).locale(locale.value).findOne(), {
  watch: [locale],
})

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found' })
}

useContentHead(page.value)

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
  <div>
    <ContentRenderer :value="page" />
  </div>
</template>
