<script lang="ts" setup>
import { Stack } from "~/types/Stack";
import data from "~/data/stack.json";

const stack = ref<Stack[]>(data.stack as Stack[]);

definePageMeta({
  name: "Stack",
  title: "Stack",
  path: "/stack",
  description: "Stack",
});
</script>

<template>
  <div class="flex flex-col max-w-3xl mx-auto gap-4 p-6">
    <div class="max-w-3xl">
      <h1 class="text-2xl font-bold">{{ $t("stack.name") }}</h1>
      <h2 class="text-lg text-muted">{{ $t("stack.description") }}</h2>
      <div class="linebreak my-6"></div>
      <div class="flex flex-col gap-10">
        <div v-for="section in ['languages', 'software']" :key="section">
          <h3 class="text-muted mb-2">{{ $t(`stack.${section}`) }}</h3>
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            <NuxtLink
              v-for="item in stack.filter((item) => item.type === section)"
              :key="item.name"
              :to="item.link"
              target="_blank"
              :aria-label="item.name + ' link'"
              class="card flex flex-col items-center justify-center gap-2 p-4 rounded-lg bg-secondary"
            >
              <component
                :is="item.logo"
                class="w-10 h-10 text-primary"
                :class="item.logo.includes('Color') ? '' : 'text-primary'"
                :fontControlled="false"
                :alt="item.name + ' logo'"
                :filled="item.logo.includes('Color')"
                :aria-label="item.name + ' logo'"
              />
              <span class="text-primary font-semibold">{{ item.name }}</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
