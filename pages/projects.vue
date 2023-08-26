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
      <ProjectList />
    </div>
  </div>
</template>
