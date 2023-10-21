<script setup lang="ts">
import { ArrowUpIcon, ArrowLeftIcon, LinkIcon } from "@heroicons/vue/24/outline";
import type { Article } from "~/types/Article";
const { locale } = useI18n();

definePageMeta({
  layout: "article",
});

const isScrolling = ref(false);

onMounted(() => {
  window.addEventListener("scroll", () => {
    isScrolling.value = window.scrollY > 0;
  });
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

const articleLink = computed(() => {
  return window.location.href;
});

defineShortcuts({
  meta_o: {
    usingInput: true,
    handler: () => {
      copyToClipboard(articleLink.value);
    },
  },
});

const route = useRoute();

const article = ref<Article>();

async function fetchArticle() {
  article.value = (await queryContent("articles")
    .where({
      _path: {
        $eq: route.path as string,
      },
    })
    .locale(locale.value)
    .findOne()) as Article;
  useContentHead(article.value as Article);
}

onMounted(() => {
  fetchArticle();
});

useContentHead(article.value as Article);

watch(locale, async (oldLocale, newLocale) => {
  if (oldLocale !== newLocale) {
    await fetchArticle();
  }
});
</script>

<template>
  <main relative="relative">
    <div
      class="flex items-center justify-center bg-secondary text-main rounded-full w-10 h-10 p-1 cursor-pointer border border-gray-700 hover:bg-gray-700 hover:text-white transition-colors duration-200 fixed bottom-20 right-4"
      @click="scrollToTop"
      :class="{ 'opacity-100': isScrolling, 'opacity-0': !isScrolling }"
    >
      <ArrowUpIcon class="w-6 h-6" />
    </div>
    <ContentQuery v-slot="{ data }" :locale="locale" :path="$route.path" find="one">
      <div
        class="lg:max-w-4xl md:max-w-3xl sm:max-w-2xl px-4 mx-auto flex items-center gap-2 my-8 text-muted cursor-pointer hover:text-main transition-colors duration-200"
        @click="$router.push('/writing')"
      >
        <ArrowLeftIcon class="w-5 h-5" />
        <NuxtLink to="/writing" class="text-sm font-light">
          {{ $t("navigation.writing") }}
        </NuxtLink>
      </div>
      <article class="prose mx-auto lg:max-w-4xl md:max-w-3xl sm:max-w-2xl px-4">
        <h1>{{ data.title }}</h1>
        <div class="flex gap-2 sm:gap-6 info-section mt-1 flex-col sm:flex-row">
          <p>{{ data.date }}</p>
          <p class="hidden sm:block">|</p>
          <p>{{ data.readingTime }} {{ $t("writing.readingTime") }}</p>
          <p class="hidden sm:block">|</p>
          <UTooltip :text="$t('writing.copy_link')" :shortcuts="['⌘', 'O']">
            <p class="flex items-center gap-1 cursor-pointer hover:text-main transition-colors duration-200" @click="copyToClipboard(articleLink)">
              <LinkIcon class="w-4 h-4 inline-block mr-1" />
              {{ $t("writing.share") }}
            </p>
          </UTooltip>
        </div>
        <ContentRenderer :value="data" />
        <div>
          <div v-for="tag of data.tags" :key="tag" class="inline-block mr-2">
            <UKbd size="sm">
              {{ tag }}
            </UKbd>
          </div>
        </div>
      </article>
    </ContentQuery>
    <LayoutFooter class="pt-6" />
  </main>
</template>

<style scoped lang="scss">
article {
  color: #7d8084;
  font-family: Inter, sans-serif;
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 300;
  text-decoration: none;
  text-align: justify;
}

h1 {
  font-size: 2.5rem;
  line-height: 3rem;
  font-weight: 600;
  color: #f2f2f2;
  text-decoration: none;
  text-align: left;
  @media (max-width: 640px) {
    font-size: 2rem;
    line-height: 2.5rem;
  }
}

article :deep(h1),
p {
  margin-top: 0;
  margin-bottom: 0;
}

.info-section {
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 300;
  color: #7d8084;
  text-decoration: none;
  text-align: left;
}

article :deep(h2),
:deep(h3) {
  color: #f2f2f2;
  text-decoration: none;
}

article :deep(a) {
  color: #959595;
}
</style>
