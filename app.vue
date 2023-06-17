<script lang="ts" setup>
useHead({
  title: "HR Folio",
  meta: [
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { name: "keywords", content: "Home" },
    { name: "description", content: "French developer" },
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
  <Html :lang="$i18n.locale">
    <Body class="h-screen bg-main">
      <LayoutNavbar />
      <NuxtPage />
    </Body>
  </Html>
</template>
