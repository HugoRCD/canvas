<script setup lang="ts">
defineProps({
  as: {
    type: String,
    default: 'div',
  },
})

const container = ref()

const context = inject('details-context')

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
      :toggle
      :is-active
    />
  </component>
</template>
