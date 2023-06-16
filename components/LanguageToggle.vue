<script setup lang="ts">
const { locale, setLocaleCookie } = useI18n();

defineProps({
  isText: {
    type: Boolean,
    default: false,
  },
});

const locales = [
  {
    name: "English",
    iso: "en",
    flag: "🇺🇸",
  },
  {
    name: "Français",
    iso: "fr",
    flag: "🇫🇷",
  },
];

watch(locale, (newLocale) => {
  setLocaleCookie(newLocale);
});
</script>

<template>
  <ClientOnly>
    <UButton
      color="gray"
      variant="ghost"
      aria-label="language"
      @click="() => $i18n.locale = $i18n.locale === 'en' ? 'fr' : 'en'">
      <span class="text-xs font-semibold">{{ locales.find(l => l.iso === $i18n.locale).flag }}</span>
    </UButton>
    <template #fallback>
      <div class="w-8 h-8" />
    </template>
  </ClientOnly>
</template>