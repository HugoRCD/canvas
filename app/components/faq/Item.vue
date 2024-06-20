<script setup lang="ts">
import type { Ref } from 'vue'

defineProps({
  as: {
    type: String,
    default: 'div',
  },
})

const container = ref()

const context = inject('details-context') as {
  peers: Ref<HTMLElement[]>
  activeItem: Ref<number>
  setActive: (index: number) => void
}

const index = computed(() => {
  return context.peers?.value ? context.peers.value.indexOf(container.value) : -1
})

const isActive = computed(() => index.value === context.activeItem.value)

const toggle = () => context.setActive(index.value)

provide('isActive', isActive)
</script>

<template>
  <component
    :is="as"
    ref="container"
  >
    <slot
      :toggle="toggle"
      :is-active="isActive"
    />
  </component>
</template>
