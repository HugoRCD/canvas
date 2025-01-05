<script setup lang="ts">
defineProps({
  isText: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div
    class="z-99 flex flex-col items-center justify-between gap-3 rounded-xl bg-zinc-900/90 px-1 py-1.5 backdrop-blur-xl sm:flex-row sm:gap-4 sm:px-4 sm:py-0"
  >
    <div class="flex cursor-pointer items-center gap-2 rounded-xl px-1">
      <SettingsLanguageToggle size="25" />
    </div>
  </div>
</template>
