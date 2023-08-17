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
    <ThemeSelector />
    <Card class="justify-start gap-2">
      <div class="flex items-center justify-between">
        <img src="/assets/hugo-richard.jpeg" class="rounded-full h-24 w-24 object-cover border-2 border-gray-800/30" alt="Hugo Richard Profile Picture" />
      </div>
      <div class="flex flex-col items-start gap-2">
        <h2 class="text-2xl font-bold text-primary">
          <span>Hugo Richard</span>
        </h2>
        <Availability />
      </div>
    </Card>
    <div class="flex gap-4 w-full">
      <Card class="flex flex-col items-center justify-center">
        <LanguageToggle size="50" />
      </Card>
    </div>
    <div class="flex gap-4 w-full">
      <Card>
        <Letter />
      </Card>
      <Card> </Card>
    </div>
  </div>
</template>

<style scoped></style>
