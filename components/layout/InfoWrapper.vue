<script setup lang="ts">
defineProps({
  page: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <section class="flex flex-col max-w-4xl mx-auto p-6">
    <h1 class="text-4xl font-bold font-testimonial text-white-shadow">{{ $t(`${page}.title`) }}</h1>
    <h2 class="text-lg text-muted">{{ $t(`${page}.description`) }}</h2>
    <Divider class="mt-4 mb-8" />
    <slot />
  </section>
</template>

<style scoped></style>
