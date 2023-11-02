<script setup lang="ts">
import { servicesAndToolstack, pricing } from "~/data/faq";
const { locale } = useI18n();

const items = computed(() => {
  return [
    {
      label: servicesAndToolstack.title[locale.value as "en" | "fr"],
      slot: "services-and-toolstack",
    },
    {
      label: pricing.title[locale.value as "en" | "fr"],
      slot: "pricing",
    },
  ];
});
</script>

<template>
  <div class="flex flex-col items-center justify-center space-y-8">
    <div class="flex flex-col items-center justify-center gap-2">
      <h3 class="text-4xl font-bold font-testimonial text-white-shadow">
        {{ $t("faq.title") }}
      </h3>
      <p class="text-sm text-center text-muted">
        {{ $t("faq.description") }}
      </p>
    </div>
    <div>
      <UTabs :items="items" orientation="horizontal" :ui="{ list: { marker: { rounded: 'rounded-full' }, rounded: 'rounded-full' } }">
        <template #services-and-toolstack>
          <FAQ :questions="servicesAndToolstack.faq" class="max-w-lg mt-6" />
        </template>
        <template #pricing>
          <FAQ :questions="pricing.faq" class="max-w-lg mt-6" />
        </template>
      </UTabs>
    </div>
  </div>
</template>

<style scoped></style>
