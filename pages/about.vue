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
    <div class="flex justify-center">
      <SpotlightCard mode="after" from="rgba(255,255,255,0.1)" :size="400" class="group w-64 rounded-2xl border border-white/10 bg-white/5 p-2 pb-4">
        <div class="relative">
          <NuxtImg
            width="256"
            :src="'/assets/hugo-richard-' + theme + '.webp'"
            class="absolute inset-0 h-64 w-64 scale-110 rounded-xl object-cover blur-xl grayscale saturate-200 transition-all duration-300 group-hover:blur-[32px] group-hover:grayscale-0"
            alt="Hugo Richard Profile Picture"
            aria-label="Hugo Richard Profile Picture"
          />
          <NuxtImg
            width="256"
            :src="'/assets/hugo-richard-' + theme + '.webp'"
            class="relative h-64 w-64 rounded-xl object-cover grayscale transition-all duration-300 group-hover:grayscale-0"
            alt="Hugo Richard Profile Picture"
            aria-label="Hugo Richard Profile Picture"
          />
        </div>
      </SpotlightCard>
    </div>
    <div class="flex flex-col gap-3 mt-4">
      <h3 class="text-muted text-lg">Intro</h3>
      <div class="flex flex-col gap-4 text-main">
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
      <div class="flex flex-col gap-4 text-main">
        <div v-for="experience in experiences[$i18n.locale as 'en' | 'fr']" :key="experience.title">
          <h4 class="text-main font-semibold">
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
      <div class="flex flex-col gap-4 text-main">
        <div v-for="education in education[$i18n.locale as 'en' | 'fr']" :key="education.title">
          <h4 class="text-main font-semibold">
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
