<script setup lang="ts">
definePageMeta({
  name: "Writing",
  title: "Writing",
  path: "/writing",
});
</script>

<template>
  <div class="flex flex-col max-w-3xl mx-auto gap-4 p-6">
    <div class="max-w-3xl">
      <h1 class="text-primary text-2xl font-testimonial">{{ $t("writing.title") }}</h1>
      <p class="text-muted">{{ $t("writing.description") }}</p>
      <div class="linebreak my-6"></div>
    </div>
  </div>
</template>
