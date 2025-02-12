<script setup lang="ts">
import projects from '~/data/projects'

const localePath = useLocalePath()
</script>

<template>
  <div class="flex w-full flex-col gap-4">
    <NuxtLink
      v-for="project in projects.filter(() => project.featured)"
      :key="project.name"
      class="flex cursor-pointer items-center gap-2 rounded-lg px-4 py-2 hover:bg-secondary"
      :to="project.release === 'soon' ? localePath('/') : project.link"
      :aria-label="project.name + ' project link'"
      :target="project.release === 'soon' ? '_self' : '_blank'"
    >
      <span class="whitespace-nowrap">
        {{ project.name }}
      </span>
      <div class="mx-2 h-[0.1px] w-full bg-muted" />
      <span class="whitespace-nowrap text-muted">
        {{ project.release === "soon" ? $t("global.soon") + "..." : project.release }}
      </span>
    </NuxtLink>
    <div class="mt-4 flex justify-center">
      <button
        class="btn-primary"
        @click="useRouter().push('/works')"
      >
        {{ $t("global.see_more") }}
      </button>
    </div>
  </div>
</template>
