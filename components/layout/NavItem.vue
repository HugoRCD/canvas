<script setup lang="ts">
import type { Navigation } from "~/composables/useNavigation";
import type { PropType } from "vue";

defineProps({
  item: {
    type: Object as PropType<Navigation>,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <NuxtLink
    :id="item.name.toLowerCase()"
    :key="item.name"
    :aria-label="item.name + ' navigation link'"
    :class="[
      $route.path === to ? 'text-white/75 shadow-white/50 shadow-2xl text-shadow-sm border border-white/5 backdrop-blur-3xl bg-zinc-900/10' : 'text-muted',
    ]"
    :to="to"
    class="flex items-center rounded-full px-4 sm:px-6 py-1 border border-transparent hover:bg-zinc-900/50 hover:backdrop-blur-3xl hover:border-white/5 hover:text-main duration-300 ease-in-out transition-all"
  >
    <component :is="item.icon" class="w-7 h-7 sm:w-6 sm:h-6 font-medium" />
  </NuxtLink>
</template>

<style scoped lang="scss"></style>
