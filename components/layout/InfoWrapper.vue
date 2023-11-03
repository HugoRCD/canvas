<script setup lang="ts">
defineProps({
  page: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <section class="flex flex-col max-w-4xl mx-auto p-7 mt-4 sm:mt-20">
    <h1 class="text-4xl text-center font-bold font-testimonial text-white-shadow">{{ $t(`${page}.title`) }}</h1>
    <h2 class="text-lg text-center font-light italic text-muted">{{ $t(`${page}.description`) }}</h2>
    <div class="flex justify-center my-3" v-if="page === 'contact'">
      <SettingsAvailability background />
    </div>
    <Divider class="mt-2 mb-8" />
    <slot />
  </section>
</template>

<style scoped></style>
