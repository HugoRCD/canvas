<script lang="ts" setup>
import { Toaster } from 'vue-sonner'

const { t, locale } = useI18n()

const route = useRoute()
const { data: page } = await useAsyncData(`${route.path}`, () => queryContent(route.path).findOne())

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found' })
}

useContentHead(page.value)

const { copy } = useClipboard()

function copyArticleLink() {
  copy(`${window.location.origin}${route.fullPath}`)
  toast.success(t('global.article_link_copied'))
}

defineShortcuts({
  meta_k: {
    usingInput: true,
    handler: () => {
      copy(`${window.location.origin}${route.fullPath}`)
      toast.success(t('global.article_link_copied'))
    },
  },
})

defineOgImage({
  url: page.value.image,
  width: 1200,
  height: 600,
})
</script>

<template>
  <div>
    <NuxtLink
      to="/writing"
      class="mx-auto my-8 flex cursor-pointer items-center gap-2 px-4 text-muted transition-colors duration-200 sm:max-w-2xl md:max-w-3xl lg:max-w-4xl"
    >
      <span class="i-lucide-arrow-left size-4" />
      <span class="text-sm font-extralight">
        {{ $t("navigation.writing") }}
      </span>
    </NuxtLink>
    <SettingsLanguageToggle class="fixed bottom-4 right-4 sm:bottom-4" />
    <article class="writing prose mx-auto px-4 sm:max-w-2xl md:max-w-3xl lg:max-w-4xl">
      <h1>
        {{ page?.title }}
      </h1>
      <div class="info-section mt-1 flex flex-col gap-2 sm:flex-row sm:gap-4">
        <p>{{ page?.date }}</p>
        <p class="hidden sm:block">
          |
        </p>
        <p>{{ page?.readingTime }} {{ $t("writing.readingTime") }}</p>
        <p class="hidden sm:block">
          |
        </p>
        <UTooltip
          :text="$t('writing.copy_link')"
          :shortcuts="['⌘', 'K']"
        >
          <p
            class="flex cursor-pointer select-none items-center gap-1 transition-colors duration-200"
            @click="copyArticleLink"
          >
            {{ $t("writing.share") }}
          </p>
        </UTooltip>
      </div>
      <ContentQuery
        v-slot="{ data }"
        :path="$route.path"
        :locale="locale"
        find="one"
      >
        <ContentRenderer :value="data" />
      </ContentQuery>
    </article>
  </div>
</template>

<style scoped>
.info-section {
  font-weight: 200;
  color: #7d8084;
  text-decoration: none;
  text-align: left;
}
</style>
