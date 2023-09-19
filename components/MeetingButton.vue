<script setup lang="ts">
import { CalendarDaysIcon } from "@heroicons/vue/24/outline";
const meetingLink = useRuntimeConfig().public.meetingLink;
</script>

<template>
  <div class="flex gap-4 sm:gap-2">
    <SpotlightButton>
      <NuxtLink
        class="relative bg-gradient-to-b from-white/25 to-white bg-clip-text font-mona text-lg font-medium text-transparent transition-all duration-200 flex items-center justify-center gap-2"
        :to="meetingLink"
      >
        {{ $t("home.hero.meeting") }}
        <CalendarDaysIcon class="w-5 h-5 text-white/80" />
      </NuxtLink>
    </SpotlightButton>
  </div>
</template>

<style scoped></style>
