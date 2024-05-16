<script setup lang="ts">
const { t, locale } = useI18n()

useHead({
  title: () => t('writing.title'),
})

const { data } = await useAsyncData('articles', () => queryContent('/articles').locale(locale.value).sort({ date: -1 }).find(), {
  watch: [locale],
})
</script>

<template>
  <section class="mx-auto mt-4 flex max-w-4xl flex-col p-7 sm:mt-20">
    <h1 class="font-testimonial text-white-shadow text-center text-4xl font-bold">
      <ContentSlot :use="$slots.title" />
    </h1>
    <h2 class="text-center text-lg font-light italic text-muted">
      <ContentSlot :use="$slots.subtitle" />
    </h2>
    <Divider class="mb-8 mt-2" />
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <div
        v-for="article of data"
        :key="article._path"
      >
        <ArticleCard
          :title="article.title!"
          :date="article.date"
          :image="article.image"
          :path="article._path!"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>
