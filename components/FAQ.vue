<script setup lang="ts">
import { XMarkIcon } from "@heroicons/vue/24/outline";
import type { Faq } from "~/data/faq";
import type { PropType } from "vue";
const { locale } = useI18n();

defineProps({
  questions: {
    type: Array as PropType<Faq["faq"]>,
    required: true,
  },
});
</script>

<template>
  <FaqGroup class="space-y-5 select-none">
    <FaqItem
      v-for="(item, index) in questions"
      :key="index"
      v-slot="{ isActive, toggle }"
      class="group rounded-2xl border border-white/10 bg-white/5 transition duration-500 hover:bg-white/[0.075]"
    >
      <div class="flex cursor-pointer items-center p-4" @click="toggle">
        <div class="text-white/75 transition group-hover:text-white">
          {{ item.title[locale as "en" | "fr"] }}
        </div>

        <div class="relative ml-auto">
          <XMarkIcon :class="{ 'rotate-180': isActive, 'rotate-45': !isActive }" class="h-6 w-6 text-white/50 transition-transform duration-500" />
        </div>
      </div>

      <FaqContent class="overflow-hidden px-4 transition-all duration-500 will-change-[height]">
        <p class="pb-4 font-light leading-relaxed tracking-wide text-white/75">
          {{ item.content[locale as "en" | "fr"] }}
        </p>
      </FaqContent>
    </FaqItem>
  </FaqGroup>
</template>

<style scoped></style>
