<script setup lang="ts">
import ArticleCard from "~/components/ArticleCard.vue";

definePageMeta({
  name: "Writing",
  title: "Writing",
});
const { locale } = useI18n();

const loading = ref(false);
const articles = ref({});

async function fetchArticles() {
  loading.value = true;
  articles.value = await queryContent("articles")
    .locale(locale.value)
    .sort({
      date: "desc",
    })
    .find();
  loading.value = false;
}

watch(locale, async (oldLocale, newLocale) => {
  if (oldLocale !== newLocale) {
    await fetchArticles();
  }
});

onMounted(async () => {
  await fetchArticles();
});
</script>

<template>
  <LayoutInfoWrapper page="writing">
    <nav v-if="!loading">
      <ul class="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <li v-for="article of articles" :key="article._path">
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
  </LayoutInfoWrapper>
</template>
