<script setup lang="ts">
import projects from "~/data/projects";
</script>

<template>
  <div class="flex flex-col gap-4 w-full">
    <h3 class="text-muted">
      {{ $t("navigation.works") }}
    </h3>
    <div class="flex flex-col gap-4 w-full">
      <NuxtLink
        v-for="project in projects.filter((work) => work.featured)"
        :key="project.name"
        class="flex items-center gap-2 cursor-pointer px-4 py-2 rounded-lg hover:bg-secondary hover:text-main"
        :to="project.release === 'soon' ? '/' : project.link"
        :aria-label="project.name + ' project link'"
        :target="project.release === 'soon' ? '_self' : '_blank'"
      >
        <span class="whitespace-nowrap">
          {{ project.name }}
        </span>
        <div class="w-full h-[0.1px] mx-2 bg-muted"></div>
        <span class="text-muted whitespace-nowrap">
          {{ project.release === "soon" ? $t("global.soon") + "..." : project.release }}
        </span>
      </NuxtLink>
      <div class="flex justify-center mt-4">
        <button class="btn-primary" @click="useRouter().push('/works')">{{ $t("global.see_more") }}</button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
