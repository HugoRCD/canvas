<script setup lang="ts">
definePageMeta({
  name: "Writing",
  title: "Writing",
});
</script>

<template>
  <LayoutInfoWrapper page="writing">
    <nav>
      <ContentNavigation v-slot="{ navigation }">
        <ul>
          <li v-for="article of navigation.filter((link) => link._path === '/articles')[0].children" :key="article._path">
            <NuxtLink
              :to="article._path"
              class="flex items-center gap-2 cursor-pointer px-4 py-2 rounded-lg hover:bg-secondary hover:text-primary"
              :aria-label="article.title"
            >
              {{ article.title }}
            </NuxtLink>
          </li>
        </ul>
      </ContentNavigation>
    </nav>
    <!--    <NuxtLink
      v-for="article of articles"
      :key="article._path"
      :to="article._path"
      class="flex items-center gap-2 cursor-pointer px-4 py-2 rounded-lg hover:bg-secondary hover:text-primary"
    >
      {{ article.title }}
    </NuxtLink>-->
  </LayoutInfoWrapper>
</template>
