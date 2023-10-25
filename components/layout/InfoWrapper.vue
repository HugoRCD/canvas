<script setup lang="ts">
defineProps({
  page: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="flex flex-col max-w-4xl mx-auto gap-4 p-6">
    <div>
      <h1 class="text-4xl font-bold font-testimonial text-white-shadow">{{ $t(`${page}.title`) }}</h1>
      <h2 class="text-lg text-muted">{{ $t(`${page}.description`) }}</h2>
      <Divider class="my-6" />
      <slot />
    </div>
  </div>
</template>

<style scoped></style>
