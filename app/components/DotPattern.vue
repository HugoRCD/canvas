<script setup lang="ts">
defineProps({
  size: {
    type: Number,
    default: 16,
  },
  radius: {
    type: Number,
    default: 1,
  },
  offsetX: {
    type: Number,
    default: 0,
  },
  offsetY: {
    type: Number,
    default: 0,
  },
})
</script>

<template>
  <svg>
    <defs>
      <pattern
        id="dot-pattern"
        :width="size"
        :height="size"
        patternUnits="userSpaceOnUse"
        patternContentUnits="userSpaceOnUse"
        :x="offsetX"
        :y="offsetY"
      >
        <circle
          :cx="size / 2"
          :cy="size / 2"
          :r="radius"
        />
      </pattern>
    </defs>

    <rect
      width="100%"
      height="100%"
      stroke-width="0"
      fill="url(#dot-pattern)"
    />
  </svg>
</template>
