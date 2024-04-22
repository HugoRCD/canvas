<script setup lang="ts">
import { ArrowLeftIcon, LinkIcon } from '@heroicons/vue/24/outline'
import type { MinArticle } from '~/types/Article'
const { locale, t } = useI18n()
const toast = useToast()

definePageMeta({
  layout: 'article',
})

const runtimeConfig = useRuntimeConfig()
const { path } = useRoute()

const fetchedArticle = ref()

async function fetchArticle() {
  const { data, error } = await useAsyncData(`blog-post-${path}`, () =>
    queryContent('articles')
      .where({
        _path: {
          $eq: path,
        },
      })
      .locale(locale.value)
      .findOne(),
  )
  if (error.value) navigateTo('/writing')
  else fetchedArticle.value = data.value
}
await fetchArticle()

const article = computed<MinArticle>(() => {
  return {
    title: fetchedArticle.value?.title || 'no article available',
    description: fetchedArticle.value?.description || 'no description available',
    image: fetchedArticle.value?.image || '',
    date: fetchedArticle.value?.date || '',
    tags: fetchedArticle.value?.tags || [],
    path: fetchedArticle.value?._path || '/writing',
    readingTime: fetchedArticle.value?.readingTime || 0,
  }
})

const articleLink = ref(runtimeConfig.public.siteUrl + article.value.path)

defineShortcuts({
  meta_k: {
    usingInput: true,
    handler: () => {
      copyToClipboard(articleLink.value)
      toast.add({ title: t('global.article_link_copied'), icon: 'i-heroicons-check-circle', timeout: 2500 })
    },
  },
})

function copyArticleLink() {
  copyToClipboard(articleLink.value)
  toast.add({ title: t('global.article_link_copied'), icon: 'i-heroicons-check-circle', timeout: 2500 })
}

useSeoMeta({
  title: () => article.value.title,
  description: () => article.value.description,
  author: 'Hugo Richard',
  ogType: 'website',
  ogTitle: article.value.title,
  ogDescription: () => article.value.description,
  ogUrl: () => runtimeConfig.public.siteUrl,
  ogLocale: () => locale.value,
  twitterTitle: article.value.title,
  twitterDescription: () => article.value.description,
  twitterCard: 'summary_large_image',
  twitterSite: '@HugoRCD__',
  twitterCreator: '@HugoRCD__',
  twitterImage: article.value.image,
  articleTag: () => article.value.tags,
  articleAuthor: ['Hugo Richard'],
})

watch(locale, () => {
  fetchArticle()
})

defineOgImage({ url: article.value.image, width: 1200, height: 630, alt: article.value.title })
</script>

<template>
  <main relative="relative">
    <ContentQuery
      v-slot="{ data }"
      :locale
      :path="$route.path"
      find="one"
    >
      <NuxtLink
        to="/writing"
        class="mx-auto my-8 flex cursor-pointer items-center gap-2 px-4 text-muted transition-colors duration-200 hover:text-main sm:max-w-2xl md:max-w-3xl lg:max-w-4xl"
      >
        <ArrowLeftIcon class="size-5" />
        <span class="text-sm font-light">
          {{ $t("navigation.writing") }}
        </span>
      </NuxtLink>
      <article class="prose mx-auto px-4 sm:max-w-2xl md:max-w-3xl lg:max-w-4xl">
        <h1>{{ data.title }}</h1>
        <div class="info-section mt-1 flex flex-col gap-2 sm:flex-row sm:gap-6">
          <p>{{ data.date }}</p>
          <p class="hidden sm:block">
            |
          </p>
          <p>{{ data.readingTime }} {{ $t("writing.readingTime") }}</p>
          <p class="hidden sm:block">
            |
          </p>
          <UTooltip
            :text="$t('writing.copy_link')"
            :shortcuts="['⌘', 'K']"
          >
            <p
              class="flex cursor-pointer items-center gap-1 transition-colors duration-200 hover:text-main"
              @click="copyArticleLink()"
            >
              <LinkIcon class="mr-1 inline-block size-4" />
              {{ $t("writing.share") }}
            </p>
          </UTooltip>
        </div>
        <ContentRenderer :value="data" />
        <div>
          <div
            v-for="tag of data.tags"
            :key="tag"
            class="mr-2 inline-block"
          >
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
:deep(h3),
:deep(h4) {
  color: #f2f2f2;
  text-decoration: none;
}

article :deep(a) {
  color: #959595;
}

article :deep(code),
:deep(pre),
:deep(strong) {
  color: #f2f2f2;
  font-weight: 400;
}
</style>
