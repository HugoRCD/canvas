<script setup lang="ts">
import { withLeadingSlash } from 'ufo'
import type { Collections } from '@nuxt/content'

const route = useRoute()
const { locale } = useI18n()

const slug = computed(() => withLeadingSlash(String(route.params.slug)))
const { data: faq } = await useAsyncData('faq-' + slug.value, async () => {
  const collection = ('faq_' + locale.value) as keyof Collections
  return await queryCollection(collection).first() as Collections['faq_en'] | Collections['faq_fr']
}, {
  watch: [locale],
})

const items = computed(() => {
  return faq.value?.faqQuestions.map((faq) => {
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
  indicator: 'absolute top-[4px] duration-200 ease-out focus:outline-none rounded-full bg-white/10 dark:bg-neutral-900',
  trigger: [
    'relative inline-flex items-center justify-center flex-shrink-0 focus:outline-none transition-colors duration-200 ease-out border-white/10 border-2',
    'px-3 py-2 font-medium rounded-full',
    'hover:bg-neutral-900/80',
    'data-[state=active]:text-neutral-900 dark:data-[state=active]:text-white',
    'data-[state=inactive]:text-neutral-500 dark:data-[state=inactive]:text-neutral-400',
  ],
  label: 'truncate',
}
</script>

<template>
  <div class="flex flex-col items-center justify-center space-y-8 w-full sm:px-20 md:px-30">
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
        <UAccordion
          trailing-icon="lucide:plus"
          :items="item.questions"
          :ui="{
            item: 'mb-2 group px-4 transform-gpu rounded-xl border border-white/10 bg-white/5 transition duration-500 will-change-transform hover:bg-white/[0.075]',
            trailingIcon: 'group-data-[state=closed]:rotate-0 group-data-[state=open]:rotate-135',
          }"
        />
      </template>
    </UTabs>
  </div>
</template>
