<script setup lang="ts">
definePageMeta({
  name: "Writing",
  title: "Writing",
});
const articles = await queryContent("articles").find();
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
            {{ article.title }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </LayoutInfoWrapper>
</template>
