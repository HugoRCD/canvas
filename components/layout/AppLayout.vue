<script setup lang="ts">
defineProps({
  page: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="flex flex-col max-w-3xl mx-auto gap-4 p-6">
    <div class="max-w-3xl">
      <h1 class="text-2xl font-bold font-testimonial">{{ $t(`${page}.title`) }}</h1>
      <h2 class="text-lg text-muted">{{ $t(`${page}.description`) }}</h2>
      <div class="linebreak my-6"></div>
      <slot />
    </div>
  </div>
</template>

<style scoped></style>
