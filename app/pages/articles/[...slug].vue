<script lang="ts" setup>
const { t, locale } = useI18n()

const route = useRoute()

const { data: page } = await useAsyncData(route.path, () => queryContent(route.path).locale(locale.value).findOne(), {
  watch: [locale],
})

if (!page.value) throw createError({ statusCode: 404, statusMessage: 'Page not found' })

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
})
</script>

<template>
  <div>
    <NuxtLink
      to="/writing"
      class="mx-auto my-8 flex cursor-pointer items-center gap-2 px-4 text-muted hover:text-primary transition-colors duration-200 sm:max-w-2xl md:max-w-3xl lg:max-w-4xl"
    >
      <UIcon
        name="lucide:arrow-left"
        class="size-4"
      />
      <span class="text-sm font-extralight">
        {{ $t("navigation.writing") }}
      </span>
    </NuxtLink>
    <article class="writing mx-auto px-4 sm:max-w-2xl md:max-w-3xl lg:max-w-4xl">
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
      <ContentRenderer :value="page" />
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
