<script setup lang="ts">
import { EnvelopeIcon } from "@heroicons/vue/24/outline";
import socials from "~/data/socials";
import MeetingButton from "~/components/MeetingButton.vue";

defineShortcuts({
  meta_o: {
    usingInput: true,
    handler: () => {
      copyToClipboard("contact@hrcd.fr");
    },
  },
});
</script>

<template>
  <div class="flex flex-col items-center gap-2">
    <div class="flex items-center justify-between">
      <ClientOnly>
        <NuxtImg
          width="96"
          src="/assets/hugo-richard-dark.webp"
          class="rounded-full h-24 w-24 object-cover border-2 border-gray-800/30"
          alt="Hugo Richard Profile Picture"
          aria-label="Hugo Richard Profile Picture"
        />
        <template #fallback>
          <div class="rounded-full h-24 w-24 object-cover border-2 border-gray-800/30"></div>
        </template>
      </ClientOnly>
    </div>
    <h1 class="text-2xl text-white-shadow text-white-gradient">
      <span>Hugo Richard</span>
    </h1>
    <h2 class="text-center">
      <span class="text-xl text-muted">
        <span class="font-testimonial">{{ $t("home.hero.job.part1") }}</span> / {{ $t("home.hero.job.part2") }}
      </span>
    </h2>
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
          class="w-5 h-5 text-muted hover:text-main transition-colors duration-300"
          :fontControlled="false"
          :alt="social.name + ' logo'"
          :aria-label="social.name + ' logo'"
        />
      </NuxtLink>
    </div>
    <div class="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-2 mt-4">
      <UTooltip :text="$t('home.hero.email')" :shortcuts="['⌘', 'O']">
        <SpotlightButton>
          <NuxtLink
            class="relative bg-gradient-to-b from-white/25 to-white bg-clip-text font-mona text-lg font-medium text-transparent transition-all duration-200 flex items-center justify-center gap-2"
            to="/contact"
          >
            {{ $t("home.hero.contact") }}
            <EnvelopeIcon class="w-5 h-5 text-white/80" />
          </NuxtLink>
        </SpotlightButton>
      </UTooltip>
      <MeetingButton />
    </div>
  </div>
</template>

<style scoped></style>
