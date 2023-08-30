<script setup lang="ts">
import data from "~/data/about.json";
import { About } from "~/types/About";

definePageMeta({
  name: "About",
  title: "About",
});

const experiences = ref<About>(data.experience);
const education = ref<About>(data.education);

const colorMode = useColorMode();
const theme = computed(() => (colorMode.preference === "dark" ? "dark" : "light"));
</script>

<template>
  <LayoutInfoWrapper page="about">
    <NuxtImg
      width="256"
      :src="'/assets/hugo-richard-' + theme + '.webp'"
      class="rounded-lg h-64 w-64 object-cover mt-4"
      alt="Hugo Richard Profile Picture"
      aria-label="Hugo Richard Profile Picture"
    />
    <div class="flex flex-col gap-3 mt-4">
      <h3 class="text-muted text-lg">Intro</h3>
      <div class="flex flex-col gap-4 text-primary">
        <p>
          {{ $t("about.intro.part1") }}
        </p>
        <p>
          {{ $t("about.intro.part2") }}
        </p>
        <p>
          {{ $t("about.intro.part3") }}
        </p>
        <p>
          {{ $t("about.intro.part4") }}
        </p>
      </div>
    </div>
    <div class="linebreak my-6"></div>
    <div class="flex flex-col gap-3">
      <h3 class="text-muted text-lg">
        {{ $t("about.experience") }}
      </h3>
      <div class="flex flex-col gap-4 text-primary">
        <div v-for="experience in experiences[$i18n.locale as 'en' | 'fr']" :key="experience.title">
          <h4 class="text-primary font-semibold">
            {{ experience.title }}
          </h4>
          <div class="flex gap-1 text-muted">
            <p>
              {{ experience.date }}
            </p>
            <span class="mx-1"> / </span>
            <p>
              {{ experience.company }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="linebreak my-6"></div>
    <div class="flex flex-col gap-3">
      <h3 class="text-muted text-lg">
        {{ $t("about.education") }}
      </h3>
      <div class="flex flex-col gap-4 text-primary">
        <div v-for="education in education[$i18n.locale as 'en' | 'fr']" :key="education.title">
          <h4 class="text-primary font-semibold">
            {{ education.title }}
          </h4>
          <div class="flex gap-1 text-muted">
            <p>
              {{ education.date }}
            </p>
            <span class="mx-1"> / </span>
            <p>
              {{ education.company }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </LayoutInfoWrapper>
</template>
