<script setup lang="ts">
const props = defineProps({
  size: {
    type: Number,
    default: 64,
  },
  offsetX: {
    type: Number,
    default: -1,
  },
  offsetY: {
    type: Number,
    default: -1,
  },
})

const id = Math.round(Math.random() * 999)

provide('grid-context', props)
</script>

<template>
  <svg>
    <defs>
      <pattern
        :id="`grid-pattern-${id}`"
        viewBox="0 0 64 64"
        :width="size"
        :height="size"
        patternUnits="userSpaceOnUse"
        :x="offsetX"
        :y="offsetY"
      >
        <path
          d="M64 0H0V64"
          fill="none"
        />
      </pattern>
    </defs>

    <rect
      width="100%"
      height="100%"
      stroke-width="0"
      :fill="`url(#grid-pattern-${id})`"
    />

    <slot />
  </svg>
</template>
