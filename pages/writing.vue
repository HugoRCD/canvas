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
await fetchArticles();

watch(locale, async (oldLocale, newLocale) => {
  if (oldLocale !== newLocale) {
    await fetchArticles();
  }
});
</script>

<template>
  <LayoutInfoWrapper page="writing">
    <nav>
      <ul class="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <li v-for="article of articles" :key="article._path">
          <ArticleCard :title="article.title" :date="article.date" :image="article.image" :path="article._path" />
        </li>
      </ul>
    </nav>
  </LayoutInfoWrapper>
</template>
