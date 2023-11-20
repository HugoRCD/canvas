<script setup lang="ts">
import { techStack, productivityStack, designStack } from "~/data/stack";

definePageMeta({
  name: "About",
  title: "About",
});

defineOgImage({ url: "https://hrcd.fr/preview.webp", width: 1200, height: 630, alt: "Home image" });
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
      <div class="flex flex-col gap-1 mb-6">
        <h3 class="text-3xl text-white-shadow font-testimonial font-bold">
          {{ $t("about.stack") }}
        </h3>
        <p class="text-sm text-muted">
          {{ $t("about.stack_description") }}
        </p>
      </div>
      <AboutStackSection stack="development" :items="techStack" />
      <Divider class="my-4" />
      <AboutStackSection stack="productivity" :items="productivityStack" />
      <Divider class="my-4" />
      <AboutStackSection stack="design" :items="designStack" />
    </div>
  </LayoutInfoWrapper>
</template>
