<script setup lang="ts">
import projects, { Project } from "~/data/projects";

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
    <div class="flex justify-center gap-4 flex-wrap" v-else>
      <NuxtLink v-for="project in filteredProjects" :key="project.name" :to="project.link" target="_blank" :aria-label="project.name + ' project link'">
        <SpotlightCard
          mode="after"
          from="rgba(255,255,255,0.1)"
          :size="400"
          class="group cursor-pointer w-80 sm:w-64 rounded-2xl border border-white/10 bg-white/5 p-2 pb-4 h-72"
        >
          <div class="flex flex-col gap-2">
            <div class="relative w-full bg-main h-32 rounded-lg flex items-center justify-center overflow-hidden">
              <NuxtImg
                v-if="project.image"
                :src="project.image!"
                class="rounded-lg object-cover group-hover:scale-110 transition-all duration-300"
                alt="Project Image"
                aria-label="Project Image"
              />
              <div v-else class="bg-black/20 h-fit rounded-lg"></div>
              <div class="absolute inset-0 flex items-center justify-center">
                <div class="absolute inset-0 bg-black/20"></div>
                <component
                  v-if="project.release !== 'soon'"
                  :is="project.logo"
                  class="text-white w-10 h-10 z-10"
                  :fontControlled="false"
                  :alt="project.name + ' logo'"
                  :aria-label="project.name + ' logo'"
                />
                <div v-else class="text-white font-semibold z-10">{{ $t("global.soon") }}...</div>
              </div>
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
        </SpotlightCard>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped></style>
