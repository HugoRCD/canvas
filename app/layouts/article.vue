<script lang="ts" setup>
const { page } = useContent()
const { t } = useI18n()

useContentHead(page)

const runtimeConfig = useRuntimeConfig()
const articleLink = ref(`${runtimeConfig.public.siteUrl}${page.value._path}`)

function copyArticleLink() {
  copyToClipboard(articleLink.value)
  toast.success(t('global.article_link_copied'))
}

defineShortcuts({
  meta_k: {
    usingInput: true,
    handler: () => {
      copyToClipboard(articleLink.value)
      toast.success(t('global.article_link_copied'))
    },
  },
})
</script>

<template>
  <div>
    <div>
      <NuxtLink
        to="/writing"
        class="mx-auto my-8 flex cursor-pointer items-center gap-2 px-4 text-muted transition-colors duration-200 hover:text-main sm:max-w-2xl md:max-w-3xl lg:max-w-4xl"
      >
        <span class="i-lucide-arrow-left size-4" />
        <span class="text-sm font-light">
          {{ $t("navigation.writing") }}
        </span>
      </NuxtLink>
      <SettingsLanguageToggle class="fixed bottom-4 right-4 sm:bottom-4" />
      <article class="writing prose mx-auto px-4 sm:max-w-2xl md:max-w-3xl lg:max-w-4xl">
        <h1>
          {{ page.title }}
        </h1>
        <div class="info-section mt-1 flex flex-col gap-2 sm:flex-row sm:gap-4">
          <p>{{ page.date }}</p>
          <p class="hidden sm:block">
            |
          </p>
          <p>{{ page.readingTime }} {{ $t("writing.readingTime") }}</p>
          <p class="hidden sm:block">
            |
          </p>
          <UTooltip
            :text="$t('writing.copy_link')"
            :shortcuts="['⌘', 'K']"
          >
            <p
              class="flex cursor-pointer items-center gap-1 transition-colors duration-200 hover:text-main"
              @click="copyArticleLink"
            >
              {{ $t("writing.share") }}
            </p>
          </UTooltip>
        </div>
        <slot />
      </article>
      <LayoutFooter class="pt-6" />
    </div>
  </div>
</template>

<style scoped>
.info-section {
  font-weight: 300;
  color: #7d8084;
  text-decoration: none;
  text-align: left;
}
</style>
