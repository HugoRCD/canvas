<script setup lang="ts">
import type { Stack } from "~/data/stack";
import type { PropType } from "vue";

defineProps({
  stack: {
    type: String as PropType<"development" | "productivity" | "design">,
    required: true,
  },
  items: {
    type: Array as PropType<Stack[]>,
    required: true,
  },
});
</script>

<template>
  <div class="flex flex-col gap-3">
    <h4 class="text-2xl font-bold font-testimonial text-white-shadow">
      {{ $t(`tags.${stack}`) }}
    </h4>
    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
      <AboutStackItem v-for="item in items" :key="item.name" :item="item" />
    </div>
  </div>
</template>

<style scoped></style>
