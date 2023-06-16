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
  <USelectMenu v-model="$colorMode.preference" :options="themes" class="cursor-pointer">
    <template #label>
      <div class="flex items-center gap-2">
        <component :is="$colorMode.value === 'light' ? SunIcon : MoonIcon" class="w-4 h-4" />
        <span class="text-xs font-semibold" v-if="isText">{{ capitalize($colorMode.preference) }}</span>
      </div>
    </template>
    <template #option="{ option }">
      <div class="flex items-center gap-2 cursor-pointer">
        <component :is="option === 'light' ? SunIcon : option === 'dark' ? MoonIcon : ComputerDesktopIcon" class="w-4 h-4" />
        <span class="text-xs font-semibold" v-if="isText">{{ capitalize(option) }}</span>
      </div>
    </template>
  </USelectMenu>
</template>