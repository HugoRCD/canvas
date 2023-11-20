<script setup lang="ts">
const { t, locale } = useI18n();

const siteTitle = computed(() => `${t("home.hero.job.part1")} / ${t("home.hero.job.part2")}`);

const runtimeConfig = useRuntimeConfig();

useSeoMeta({
  title: () => `${siteTitle.value}`,
  description: () => `${t("seo.description")}`,
  author: "Hugo Richard",
  ogType: "website",
  ogTitle: `${siteTitle.value}`,
  ogDescription: () => `${t("seo.description")}`,
  ogUrl: () => `${runtimeConfig.public.siteUrl}`,
  ogLocale: () => `${locale.value}`,
  twitterTitle: `${siteTitle.value}`,
  twitterDescription: () => `${t("seo.description")}`,
  twitterCard: "summary_large_image",
  twitterSite: "@HugoRCD__",
  twitterCreator: "@HugoRCD__",
  twitterImage: "https://hrcd.fr/preview.webp",
});

defineOgImage({ url: "https://hrcd.fr/preview.webp", width: 1200, height: 630, alt: "Home image" });
</script>

<template>
  <section class="relative pt-12">
    <!-- grid -->
    <div class="pointer-events-none absolute inset-0 bg-center bg-grid-white/10 bg-grid-16 [mask-image:radial-gradient(white,transparent_85%)]"></div>

    <div class="relative flex flex-col justify-center gap-4 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
      <!-- spotlight -->
      <div
        class="absolute -top-8 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-white/25 blur-[120px] lg:-top-8 lg:h-[32rem] lg:w-[32rem] lg:blur-[200px]"
      ></div>

      <!-- profile picture -->
      <HomeProfilePicture />

      <div class="flex flex-col items-center justify-center z-20">
        <!-- title -->
        <HomeHero />

        <!-- social -->
        <HomeSocial />

        <!-- cta -->
        <HomeCta />

        <div class="flex flex-col gap-4 w-full max-w-3xl lg:mt-16 mt-12">
          <!-- projects -->
          <HomeProjects />
        </div>

        <Divider class="my-9" />

        <!-- faq -->
        <HomeFaq />
      </div>
    </div>
  </section>
</template>
