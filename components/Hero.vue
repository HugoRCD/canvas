<script setup lang="ts">
import { EnvelopeIcon, Square2StackIcon } from "@heroicons/vue/24/outline";
import { Social } from "~/types/Social";
import data from "~/data/socials.json";
import MeetingButton from "~/components/MeetingButton.vue";

const socials = ref<Social[]>(data.socials);

const colorMode = useColorMode();
const theme = computed(() => (colorMode.preference === "dark" ? "dark" : "light"));
</script>

<template>
  <div class="flex flex-col items-center gap-2">
    <div class="flex items-center justify-between">
      <ClientOnly>
        <NuxtImg
          width="96"
          :src="'/assets/hugo-richard-' + theme + '.webp'"
          class="rounded-full h-24 w-24 object-cover border-2 border-gray-800/30"
          alt="Hugo Richard Profile Picture"
          aria-label="Hugo Richard Profile Picture"
        />
        <template #fallback>
          <div class="rounded-full h-24 w-24 object-cover border-2 border-gray-800/30"></div>
        </template>
      </ClientOnly>
    </div>
    <h2 class="text-2xl text-primary">
      <span>Hugo Richard</span>
    </h2>
    <h3>
      <span class="text-xl text-muted">
        <span class="font-testimonial">{{ $t("home.hero.job.part1") }}</span> / {{ $t("home.hero.job.part2") }}
      </span>
    </h3>
    <SettingsAvailability />
    <div class="social flex items-center justify-center gap-6 sm:gap-10 mt-3">
      <NuxtLink
        v-for="social in socials"
        :key="social.name"
        :to="social.link"
        target="_blank"
        class="flex items-center justify-center"
        :aria-label="'Go to ' + social.name + ' profile'"
      >
        <component
          :is="social.logo"
          class="w-5 h-5 text-muted hover:text-primary transition-colors duration-300"
          :fontControlled="false"
          :alt="social.name + ' logo'"
          :aria-label="social.name + ' logo'"
        />
      </NuxtLink>
    </div>
    <div class="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-2 mt-4">
      <NuxtLink class="btn-primary" to="/contact">
        {{ $t("home.hero.contact") }}
        <EnvelopeIcon class="w-5 h-5" />
      </NuxtLink>
      <button class="btn-primary" @click="copyToClipboard('hrichard206@gmail.com')">
        {{ $t("home.hero.email") }}
        <Square2StackIcon class="w-5 h-5" />
      </button>
    </div>
    <MeetingButton class="flex items-center justify-center" />
  </div>
</template>

<style scoped></style>
