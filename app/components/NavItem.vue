<script setup lang="ts">
const props = defineProps({
  as: {
    type: String,
    default: 'div',
  },
  active: {
    type: Boolean,
    default: false,
  },
})

const container = ref()

const context = inject('nav-context')

// current element index
const peers = inject('peers')
const index = computed(() => {
  return peers?.value ? peers.value.indexOf(container.value) : -1
})

// active item indicator
const isActive = computed(() => {
  return context.activeItem.index === index.value
})

watch(index, () => {
  // set default element as active
  if (props.active) {
    setActive()
  }

  if (index.value === peers.value.length - 1) {
    context.setMounted()
  }
})

watch(context.isMounted, () => {
  // set first element as active
  if (context.activeItem.index === -1 && index.value === 0) {
    setActive()
  }
})

//
function setActive() {
  if (context.isVertical) {
    context.setActiveItem(index.value, container.value.getBoundingClientRect().height, container.value.offsetTop)
  }
  else {
    context.setActiveItem(index.value, container.value.getBoundingClientRect().width, container.value.offsetLeft)
  }
}
</script>

<template>
  <component
    :is="as"
    ref="container"
  >
    <slot
      :set-active
      :is-active
    />
  </component>
</template>
