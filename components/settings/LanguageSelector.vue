<script setup lang="ts">
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'

const { locale, setLocaleCookie } = useI18n()

defineProps({
  isText: {
    type: Boolean,
    default: false,
  },
})

const locales = [
  {
    name: 'English',
    iso: 'en',
    flag: '🇺🇸',
  },
  {
    name: 'Français',
    iso: 'fr',
    flag: '🇫🇷',
  },
]

watch(locale, (newLocale) => {
  setLocaleCookie(newLocale)
})
</script>

<template>
  <Menu
    as="div"
    class="relative inline-block text-left"
  >
    <MenuButton
      as="button"
      class="inline-flex w-full justify-center gap-2 rounded-md border border-transparent px-4 py-2 text-sm font-medium text-inverted"
    >
      <span class="text-xs font-semibold">{{ locales.find((l) => l.iso === $i18n.locale).flag }}</span>
      <span
        v-if="isText"
        class="text-xs font-semibold"
      >
        {{ locales.find((l) => l.iso === $i18n.locale).name }}
      </span>
    </MenuButton>
    <transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <MenuItems
        as="div"
        class="absolute mt-2 origin-center divide-y-[1px] divide-white/20 rounded-md border-[1px] border-white/20 bg-main shadow-lg outline-none"
      >
        <MenuItem
          v-for="item in $i18n.availableLocales"
          :key="item"
          as="button"
          class="flex w-full justify-between px-4 py-2 text-sm"
          @click="() => ($i18n.locale = $i18n.locale === 'en' ? 'fr' : 'en')"
        >
          <div class="flex items-center gap-2 text-inverted">
            <span class="text-xs font-semibold">{{ locales.find((l) => l.iso === locale).flag }}</span>
            <span
              v-if="isText"
              class="text-xs font-semibold"
            >
              {{ locales.find((l) => l.iso === locale).name }}
            </span>
          </div>
        </MenuItem>
      </MenuItems>
    </transition>
  </Menu>
</template>
