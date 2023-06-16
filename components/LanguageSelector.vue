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
  <USelectMenu v-model="$i18n.locale" :options="$i18n.availableLocales" class="cursor-pointer">
    <template #label>
      <div class="flex items-center gap-2">
        <span class="text-xs font-semibold">{{ locales.find(l => l.iso === $i18n.locale).flag }}</span>
        <span class="text-xs font-semibold" v-if="isText">{{ locales.find(l => l.iso === $i18n.locale).name }}</span>
      </div>
    </template>
    <template #option="{ option }">
      <div class="flex items-center gap-2 cursor-pointer">
        <span class="text-xs font-semibold">{{ locales.find(l => l.iso === option).flag }}</span>
        <span class="text-xs font-semibold" v-if="isText">{{ locales.find(l => l.iso === option).name }}</span>
      </div>
    </template>
  </USelectMenu>
</template>