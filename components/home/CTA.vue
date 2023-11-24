<script setup lang="ts">
import { EnvelopeIcon } from "@heroicons/vue/24/outline";
const localePath = useLocalePath();
</script>

<template>
  <div class="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-2">
    <UTooltip :text="$t('home.hero.email')" :shortcuts="['⌘', 'O']">
      <SpotlightButton>
        <NuxtLink class="relative white-gradient transition-all duration-200 flex items-center justify-center gap-2" :to="localePath({ name: 'contact' })">
          {{ $t("home.hero.contact") }}
          <EnvelopeIcon class="w-5 h-5 text-white/80" />
        </NuxtLink>
      </SpotlightButton>
    </UTooltip>
    <MeetingButton />
  </div>
</template>

<style scoped></style>
