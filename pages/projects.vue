<script setup lang="ts">
import projects from "~/data/projects";

definePageMeta({
  name: "Projects",
  title: "Projects",
});
</script>

<template>
  <LayoutInfoWrapper page="projects">
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <SpotlightCard v-for="project in projects" :key="project.name" white>
        <NuxtLink :aria-label="project.name + ' project link'" :to="project.link" target="_blank" class="cursor-pointer">
          <div
            class="relative w-full rounded-2xl bg-gradient-to-b from-white/5 to-white/10 p-2 shadow-2xl shadow-white/10 ring-1 ring-white/10 backdrop-blur-sm lg:rounded-3xl"
          >
            <NuxtImg
              width="1536"
              :alt="project.name + ' project image'"
              class="h-auto object-cover rounded-xl border border-white/10 shadow-md shadow-zinc-950/50 lg:rounded-2xl"
              :src="project.image"
              :aria-label="project.name + ' project image'"
            />
            <div class="absolute flex items-center justify-center rounded-xl px-4 py-2 gap-2 border border-white/10 shadow-md backdrop-blur-md bottom-4 left-4">
              <component
                :is="project.logo"
                v-if="project.release !== 'soon'"
                :alt="project.name + ' logo'"
                :aria-label="project.name + ' logo'"
                :fontControlled="false"
                class="text-white w-6 h-6 z-10"
              />
              <div class="flex items-center gap-2">
                <span class="whitespace-nowrap font-semibold">
                  {{ project.name }}
                </span>
                <span class="text-muted whitespace-nowrap">
                  {{ project.release === "soon" ? $t("global.soon") + "..." : project.release }}
                </span>
              </div>
            </div>
          </div>
        </NuxtLink>
      </SpotlightCard>
    </div>
  </LayoutInfoWrapper>
</template>
