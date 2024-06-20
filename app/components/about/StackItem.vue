<script setup lang="ts">
import type { PropType } from 'vue'
import type { Stack } from '~/data/stack'

defineProps({
  item: {
    type: Object as PropType<Stack>,
    required: true,
  },
})
</script>

<template>
  <SpotlightCard
    white
    class="p-6"
  >
    <NuxtLink
      :to="item.link"
      target="_blank"
      :aria-label="item.name + ' link'"
      class="flex gap-2"
    >
      <component
        :is="item.logo"
        class="size-8 text-main"
        :class="item.logo.includes('Color') ? '' : 'text-main'"
        :font-controlled="false"
        :alt="item.name + ' logo'"
        :filled="item.logo.includes('Color')"
        :aria-label="item.name + ' logo'"
      />
    </NuxtLink>
  </SpotlightCard>
</template>
