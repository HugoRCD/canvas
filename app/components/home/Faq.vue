<script setup lang="ts">
import type { Faq } from '~/types/Faq'

const { locale } = useI18n()

const { data: faq } = await useAsyncData('faq', () => queryContent('/faq').locale(locale.value).findOne(), {
  watch: [locale],
})

const items = computed(() => {
  return faq.value?.faqQuestions.map((faq: Faq) => {
    return {
      label: faq.title,
      key: faq.title.toLowerCase(),
      questions: faq.questions,
    }
  })
})

const ui = {
  root: 'flex items-center gap-4 w-full',
  list: 'relative flex bg-transparent dark:bg-transparent gap-2',
  indicator: 'absolute top-[4px] left-[4px] duration-200 ease-out focus:outline-none rounded-full bg-transparent',
  trigger: [
    'relative inline-flex items-center justify-center flex-shrink-0 w-full focus:outline-none transition-colors duration-200 ease-out border-white/10 border-2',
    'px-3 py-2 font-medium rounded-full',
    'hover:bg-zinc-900/80',
    'data-[state=active]:text-neutral-900 dark:data-[state=active]:text-white',
    'data-[state=inactive]:text-neutral-500 dark:data-[state=inactive]:text-neutral-400',
  ],
  content: 'focus:outline-none w-full',
  label: 'truncate',
}
</script>

<template>
  <div class="flex flex-col items-center justify-center space-y-8 max-w-lg">
    <div class="flex flex-col items-center justify-center gap-2">
      <h3 class="font-newsreader italic text-white-shadow text-4xl">
        {{ faq!.title }}
      </h3>
      <p class="text-center text-sm font-medium text-muted">
        {{ faq!.subtitle }}
      </p>
    </div>
    <UTabs
      :items
      orientation="horizontal"
      :ui
    >
      <template #content="{ item }">
        <FAQ
          :questions="item.questions"
          class="mt-8"
        />
      </template>
    </UTabs>
  </div>
</template>
