<script setup lang="ts">
import { usePreferredLanguages } from '@vueuse/core'

const { locale } = useI18n()

// languages is a ref of an array of strings like ['en-US', 'en', 'fr']
const languages = usePreferredLanguages()

const isLanguageDifferent = computed(() => {
  const currentLocaleBrowser = languages.value[0].split('-')[0]
  // if the first language in the array is different from the current locale or first language not contained the current locale
  return currentLocaleBrowser !== locale.value || !languages.value.includes(locale.value)
})
</script>

<template>
  <div
    class="z-999 fixed bottom-0 left-0 w-full p-4 text-center text-white"
    :class="{ 'bg-red-500': isLanguageDifferent }"
  >
    {{ $t("layout.languageAlert") }} --- {{ locale }} --- {{ languages }}
  </div>
</template>

<style scoped></style>
