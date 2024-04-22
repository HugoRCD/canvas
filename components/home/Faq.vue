<script setup lang="ts">
import { services, pricing, personal } from '~/data/faq'
const { locale } = useI18n()

const items = computed(() => {
  return [
    {
      label: services.title[locale.value as 'en' | 'fr'],
      slot: 'services',
    },
    {
      label: pricing.title[locale.value as 'en' | 'fr'],
      slot: 'pricing',
    },
    {
      label: personal.title[locale.value as 'en' | 'fr'],
      slot: 'personnal',
    },
  ]
})

const ui = {
  list: {
    base: 'gap-4',
    background: 'bg-transparent dark:bg-transparent',
    rounded: 'rounded-full',
    marker: {
      wrapper: 'absolute top-[4px] left-[4px] duration-200 ease-out focus:outline-none',
      base: 'w-full h-full',
      background: 'bg-transparent',
      rounded: 'rounded-full',
      shadow: 'no-shadow',
    },
    tab: {
      base: 'relative inline-flex items-center justify-center flex-shrink-0 w-full focus:outline-none transition-colors duration-200 ease-out border-white/10 border-2',
      background: 'hover:bg-zinc-900/80',
      active: 'text-gray-900 dark:text-white',
      inactive: 'text-gray-500 dark:text-gray-400',
      height: '',
      padding: 'px-3 py-2',
      size: '',
      font: 'font-medium',
      rounded: 'rounded-full',
      shadow: '',
    },
  },
}
</script>

<template>
  <div class="flex flex-col items-center justify-center space-y-8">
    <div class="flex flex-col items-center justify-center gap-2">
      <h3 class="font-testimonial text-white-shadow text-4xl font-bold">
        {{ $t("faq.title") }}
      </h3>
      <p class="text-center text-sm font-light text-muted">
        {{ $t("faq.description") }}
      </p>
    </div>
    <div>
      <UTabs
        :items
        orientation="horizontal"
        :ui
      >
        <template #services>
          <FAQ
            :questions="services.faq"
            class="mt-8 max-w-lg"
          />
        </template>
        <template #pricing>
          <FAQ
            :questions="pricing.faq"
            class="mt-8 max-w-lg"
          />
        </template>
        <template #personnal>
          <FAQ
            :questions="personal.faq"
            class="mt-8 max-w-lg"
          />
        </template>
      </UTabs>
    </div>
  </div>
</template>

<style scoped></style>
