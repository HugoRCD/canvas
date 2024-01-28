<script setup lang="ts">
const appConfig = useAppConfig();
const { t, locale } = useI18n();

const runtimeConfig = useRuntimeConfig();

useHead({
  title: "",
  titleTemplate: appConfig.appName,
});

useSeoMeta({
  title: () => appConfig.appName,
  description: () => t("seo.description"),
  author: "Hugo Richard",
  ogType: "website",
  ogTitle: appConfig.appName,
  ogDescription: () => t("seo.description"),
  ogUrl: () => runtimeConfig.public.siteUrl,
  ogLocale: () => locale.value,
  twitterTitle: appConfig.appName,
  twitterDescription: () => t("seo.description"),
  twitterCard: "summary_large_image",
  twitterSite: appConfig.twitterUsername,
  twitterCreator: appConfig.twitterUsername,
  twitterImage: "https://hrcd.fr/social-preview.jpg",
});

defineOgImage({ url: appConfig.openGraphImage, width: 1200, height: 630, alt: "Home image" });
</script>

<template>
  <section class="relative pt-12">
    <!-- grid -->
    <div class="pointer-events-none absolute inset-0 bg-center bg-grid-white/10 bg-grid-16 [mask-image:radial-gradient(white,transparent_85%)]" />

    <div class="relative flex flex-col justify-center gap-4 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
      <!-- spotlight -->
      <div
        class="absolute -top-8 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-white/25 blur-[120px] lg:-top-8 lg:h-[32rem] lg:w-[32rem] lg:blur-[200px]"
      />

      <!-- profile picture -->
      <HomeProfilePicture />

      <div class="flex flex-col items-center justify-center z-20">
        <!-- title -->
        <HomeHero
          style="--stagger: 1; --delay: 10ms"
          data-animate
        />

        <!-- social -->
        <HomeSocial
          style="--stagger: 2"
          data-animate
        />

        <!-- cta -->
        <HomeCTA
          style="--stagger: 3"
          data-animate
        />

        <div
          style="--stagger: 4"
          data-animate
          class="flex flex-col gap-4 w-full max-w-3xl lg:mt-16 mt-12"
        >
          <!-- projects -->
          <HomeProjects />
        </div>

        <Divider class="my-9" />

        <!-- faq -->
        <HomeFaq
          style="--stagger: 5"
          data-animate
        />
      </div>
    </div>
  </section>
</template>
