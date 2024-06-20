<script setup lang="ts">
import type { PropType } from 'vue'
import type { Navigation } from '~/composables/useNavigation'

defineProps({
  item: {
    type: Object as PropType<Navigation>,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <NuxtLink
    :id="item.name.toLowerCase()"
    :key="item.name"
    :aria-label="item.name + ' navigation link'"
    :class="[
      $route.path === to ? 'border border-white/5 bg-zinc-900/10 text-white/75 shadow-2xl shadow-white/50 backdrop-blur-3xl text-shadow-sm' : 'text-muted',
    ]"
    :to
    class="flex items-center rounded-full border border-transparent px-4 py-1 transition-all duration-300 ease-in-out hover:border-white/5 hover:bg-zinc-900/50 hover:text-main hover:backdrop-blur-3xl sm:px-6"
  >
    <component
      :is="item.icon"
      class="size-7 font-medium sm:size-6"
    />
  </NuxtLink>
</template>
