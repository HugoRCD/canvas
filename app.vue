<script setup lang="ts">
useHead({
  title: "HR Folio",
  meta: [
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { name: "keywords", content: "Home" },
  ],
  link: [
    {
      rel: "icon",
      type: "image/x-icon",
      href: "/favicon.ico",
    },
  ],
});
</script>

<template>
  <div>
    <LayoutNavbar />
    <NuxtPage />
  </div>
</template>
