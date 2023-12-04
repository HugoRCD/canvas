<script setup lang="ts">
const switchLocalePath = useSwitchLocalePath();
const { locale: current, setLocaleCookie } = useI18n();

const locales = [
  { code: "en", name: "English", domain: "https://hrcd.me" },
  { code: "fr", name: "Français", domain: "https://hrcd.fr" },
];

const currentLocale = computed(() => {
  return locales.find((locale) => locale.code === current.value);
});

watch(current, (newLocale) => {
  setLocaleCookie(newLocale);
});
</script>

<template>
  <div class="z-99 bg-zinc-900/90 backdrop-blur-xl flex items-center rounded-lg px-3 py-1 gap-3 border border-white/10">
    <ClientOnly>
      <DevOnly>
        <div class="cursor-pointer select-none bg-main rounded-lg px-3 py-1" v-for="locale in locales" :key="locale" @click="$i18n.locale = locale.code">
          <span class="font-semibold" :class="locale.code === currentLocale.code ? 'text-white' : 'text-gray-500'">
            {{ locale.code }}
          </span>
        </div>
      </DevOnly>
      <NuxtLink class="cursor-pointer select-none" v-for="locale in locales" :key="locale" :to="switchLocalePath(locale.code)">
        <span class="font-semibold" :class="locale.code === currentLocale.code ? 'text-white' : 'text-gray-500'">
          {{ locale.code }}
        </span>
      </NuxtLink>
      <template #fallback>
        <div class="w-8 h-8" />
      </template>
    </ClientOnly>
  </div>
</template>
