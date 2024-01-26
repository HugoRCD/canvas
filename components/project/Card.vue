<script setup lang="ts">
import type { Project } from "~/data/projects";
import type { PropType } from "vue";

defineProps({
  project: {
    type: Object as PropType<Project>,
    required: true,
  },
});
const img = useImage();
</script>

<template>
  <NuxtLink
    :aria-label="project.name + ' project link'"
    :to="project.link"
    target="_blank"
    class="relative group cursor-pointer flex flex-col gap-1 bg-zinc-900/80 rounded-lg p-1 shadow-2xl shadow-zinc-950/50 border border-white/10 backdrop-blur-sm"
  >
    <div class="flex gap-1 px-1 py-[2px]">
      <div class="rounded-full w-2 h-2 bg-red-500/90 sm:bg-white/10 group-hover:bg-red-500/90 transition-all duration-300" />
      <div class="rounded-full w-2 h-2 bg-yellow-500/90 sm:bg-white/10 group-hover:bg-yellow-500/90 transition-all duration-300" />
      <div class="rounded-full w-2 h-2 bg-green-500/90 sm:bg-white/10 group-hover:bg-green-500/90 transition-all duration-300" />
    </div>
    <div class="flex justify-center h-56 overflow-hidden rounded-lg">
      <NuxtImg
        :placeholder="img(`${project.image}`)"
        width="1536"
        :alt="project.name + ' project image'"
        class="h-full object-cover rounded-lg hover:scale-105 transition-all duration-300"
        :src="project.image"
        :aria-label="project.name + ' project image'"
      />
    </div>
    <div class="absolute w-full bottom-0 flex justify-center">
      <div class="sm:w-2/3 border-t border-r border-l border-white/10 border-b-transparent shadow-md backdrop-blur-md rounded-t-lg px-4 py-[5px]">
        <div class="flex gap-2 items-center justify-between">
          <div class="flex items-center gap-2">
            <component
              :is="project.logo"
              v-if="project.name !== 'Sekoïa'"
              :alt="project.name + ' logo'"
              :aria-label="project.name + ' logo'"
              :font-controlled="false"
              class="w-5 h-5 text-white/90"
            />
            <div class="flex items-center gap-2">
              <span class="text-sm font-semibold text-white/90 whitespace-nowrap">
                {{ project.name }}
              </span>
              <span class="text-neutral-500 whitespace-nowrap text-xs">
                {{ project.release === "soon" ? $t("global.soon") + "..." : project.release }}
              </span>
            </div>
          </div>
          <div
            class="rounded-full border border-transparent group-hover:border-white/10 shadow-md backdrop-blur-md p-1 flex items-center justify-center group-hover:-rotate-45 transition-all duration-500"
          >
            <UIcon
              name="i-heroicons-arrow-right"
              class="w-3 h-3 text-white"
            />
          </div>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<style scoped lang="scss"></style>
