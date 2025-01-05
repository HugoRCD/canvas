<script setup lang="ts">
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => queryContent(route.path).findOne())

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found' })
}

useContentHead(page.value)

const { profile } = useAppConfig()
const { t, locale } = useI18n()

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
    <ContentQuery
      v-slot="{ data }"
      :path="$route.path"
      :locale="locale"
      find="one"
    >
      <ContentRenderer :value="data" />
    </ContentQuery>
  </div>
</template>
