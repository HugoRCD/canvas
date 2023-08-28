<script setup lang="ts">
import AppLayout from "~/components/layout/AppLayout.vue";
import { Article } from "~/types/Article";

definePageMeta({
  name: "Writing",
  title: "Writing",
});

const articles = ref<Article[]>([]);

await useAsyncData("articles", () => queryContent("/articles").find()).then((data) => {
  articles.value = data.data.value as unknown as Article[];
});
</script>

<template>
  <AppLayout page="writing">
    <NuxtLink
      v-for="article of articles"
      :key="article._path"
      :to="article._path"
      class="flex items-center gap-2 cursor-pointer px-4 py-2 rounded-lg hover:bg-secondary hover:text-primary"
    >
      {{ article.title }}
    </NuxtLink>
  </AppLayout>
</template>
