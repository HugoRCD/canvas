<script setup lang="ts">
import type { PropType } from 'vue'
import type { Question } from '~/types/Faq'

defineProps({
  questions: {
    type: Object as PropType<Question[]>,
    required: true,
  },
})
</script>

<template>
  <FaqGroup class="select-none space-y-5">
    <FaqItem
      v-for="question in questions"
      :key="question.title"
      v-slot="{ isActive, toggle }"
      class="group transform-gpu rounded-xl border border-white/10 bg-white/5 transition duration-500 will-change-transform hover:bg-white/[0.075]"
    >
      <div
        class="flex cursor-pointer items-center p-4"
        @click="toggle"
      >
        <div class="text-white/75 transition group-hover:text-white">
          {{ question.title }}
        </div>

        <div class="relative ml-auto">
          <span
            class="i-heroicons-x-mark size-6 transform-gpu text-white/50 transition-transform duration-500 will-change-transform"
            :class="{ 'rotate-180': isActive, 'rotate-45': !isActive }"
          />
        </div>
      </div>

      <FaqContent class="transform-gpu overflow-hidden px-4 transition-all duration-500 will-change-[height]">
        <p class="pb-4 font-extralight leading-relaxed tracking-wide text-white/75">
          {{ question.answer }}
        </p>
      </FaqContent>
    </FaqItem>
  </FaqGroup>
</template>

<style scoped></style>
