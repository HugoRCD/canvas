<script setup lang="ts">
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
      <ul>
        <li v-for="article of articles" :key="article._path">
          <NuxtLink
            :to="article._path"
            class="flex items-center gap-2 cursor-pointer px-4 py-2 rounded-lg hover:bg-secondary hover:text-main"
            :aria-label="article.title"
          >
            <NuxtImg :src="article.image" :alt="article.title" width="50" height="50" layout="fixed" class="rounded-lg" />
            <div class="flex flex-col">
              <span>
                {{ article.title }}
              </span>
              <span class="text-sm text-muted">{{ article.date }}</span>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </LayoutInfoWrapper>
</template>
