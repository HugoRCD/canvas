<script setup lang="ts">
defineProps({
  padded: {
    type: Boolean,
    default: true,
  },
});
</script>

<template>
  <div class="card mx-auto" :class="{ 'p-6': padded }">
    <slot />
  </div>
</template>

<style scoped></style>
