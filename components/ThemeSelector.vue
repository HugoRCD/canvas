<script setup lang="ts">
import { MoonIcon, SunIcon, ComputerDesktopIcon } from "@heroicons/vue/24/outline";
import { capitalize } from "~/composables/useString";

defineProps({
  isText: {
    type: Boolean,
    default: false,
  },
});

const themes = ["system", "light", "dark"];
</script>

<template>
  <div>
    <div class="flex text-primary items-center justify-center gap-4 bg-secondary rounded-xl p-2">
      <div
        class="flex items-center gap-2 cursor-pointer rounded-xl p-2"
        :class="{ 'bg-card': $colorMode.preference === option }"
        v-for="option in themes"
        :key="option"
        @click="$colorMode.preference = option"
      >
        <component :is="option === 'light' ? SunIcon : option === 'dark' ? MoonIcon : ComputerDesktopIcon" class="w-5 h-5" />
        <span class="text-xs font-semibold" v-if="isText">{{ capitalize(option) }}</span>
      </div>
    </div>
  </div>
</template>
