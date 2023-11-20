<script setup lang="ts">
import type { Article } from "~/types/Article";
import { quotes } from "~/data/quotes";

definePageMeta({
  name: "Writing",
  title: "Writing",
});
const { locale } = useI18n();

const loading = ref(false);
const articles = ref<Article[]>([]);
const tags = ref<string[]>([]);
const searchedTags = ref<string[]>([]);
const searchedTitle = ref("");

const filteredArticles = computed(() => {
  return articles.value
    .filter((article) => {
      if (searchedTags.value.length === 0) {
        return true;
      }
      return searchedTags.value.some((tag) => article.tags.includes(tag));
    })
    .filter((article) => {
      if (searchedTitle.value === "") {
        return true;
      }
      return article.title!.toLowerCase().includes(searchedTitle.value.toLowerCase());
    });
});

async function fetchArticles() {
  loading.value = true;
  const findArticles = await queryContent("articles")
    .locale(locale.value)
    .sort({
      date: -1,
    })
    .find();
  articles.value = findArticles.map((article) => {
    return article as Article;
  });
  tags.value = articles.value.map((article) => article.tags).flat();
  loading.value = false;
}

function toggleTag(tag: string) {
  if (searchedTags.value.includes(tag)) {
    searchedTags.value = searchedTags.value.filter((t) => t !== tag);
  } else {
    searchedTags.value.push(tag);
  }
}

watch(locale, async (oldLocale, newLocale) => {
  if (oldLocale !== newLocale) {
    await fetchArticles();
  }
});

onMounted(async () => {
  await fetchArticles();
});

const items = computed(() => [
  {
    slot: "blog",
    label: "blog",
  },
  {
    slot: "quotes",
    label: "quotes",
  },
]);

defineOgImage({
  component: "Main",
});
</script>

<template>
  <LayoutInfoWrapper page="writing">
    <UTabs :items="items" orientation="horizontal" :ui="{ list: { marker: { rounded: 'rounded-full' }, rounded: 'rounded-full' } }">
      <template #default="{ item }">
        <div class="flex items-center gap-2 text-shadow-sm" style="font-size: 1rem">
          {{ $t(`writing.${item.slot}`) }}
        </div>
      </template>
      <template #blog>
        <div class="flex flex-col justify-center gap-2 mb-4">
          <div class="my-4">
            <UInput v-model="searchedTitle" variant="none" :placeholder="$t('writing.search_article')" />
          </div>
          <div class="flex justify-center gap-2 mb-4" v-if="tags.length > 0">
            <div
              v-for="tag of tags"
              :key="tag"
              class="flex items-center rounded-md text-shadow-sm hover:text-shadow-md select-none px-2 py-1 bg-secondary text-main cursor-pointer hover:bg-zinc-700 transition-colors duration-100"
              :class="{ 'bg-zinc-700': searchedTags.includes(tag) }"
              @click="toggleTag(tag)"
            >
              <div class="font-light">{{ tag }}</div>
            </div>
          </div>
        </div>
        <nav v-if="!loading">
          <TransitionGroup name="list" tag="ul" class="grid grid-cols-1 gap-4 sm:grid-cols-2" v-if="filteredArticles.length">
            <li v-for="article of filteredArticles" :key="article._path">
              <ArticleCard :title="article.title!" :date="article.date" :image="article.image" :path="article._path!" />
            </li>
          </TransitionGroup>
          <div v-else class="h-64 flex flex-col items-center justify-center gap-2">
            <span class="text-2xl">
              {{ $t("writing.not_found") }}
            </span>
            <span class="text-sm">
              {{ $t("writing.not_found_description") }}
            </span>
          </div>
        </nav>
        <div v-else class="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div v-for="n of 4" :key="n" class="flex flex-col gap-1 p-4 rounded-lg shadow-lg">
            <USkeleton class="w-full h-64" />
            <USkeleton class="w-full h-4" />
            <USkeleton class="w-1/2 h-4" />
          </div>
        </div>
      </template>
      <template #quotes>
        <div class="h-64 flex items-center justify-center" v-if="!quotes.length">
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
        </div>
      </template>
    </UTabs>
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
