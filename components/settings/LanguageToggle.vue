<script setup lang="ts">
const { locale, setLocaleCookie } = useI18n();
const switchLocalePath = useSwitchLocalePath();

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
    domain: "https://hrcd.me",
  },
  {
    name: "Français",
    iso: "fr",
    flag: "🇫🇷",
    domain: "https://hrcd.fr",
  },
];

watch(locale, (newLocale) => {
  setLocaleCookie(newLocale);
});
</script>

<template>
  <div class="z-99 bg-zinc-900/90 backdrop-blur-xl flex items-center rounded-xl px-3 py-0">
    <ClientOnly>
      <a class="cursor-pointer select-none" :href="switchLocalePath(locales.find((l) => l.iso !== $i18n.locale).iso)">
        <span class="font-semibold" :style="{ fontSize: `${size}px` }">
          {{ locales.find((l) => l.iso === $i18n.locale).flag }}
        </span>
      </a>
      <template #fallback>
        <div class="w-8 h-8" />
      </template>
    </ClientOnly>
  </div>
</template>
