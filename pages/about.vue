<script setup lang="ts">
import experiences from "~/data/about";
import stack from "~/data/stack";

definePageMeta({
  name: "About",
  title: "About",
});
</script>

<template>
  <LayoutInfoWrapper page="about">
    <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div class="flex justify-center">
        <SpotlightCard mode="after" from="rgba(255,255,255,0.1)" :size="400" class="group w-64 rounded-2xl border border-white/10 bg-white/5 p-2 pb-4">
          <div class="relative">
            <NuxtImg
              width="256"
              src="/assets/hugo-richard-dark.webp"
              class="absolute inset-0 h-64 w-64 scale-110 rounded-xl object-cover blur-xl grayscale saturate-200 transition-all duration-300 group-hover:blur-[32px] group-hover:grayscale-0"
              alt="Hugo Richard Profile Picture"
              aria-label="Hugo Richard Profile Picture"
            />
            <NuxtImg
              width="256"
              src="/assets/hugo-richard-dark.webp"
              class="relative h-64 w-64 rounded-xl object-cover grayscale transition-all duration-300 group-hover:grayscale-0"
              alt="Hugo Richard Profile Picture"
              aria-label="Hugo Richard Profile Picture"
            />
          </div>
        </SpotlightCard>
      </div>
      <div class="flex flex-col gap-3 sm:ml-4">
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
        {{ $t("about.stack") }}
      </h3>
      <div class="flex flex-wrap gap-10">
        <div v-for="item in stack" :key="item.name">
          <UTooltip :text="item.name">
            <NuxtLink :to="item.link" target="_blank" :aria-label="item.name + ' link'">
              <component
                :is="item.logo"
                class="w-10 h-10 text-main hover:scale-110 transition-transform duration-300"
                :class="item.logo.includes('Color') ? '' : 'text-main'"
                :fontControlled="false"
                :alt="item.name + ' logo'"
                :filled="item.logo.includes('Color')"
                :aria-label="item.name + ' logo'"
              />
            </NuxtLink>
          </UTooltip>
        </div>
      </div>
    </div>
  </LayoutInfoWrapper>
</template>
