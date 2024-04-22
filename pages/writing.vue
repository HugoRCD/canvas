<script setup lang="ts">
import type { Article } from '~/types/Article'
// import { quotes } from "~/data/quotes";
const appConfig = useAppConfig()
const { t } = useI18n()

useHead({
  title: t('navigation.writing'),
})

const { locale } = useI18n()

const loading = ref(false)
const articles = ref<Article[]>([])
const tags = ref<string[]>([])
const searchedTags = ref<string[]>([])
const searchedTitle = ref('')

const filteredArticles = computed(() => {
  return articles.value
    .filter((article) => {
      if (searchedTags.value.length === 0) {
        return true
      }
      return searchedTags.value.some((tag) => article.tags.includes(tag))
    })
    .filter((article) => {
      if (searchedTitle.value === '') {
        return true
      }
      return article.title!.toLowerCase().includes(searchedTitle.value.toLowerCase())
    })
})

async function fetchArticles() {
  loading.value = true
  const findArticles = await queryContent('articles')
    .locale(locale.value)
    .sort({
      date: -1,
    })
    .find()
  articles.value = findArticles.map((article) => {
    return article as Article
  })
  const findTags = articles.value.map((article) => article.tags).flat()
  tags.value = [...new Set(findTags)]
  loading.value = false
}

function toggleTag(tag: string) {
  if (searchedTags.value.includes(tag)) {
    searchedTags.value = searchedTags.value.filter((t) => t !== tag)
  } else {
    searchedTags.value.push(tag)
  }
}

watch(locale, async (oldLocale, newLocale) => {
  if (oldLocale !== newLocale) {
    await fetchArticles()
  }
})

onMounted(async () => {
  await fetchArticles()
})

const showSearch = ref(false)

defineOgImage({ url: appConfig.openGraphImage, width: 1200, height: 630, alt: 'Home image' })
</script>

<template>
  <LayoutInfoWrapper page="writing">
    <div :class="showSearch ? '' : 'mb-3'">
      <span
        class="font-testimonial text-white-shadow cursor-pointer select-none text-lg"
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
          variant="none"
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
          class="hover:text-shadow-md flex cursor-pointer select-none items-center rounded-md bg-secondary px-2 py-1 text-xs text-main transition-colors duration-100 text-shadow-sm hover:bg-zinc-700 sm:text-sm"
          :class="{ 'bg-zinc-700': searchedTags.includes(tag) }"
          @click="toggleTag(tag)"
        >
          <div class="font-light">
            {{ tag }}
          </div>
        </div>
      </div>
    </div>
    <nav v-if="!loading">
      <TransitionGroup
        v-if="filteredArticles.length"
        name="list"
        tag="ul"
        class="grid grid-cols-1 gap-4 sm:grid-cols-2"
      >
        <li
          v-for="article of filteredArticles"
          :key="article._path"
        >
          <ArticleCard
            :title="article.title!"
            :date="article.date"
            :image="article.image"
            :path="article._path!"
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
    </nav>
    <div
      v-else
      class="grid grid-cols-1 gap-4 sm:grid-cols-2"
    >
      <div
        v-for="n of 4"
        :key="n"
        class="flex flex-col gap-1 rounded-lg p-4 shadow-lg"
      >
        <USkeleton class="h-64 w-full" />
        <USkeleton class="h-4 w-full" />
        <USkeleton class="h-4 w-1/2" />
      </div>
    </div>

    <!-- <div class="h-64 flex items-center justify-center" v-if="!quotes.length">
      {{ $t("writing.empty_quotes") }}
    </div>
    <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 mt-8" v-else>
      <SpotlightCard white v-for="quote in quotes" :key="quote.text" class="flex flex-col gap-2 p-4">
        <div class="text-lg text-shadow-sm italic font-light">
          {{ quote.text[locale] }}
        </div>
        <div class="text-sm text-muted">
          {{ quote.author === "Unknown" ? $t("writing.unknown_author") : quote.author }}
        </div>
      </SpotlightCard>
    </div> -->
  </LayoutInfoWrapper>
</template>

<style>
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.list-leave-active {
  position: absolute;
}
</style>
