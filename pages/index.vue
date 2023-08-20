<script setup lang="ts">
definePageMeta({
  title: "Home",
  name: "Home",
  path: "/",
  description: "Home page",
  keywords: "Home",
});
</script>

<template>
  <div class="flex flex-col gap-4 items-center justify-center p-6">
    <SettingsTools class="fixed bottom-3 right-3 sm:bottom-4" />
    <Hero />
    <div class="linebreak my-6"></div>
    <!--    <Testimonial />-->
    <div class="flex gap-4 w-full">
      <Card>
        <Letter />
      </Card>
      <Card> </Card>
    </div>
  </div>
</template>

<style scoped></style>
