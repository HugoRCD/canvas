<script setup lang="ts">
import AppLayout from "~/components/layout/AppLayout.vue";

definePageMeta({
  name: "Projects",
  title: "Projects",
  path: "/projects",
  description: "Projects",
});
</script>

<template>
  <AppLayout page="projects">
    <ProjectList class="my-8" />
  </AppLayout>
</template>
