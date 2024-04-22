<script setup lang="ts">
import { EnvelopeIcon } from '@heroicons/vue/24/outline'
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-4 sm:gap-2">
    <div class="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-2">
      <UTooltip
        :text="$t('home.hero.email')"
        :shortcuts="['⌘', 'O']"
      >
        <SpotlightButton>
          <NuxtLink
            class="white-gradient relative flex items-center justify-center gap-2 transition-all duration-200"
            to="/contact"
          >
            {{ $t("home.hero.contact") }}
            <EnvelopeIcon class="size-5 text-white/80" />
          </NuxtLink>
        </SpotlightButton>
      </UTooltip>
      <MeetingButton />
    </div>
    <SpotlightButton>
      <NuxtLink
        class="white-gradient relative flex items-center justify-center gap-2 transition-all duration-200"
        to="https://hrcd.lemonsqueezy.com/checkout/buy/bc114e94-7886-40a7-8497-63adec2c82fb"
      >
        {{ $t("home.hero.buy_this_template") }}
      </NuxtLink>
    </SpotlightButton>
  </div>
</template>

<style scoped></style>
