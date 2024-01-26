<script setup lang="ts">
import projects from "~/data/projects";
</script>

<template>
  <div class="flex flex-col gap-6 w-full">
    <h3 class="text-xl font-bold font-testimonial text-white-shadow">
      {{ $t("navigation.works") }}
    </h3>
    <div class="flex flex-col gap-4 w-full">
      <NuxtLink
        v-for="project in projects.filter((work) => work.featured)"
        :key="project.name"
        role="link"
        class="flex items-center gap-2 cursor-pointer px-4 py-2 rounded-lg hover:bg-secondary hover:text-main"
        :to="project.release === 'soon' ? '/' : project.link"
        :aria-label="'go to ' + project.name + ' project website'"
        :target="project.release === 'soon' ? '_self' : '_blank'"
      >
        <span class="whitespace-nowrap">
          {{ project.name }}
        </span>
        <div class="w-full h-[0.1px] mx-2 bg-muted" />
        <span class="text-muted whitespace-nowrap">
          {{ project.release === "soon" ? $t("global.soon") + "..." : project.release }}
        </span>
      </NuxtLink>
    </div>
    <div @click="useRouter().push('/works')">
      <span class="text-sm font-testimonial text-white-shadow cursor-pointer">
        {{ $t("global.see_more") }}
      </span>
    </div>
  </div>
</template>

<style scoped></style>
