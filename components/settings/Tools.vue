<script setup lang="ts">
defineProps({
  isText: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div
    class="z-99 bg-zinc-900/90 backdrop-blur-xl flex flex-col sm:flex-row text-main items-center justify-between gap-3 sm:gap-4 rounded-xl px-1 sm:px-4 py-1.5 sm:py-0"
  >
    <div class="flex items-center gap-2 cursor-pointer rounded-xl px-1">
      <SettingsLanguageToggle size="25" />
    </div>
  </div>
</template>
