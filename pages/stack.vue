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
      <h1 class="text-2xl font-bold">
        {{ $t("stack.name") }}
      </h1>
      <h2 class="text-lg text-muted">
        {{ $t("stack.description") }}
      </h2>
      <div class="linebreak my-6"></div>
      <div class="flex flex-col gap-10">
        <div>
          <h3 class="text-muted mb-2">
            {{ $t("stack.languages") }}
          </h3>
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            <NuxtLink
              v-for="language in stack.filter((item) => item.type === 'language')"
              :key="language.name"
              :to="language.link"
              target="_blank"
              :aria-label="language.name + ' link'"
              class="card flex flex-col items-center justify-center gap-2 p-4 rounded-lg bg-secondary"
            >
              <component
                :is="language.logo"
                class="w-10 h-10 text-primary"
                :class="language.logo.includes('Color') ? '' : 'text-primary'"
                :fontControlled="false"
                :alt="language.name + ' logo'"
                :filled="language.logo.includes('Color')"
                :aria-label="language.name + ' logo'"
              />
              <span class="text-primary font-semibold">
                {{ language.name }}
              </span>
              <!--              <span class="kbd">
                {{ language.tag }}
              </span>-->
            </NuxtLink>
          </div>
        </div>
        <div>
          <h3 class="text-muted mb-2">
            {{ $t("stack.software") }}
          </h3>
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            <NuxtLink
              v-for="software in stack.filter((item) => item.type === 'software')"
              :key="software.name"
              :to="software.link"
              target="_blank"
              :aria-label="software.name + ' link'"
              class="card flex flex-col items-center justify-center gap-2 p-4 rounded-lg bg-secondary"
            >
              <component
                :is="software.logo"
                class="w-10 h-10 text-primary"
                :fontControlled="false"
                :alt="software.name + ' logo'"
                :filled="software.logo.includes('Color')"
                :aria-label="software.name + ' logo'"
              />
              <span class="text-primary font-semibold">
                {{ software.name }}
              </span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
