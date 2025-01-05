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
    default: 250,
  },
  mode: {
    type: String,
    default: 'before',
  },
  white: {
    type: Boolean,
    default: false,
  },
  radius: {
    type: String,
    default: '1rem',
  },
})

const card = ref()
const { elementX, elementY } = useMouseInElement(card)

const spotlightColorStops = [props.from, props.via, props.to].filter(value => !!value).join(',')
</script>

<template>
  <component
    :is="as"
    v-if="!white"
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
  <BaseSpotlightCard
    v-else
    from="rgba(255,255,255,0.2)"
    class="relative rounded-lg"
  >
    <!-- border gradient -->
    <div class="absolute inset-x-0 bottom-0 top-0 rounded-t-lg bg-gradient-to-b from-white/20 to-transparent" />

    <!-- top highlight -->
    <div class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />

    <!-- background -->
    <div class="absolute inset-px rounded-lg bg-zinc-950" />

    <!-- inner light -->
    <div class="absolute inset-0 bg-[radial-gradient(40%_128px_at_50%_0%,theme(backgroundColor.white/5%),transparent)]" />

    <div class="relative flex h-full flex-col">
      <slot />
    </div>
  </BaseSpotlightCard>
</template>
