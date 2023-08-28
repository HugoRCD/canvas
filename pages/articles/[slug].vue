<script setup lang="ts">
definePageMeta({
  layout: "article",
});
</script>

<template>
  <main>
    <ContentDoc v-slot="{ doc }">
      <article class="max-w-2xl sm:mx-auto my-8 mx-4">
        <h1 class="font-testimonial">{{ doc.title }}</h1>
        <ContentRenderer :value="doc" class="bg-secondary rounded-lg p-4" />
      </article>
    </ContentDoc>
  </main>
</template>

<style scoped lang="scss">
main :deep(h1) {
  font-size: 2.5rem;
  line-height: 1.2;
  margin-bottom: 0.5rem;

  @media (max-width: 640px) {
    font-size: 2rem;
  }
}

main :deep(h2) {
  font-size: 2rem;
  line-height: 1.2;
  margin-top: 2rem;

  @media (max-width: 640px) {
    font-size: 1.5rem;
  }
}
</style>
