<script setup lang="ts">
import { Project } from "~/types/Project";
import data from "~/data/projects.json";

const projects = ref<Project[]>(data.projects);

const props = defineProps({
  featured: {
    type: Boolean,
    default: false,
  },
});

const filteredProjects = computed<Project[]>(() => {
  if (props.featured) return projects.value.filter((project) => project.featured);
  return projects.value;
});
</script>

<template>
  <div>
    <div class="flex flex-col gap-4 w-full" v-if="featured">
      <NuxtLink
        v-for="project in filteredProjects"
        :key="project.name"
        class="flex items-center gap-2 cursor-pointer px-4 py-2 rounded-lg hover:bg-secondary hover:text-primary"
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
    <div class="flex flex-col gap-4 w-full" v-else>
      <NuxtLink
        v-for="project in filteredProjects"
        :key="project.name"
        class="group flex flex-col gap-2 cursor-pointer px-4 py-2 rounded-lg hover:bg-secondary hover:text-primary"
        :to="project.release === 'soon' ? '/' : project.link"
        :aria-label="project.name + ' project link'"
        :target="project.release === 'soon' ? '_self' : '_blank'"
      >
        <div class="flex items-center gap-2 cursor-pointer">
          <component
            v-if="project.release !== 'soon'"
            :is="project.logo"
            class="text-muted"
            :class="project.name === 'Helpr' ? 'w-7 h-7' : 'w-10 h-10'"
            :fontControlled="false"
            :alt="project.name + ' logo'"
            :aria-label="project.name + ' logo'"
          />
          <span class="whitespace-nowrap">
            {{ project.name }}
          </span>
          <div class="w-full h-[0.1px] mx-2 bg-muted"></div>
          <span class="text-muted whitespace-nowrap">
            {{ project.release === "soon" ? $t("global.soon") + "..." : project.release }}
          </span>
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
