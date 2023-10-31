<script setup lang="ts">
const { locale, setLocaleCookie } = useI18n();

defineProps({
  isText: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: "30",
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
  <div class="z-99 bg-zinc-900/90 backdrop-blur-xl flex items-center rounded-xl px-1 sm:px-4 py-1.5 sm:py-0">
    <ClientOnly>
      <div class="cursor-pointer select-none" @click="() => ($i18n.locale = $i18n.locale === 'en' ? 'fr' : 'en')">
        <span class="font-semibold" :style="{ fontSize: `${size}px` }">
          {{ locales.find((l) => l.iso === $i18n.locale).flag }}
        </span>
      </div>
      <template #fallback>
        <div class="w-8 h-8" />
      </template>
    </ClientOnly>
  </div>
</template>
