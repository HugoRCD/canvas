<script setup lang="ts">
import { useElementSize } from '@vueuse/core'
import type { Ref } from 'vue'

defineProps({
  as: {
    type: String,
    default: 'div',
  },
})

const container = ref()

const content = ref()

onMounted(() => {
  content.value = container.value?.children[0]
})

const { height: targetHeight } = useElementSize(content, undefined, {
  box: 'border-box',
})

const isActive = inject('isActive') as Ref<boolean>

const height = computed(() => (isActive.value ? targetHeight.value : 0))
</script>

<template>
  <component
    :is="as"
    ref="container"
    :style="{ height: `${height}px` }"
  >
    <slot />
  </component>
</template>
