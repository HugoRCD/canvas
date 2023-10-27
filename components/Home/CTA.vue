<script setup lang="ts">
import { EnvelopeIcon } from "@heroicons/vue/24/outline";
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
  <div class="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-2">
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
</template>

<style scoped></style>
