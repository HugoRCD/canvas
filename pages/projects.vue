<script setup lang="ts">
import ProjectList from "~/components/ProjectList.vue";

definePageMeta({
  name: "Projects",
  title: "Projects",
  path: "/projects",
  description: "Projects",
});
</script>

<template>
  <div class="flex flex-col max-w-3xl mx-auto gap-4 p-6">
    <div class="max-w-3xl">
      <h1 class="text-2xl font-bold font-testimonial">{{ $t("projects.title") }}</h1>
      <h2 class="text-lg text-muted">{{ $t("projects.description") }}</h2>
      <div class="linebreak my-6"></div>
      <ProjectList class="my-8" />
    </div>
  </div>
</template>
