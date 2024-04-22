<script setup lang="ts">
defineProps({
  row: {
    type: Number,
    required: true,
  },
  column: {
    type: Number,
    required: true,
  },
})

const grid = inject('grid-context')
</script>

<template>
  <rect
    stroke-width="0"
    :width="grid.size - 1"
    :height="grid.size - 1"
    :x="column * grid.size + grid.offsetX + 1"
    :y="row * grid.size + grid.offsetY + 1"
  />
</template>
