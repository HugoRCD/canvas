<script setup lang="ts">
import type { Collections } from '@nuxt/content'

const searchedTags = ref<string[]>([])
const searchedTitle = ref('')
const showSearch = ref(false)

const { locale } = useI18n()

const { data: articles } = await useAsyncData('articles-' + locale.value, async () => {
  const collection = ('articles_' + locale.value) as keyof Collections
  return await queryCollection(collection).all() as Collections['articles_en'][] | Collections['articles_fr'][]
}, {
  watch: [locale],
})

if (!articles.value)
  throw createError({ statusCode: 404, statusMessage: 'Page not found' })

const tags = computed(() =>
  Array.from(new Set(articles.value?.flatMap(article => article.tags))),
)

const filteredArticles = computed(() =>
  articles.value?.filter(article =>
    (searchedTags.value.length === 0 || searchedTags.value.some(tag => article.tags.includes(tag)))
    && (searchedTitle.value === '' || article.title!.toLowerCase().includes(searchedTitle.value.toLowerCase())),
  ) ?? [],
)

const toggleTag = (tag: string) => {
  searchedTags.value = searchedTags.value.includes(tag)
    ? searchedTags.value.filter(t => t !== tag)
    : [...searchedTags.value, tag]
}
</script>

<template>
  <section class="mx-auto mt-4 flex max-w-4xl flex-col p-7 sm:mt-20">
    <h1 class="font-newsreader italic text-white-shadow text-center text-4xl">
      <slot
        name="title"
        mdc-unwrap="p"
      />
    </h1>
    <h2 class="text-center text-lg font-extralight italic text-muted">
      <slot
        name="subtitle"
        mdc-unwrap="p"
      />
    </h2>
    <Divider class="mb-8 mt-2" />
    <div :class="showSearch ? '' : 'mb-3'">
      <span
        class="font-newsreader italic text-white-shadow cursor-pointer select-none text-lg"
        @click="showSearch = !showSearch"
      >
        {{ showSearch ? $t("writing.hide_search") : $t("writing.show_search") }}
      </span>
    </div>
    <div
      v-if="showSearch"
      class="mb-4 flex flex-col gap-2"
    >
      <div class="my-4">
        <UInput
          v-model="searchedTitle"
          class="w-full sm:w-96"
          :placeholder="$t('writing.search_article')"
        />
      </div>
      <div
        v-if="tags.length > 0"
        class="mb-4 flex flex-wrap gap-2"
      >
        <div
          v-for="tag of tags"
          :key="tag"
          class="hover:text-shadow-md flex cursor-pointer select-none items-center rounded-md bg-neutral-800 px-2 py-1 text-xs transition-colors duration-100 text-shadow-sm hover:bg-neutral-700 sm:text-sm"
          :class="{ 'bg-zinc-700': searchedTags.includes(tag) }"
          @click="toggleTag(tag)"
        >
          <div class="font-extralight">
            {{ tag }}
          </div>
        </div>
      </div>
    </div>
    <TransitionGroup
      v-if="filteredArticles.length"
      name="list"
      tag="ul"
      class="grid grid-cols-1 gap-4 sm:grid-cols-2"
    >
      <li
        v-for="article of filteredArticles"
        :key="article.path"
      >
        <ArticleCard
          :title="article.title"
          :date="article.date"
          :image="article.image"
          :path="article.path"
        />
      </li>
    </TransitionGroup>
    <div
      v-else
      class="flex h-64 flex-col items-center justify-center gap-2"
    >
      <span class="text-2xl">
        {{ $t("writing.not_found") }}
      </span>
      <span class="text-sm">
        {{ $t("writing.not_found_description") }}
      </span>
    </div>
  </section>
</template>
