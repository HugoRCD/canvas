<script setup lang="ts">
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import { useLocalStorage } from "@vueuse/core";
const { locale } = useI18n();

defineProps({
  isText: {
    type: Boolean,
    default: false,
  },
});

const availableLocales = [
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

watch(locale, (newLang) => {
  locale.value = newLang;
  useLocalStorage("helpr_locale", newLang);
});

const setLocale = (newLocale: string) => {
  locale.value = newLocale;
  useLocalStorage("helpr_locale", newLocale).value = newLocale;
};

const currentLocale = computed(() => {
  return availableLocales.find((l) => l.iso === locale.value);
});
</script>

<template>
  <Menu as="div" class="relative inline-block text-left">
    <MenuButton as="button" class="inline-flex gap-2 justify-center w-full px-4 py-2 text-sm font-medium text-primary border border-transparent rounded-md">
      <span>{{ currentLocale.flag }}</span>
      <span v-if="isText">{{ currentLocale.name }}</span>
    </MenuButton>
    <transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <MenuItems as="div" class="absolute mt-2 origin-center bg-primary border border-muted divide-y divide-muted rounded-md shadow-lg outline-none">
        <MenuItem
          v-for="locale in availableLocales"
          :key="locale.name"
          as="button"
          @click="setLocale(locale.iso)"
          class="flex justify-between w-full px-4 py-2 text-sm text-primary hover:bg-secondary"
        >
          <div class="flex items-center gap-2">
            <span class="text-muted">{{ locale.flag }}</span>
            <span v-if="isText">{{ locale.name }}</span>
          </div>
        </MenuItem>
      </MenuItems>
    </transition>
  </Menu>
</template>