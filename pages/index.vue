<script setup lang="ts">
import { tags } from "~/seo/tags";
const { appName } = useAppConfig();
const { t } = useI18n();

useHead({
  meta: [
    {
      name: "description",
      content: t("seo.description"),
    },
    {
      name: "keywords",
      content: tags.join(", "),
    },
    {
      property: "og:title",
      content: `${t("home.hero.job.part1")} / ${t("home.hero.job.part2")} - ${appName}`,
    },
    {
      property: "og:url",
      content: "https://hrcd.fr/",
    },
    {
      property: "og:description",
      content: t("seo.description"),
    },
    {
      property: "twitter:card",
      content: "summary_large_image",
    },
    {
      property: "twitter:title",
      content: `${t("home.hero.job.part1")} / ${t("home.hero.job.part2")} - ${appName}`,
    },
    {
      property: "twitter:description",
      content: t("seo.description"),
    },
    {
      property: "twitter:url",
      content: "https://hrcd.fr/",
    },
  ],
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
        <HomeCTA />

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
