<script setup lang="ts">
const { locale } = useI18n()
</script>

<template>
  <div>
    <NuxtLayout>
      <ContentQuery
        v-slot="{ data }"
        :path="$route.path"
        :locale="locale"
        find="one"
      >
        <ContentRenderer :value="data" />
      </ContentQuery>
    </NuxtLayout>
  </div>
</template>
