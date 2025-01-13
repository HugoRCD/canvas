<script setup lang="ts">
defineProps<{
  project: {
    name: string
    release: string
    image: string
    link: string
  }
}>()
const img = useImage()
</script>

<template>
  <NuxtLink
    :aria-label="project.name + ' project link'"
    :to="project.link"
    target="_blank"
    class="group relative flex cursor-pointer flex-col gap-1 rounded-lg border border-white/10 bg-zinc-900/80 p-1 shadow-2xl shadow-zinc-950/50 backdrop-blur-sm"
  >
    <div class="flex gap-1 px-1 py-[2px]">
      <div class="size-2 rounded-full bg-red-500/90 transition-all duration-300 group-hover:bg-red-500/90 sm:bg-white/10" />
      <div class="size-2 rounded-full bg-yellow-500/90 transition-all duration-300 group-hover:bg-yellow-500/90 sm:bg-white/10" />
      <div class="size-2 rounded-full bg-green-500/90 transition-all duration-300 group-hover:bg-green-500/90 sm:bg-white/10" />
    </div>
    <div class="flex h-56 justify-center overflow-hidden rounded-lg">
      <NuxtImg
        :placeholder="img(`${project.image}`)"
        width="1536"
        :alt="project.name + ' project image'"
        class="h-full rounded-lg object-cover transition-all duration-300 hover:scale-105"
        :src="project.image"
        :aria-label="project.name + ' project image'"
      />
    </div>
    <div class="absolute bottom-0 flex w-full justify-center">
      <div class="rounded-t-lg border-x border-t border-white/10 border-b-transparent px-4 py-[5px] shadow-md backdrop-blur-md sm:w-2/3">
        <div class="flex items-center justify-between gap-2">
          <div class="flex items-center gap-2">
            <div class="flex items-center gap-2">
              <span class="whitespace-nowrap text-sm font-semibold text-white/90">
                {{ project.name }}
              </span>
              <span class="whitespace-nowrap text-xs text-neutral-500">
                {{ project.release === "soon" ? $t("global.soon") + "..." : project.release }}
              </span>
            </div>
          </div>
          <div
            class="flex items-center justify-center rounded-full border border-transparent p-1 shadow-md backdrop-blur-md transition-all duration-500 group-hover:-rotate-45 group-hover:border-white/10"
          >
            <UIcon
              name="heroicons:arrow-right"
              class="size-3 text-white"
            />
          </div>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>
