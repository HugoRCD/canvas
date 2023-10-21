<script setup lang="ts">
const { t } = useI18n();

definePageMeta({
  name: "Writing",
  title: "Writing",
});
const { locale } = useI18n();

const loading = ref(false);
const articles = ref({});
const tags = ref([]);
const searchedTags = ref([]);
const searchTitle = ref("");

const filterArticles = computed(() => {
  if (searchedTags.value.length === 0) {
    return articles.value;
  }
  return articles.value.filter((article) => {
    return article.tags.some((tag) => searchedTags.value.includes(tag));
  });
});

async function fetchArticles() {
  loading.value = true;
  articles.value = await queryContent("articles")
    .locale(locale.value)
    .sort({
      date: "desc",
    })
    .find();
  tags.value = articles.value.map((article) => article.tags).flat();
  loading.value = false;
}

function toggleTag(tag) {
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
    key: "blog",
    label: t("writing.blog"),
  },
  {
    key: "quotes",
    label: t("writing.quotes"),
  },
]);
</script>

<template>
  <LayoutInfoWrapper page="writing">
    <UTabs :items="items">
      <template #item="{ item }">
        <div v-if="item.key === 'blog'">
          <div class="flex flex-col justify-center gap-2 mb-4">
            <div>
              <UInput v-model="searchTitle" :placeholder="$t('writing.search_article')" />
            </div>
            <div class="flex justify-center gap-2 mb-4">
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
            <ul class="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <li v-for="article of filterArticles" :key="article._path">
                <ArticleCard :title="article.title" :date="article.date" :image="article.image" :path="article._path" />
              </li>
            </ul>
          </nav>
          <div v-else class="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div v-for="n of 4" :key="n" class="flex flex-col gap-1 p-4 rounded-lg shadow-lg">
              <USkeleton class="w-full h-64" />
              <USkeleton class="w-full h-4" />
              <USkeleton class="w-1/2 h-4" />
            </div>
          </div>
        </div>
        <div v-else-if="item.key === 'quotes'"></div>
      </template>
    </UTabs>
  </LayoutInfoWrapper>
</template>
