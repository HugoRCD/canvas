<script setup lang="ts">
import experiences from "~/data/about";
import { techStack, productivityStack, designStack } from "~/data/stack";
import StackItem from "~/components/about/StackItem.vue";

definePageMeta({
  name: "About",
  title: "About",
});
</script>

<template>
  <LayoutInfoWrapper page="about">
    <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <AboutProfilePicture />
      <AboutIntro />
    </div>
    <Divider class="my-6" />
    <AboutExperience />
    <Divider class="my-6" />
    <div class="flex flex-col gap-3">
      <h3 class="text-muted text-lg">
        {{ $t("about.stack") }}
      </h3>
      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <AboutStackItem v-for="item in techStack" :key="item.name" :item="item" />
      </div>
    </div>
  </LayoutInfoWrapper>
</template>
