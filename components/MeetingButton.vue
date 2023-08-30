<script setup lang="ts">
import { CalendarDaysIcon } from "@heroicons/vue/24/outline";
const meetingLink = useRuntimeConfig().public.meetingLink;
</script>

<template>
  <div class="flex gap-4 sm:gap-2 mt-4">
    <NuxtLink class="btn-primary" :to="meetingLink">
      {{ $t("home.hero.meeting") }}
      <CalendarDaysIcon class="w-5 h-5" />
    </NuxtLink>
  </div>
</template>

<style scoped></style>
