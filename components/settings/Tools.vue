<script setup lang="ts">
import { MoonIcon, SunIcon, ComputerDesktopIcon } from "@heroicons/vue/24/outline";
import { capitalize } from "~/composables/useString";

defineProps({
  isText: {
    type: Boolean,
    default: false,
  },
});

const themes = ["light", "dark"];
</script>

<template>
  <div>
    <div class="t-card bg-transparent backdrop-blur-xl flex text-primary items-center justify-between gap-4 rounded-xl px-1 sm:px-4">
      <div
        class="flex items-center gap-2 cursor-pointer rounded-md p-1"
        :class="{ 'bg-card': $colorMode.preference === option }"
        v-for="option in themes"
        :key="option"
        @click="$colorMode.preference = option"
      >
        <component :is="option === 'light' ? SunIcon : option === 'dark' ? MoonIcon : ComputerDesktopIcon" class="w-5 h-5" />
        <span class="text-xs font-semibold" v-if="isText">{{ capitalize(option) }}</span>
      </div>
      <div class="flex items-center gap-2 cursor-pointer rounded-xl px-1">
        <SettingsLanguageToggle size="25" />
      </div>
    </div>
  </div>
</template>
