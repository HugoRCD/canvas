<script lang="ts" setup>
const { appName } = useAppConfig();
const { t } = useI18n();

useHead({
  title: appName,
  meta: [
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { name: "author", content: "Hugo Richard" },
    { charset: "utf-8" },
    {
      name: "description",
      content: t("seo.description"),
    },
    {
      property: "og:title",
      content: appName,
    },
    {
      property: "og:description",
      content: t("seo.description"),
    },
  ],
  link: [
    {
      rel: "icon",
      type: "image/x-icon",
      href: "/favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/favicon-16x16.png",
    },
    {
      rel: "manifest",
      href: "/site.webmanifest",
    },
  ],
});
</script>

<template>
  <Html :lang="$i18n.locale" class="bg-primary text-primary transition-colors duration-300">
    <Body>
      <NuxtPage />
      <LayoutFooter />
    </Body>
  </Html>
</template>
