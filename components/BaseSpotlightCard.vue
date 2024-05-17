<script setup lang="ts">
import { useMouseInElement } from '@vueuse/core'

const props = defineProps({
  as: {
    type: String,
    default: 'div',
  },
  from: {
    type: String,
    default: 'rgba(255,255,255,0.8)',
  },
  via: {
    type: String,
    required: false,
    default: null,
  },
  to: {
    type: String,
    default: 'transparent',
  },
  size: {
    type: Number,
    default: 400,
  },
  mode: {
    type: String,
    default: 'before',
  },
})

const card = ref()
const { elementX, elementY } = useMouseInElement(card)

const spotlightColorStops = [props.from, props.via, props.to].filter(value => !!value).join(',')
</script>

<template>
  <component
    :is="as"
    ref="card"
    :style="{
      '--x': `${elementX}px`,
      '--y': `${elementY}px`,
      '--spotlight-color-stops': spotlightColorStops,
      '--spotlight-size': `${size}px`,
    }"
    :class="{
      'before:absolute before:inset-0 before:bg-[radial-gradient(var(--spotlight-size)_circle_at_var(--x)_var(--y),var(--spotlight-color-stops))]':
        mode === 'before',
      'after:absolute after:inset-0 after:bg-[radial-gradient(var(--spotlight-size)_circle_at_var(--x)_var(--y),var(--spotlight-color-stops))]':
        mode === 'after',
    }"
    class="relative transform-gpu overflow-hidden"
  >
    <slot />
  </component>
</template>
