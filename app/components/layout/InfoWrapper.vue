<script setup lang="ts">
defineProps({
  page: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <section class="mx-auto mt-4 flex max-w-4xl flex-col p-7 sm:mt-20">
    <h1 class="font-testimonial text-white-shadow text-center text-4xl font-bold">
      {{ $t(`${page}.title`) }}
    </h1>
    <h2 class="text-center text-lg font-light italic text-muted">
      {{ $t(`${page}.description`) }}
    </h2>
    <div
      v-if="page === 'contact'"
      class="my-3 flex justify-center"
    >
      <SettingsAvailability background />
    </div>
    <Divider class="mb-8 mt-2" />
    <slot />
  </section>
</template>

<style scoped></style>
