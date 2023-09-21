<script setup lang="ts">
import projects from "~/data/projects";
import { Project } from "~/types/Project";

const props = defineProps({
  featured: {
    type: Boolean,
    default: false,
  },
});

const filteredProjects = computed<Project[]>(() => {
  if (props.featured) return projects.filter((project) => project.featured);
  return projects;
});
</script>

<template>
  <div>
    <div class="flex flex-col gap-4 w-full" v-if="featured">
      <NuxtLink
        v-for="project in filteredProjects"
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
        <button class="btn-primary" @click="useRouter().push('/projects')">{{ $t("global.see_more") }}</button>
      </div>
    </div>
    <div class="grid auto-rows-fr grid-cols-1 sm:grid-cols-2 gap-4 w-full" v-else>
      <NuxtLink
        v-for="project in filteredProjects"
        :key="project.name"
        class="card group flex flex-col gap-2 cursor-pointer px-4 py-2 rounded-lg hover:bg-secondary hover:text-main"
        :to="project.release === 'soon' ? '/' : project.link"
        :aria-label="project.name + ' project link'"
        :target="project.release === 'soon' ? '_self' : '_blank'"
      >
        <div class="flex flex-col gap-2">
          <div class="w-full bg-main rounded-lg flex items-center justify-center h-24">
            <component
              v-if="project.release !== 'soon'"
              :is="project.logo"
              class="text-white w-10 h-10"
              :fontControlled="false"
              :alt="project.name + ' logo'"
              :aria-label="project.name + ' logo'"
            />
            <div v-else class="text-white font-semibold">{{ $t("global.soon") }}...</div>
          </div>
          <div class="flex items-center gap-2">
            <span class="whitespace-nowrap font-semibold">
              {{ project.name }}
            </span>
            <div class="w-full h-[0.1px] mx-2 bg-muted"></div>
            <span class="text-muted whitespace-nowrap">
              {{ project.release === "soon" ? "" : project.release }}
            </span>
          </div>
        </div>
        <div class="">
          <span class="text-muted">
            {{ project.description.short[$i18n.locale] }}
          </span>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped></style>
