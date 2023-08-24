<script setup lang="ts">
import { Project } from "~/types/Project";
import data from "~/data/projects.json";

const projects = ref<Project[]>(data.projects);

definePageMeta({
  title: "Home",
  name: "Home",
  path: "/",
});
</script>

<template>
  <div class="flex flex-col gap-4 items-center justify-center p-6">
    <Hero />
    <div class="linebreak my-6"></div>
    <div class="flex flex-col max-w-3xl gap-8">
      <div class="flex flex-col gap-4">
        <h3 class="text-muted">
          {{ $t("navigation.about") }}
        </h3>
        <div class="flex flex-col gap-4 text-primary font-light">
          <p>
            {{ $t("home.about.part1") }}
          </p>
          <p>
            {{ $t("home.about.part2") }}
          </p>
          <p>
            {{ $t("home.about.part3") }}
          </p>
        </div>
      </div>
      <div class="flex flex-col gap-4">
        <h3 class="text-muted">
          {{ $t("navigation.projects") }}
        </h3>
        <div class="flex flex-col gap-2 w-full">
          <NuxtLink
            v-for="project in projects"
            :key="project.name"
            class="flex items-center gap-2 cursor-pointer px-4 py-2 rounded-lg hover:bg-secondary hover:text-primary"
            :to="project.release === 'soon' ? '' : project.link"
            :aria-label="project.name + ' project link'"
            target="_blank"
          >
            <span class="whitespace-nowrap">
              {{ project.name }}
            </span>
            <!--            <span class="text-muted">
              {{ project.description.short[$i18n.locale] }}
            </span>-->
            <div class="w-full h-[0.1px] mx-2 bg-muted"></div>
            <span class="text-muted whitespace-nowrap">
              {{ project.release === "soon" ? $t("global.soon") + "..." : project.release }}
            </span>
          </NuxtLink>
          <div class="flex justify-center">
            <button class="btn-primary mt-4" @click="useRouter().push('/projects')">{{ $t("global.see_more") }}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
