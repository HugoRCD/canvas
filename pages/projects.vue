<script setup lang="ts">
import AppLayout from "~/components/layout/AppLayout.vue";

definePageMeta({
  name: "Projects",
  title: "Projects",
});
</script>

<template>
  <AppLayout page="projects">
    <ProjectList class="my-8" />
  </AppLayout>
</template>
