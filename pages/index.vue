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
  <div class="h-screen flex flex-col mb-10">
    <div class="flex justify-center items-center p-6 relative h-[600px]">
      <div class="flex flex-col items-center gap-2 z-10">
        <Logo :size="20" />
        <div class="flex flex-col items-center">
          <h2 class="text-3xl font-bold text-text-color">Hugo Richard</h2>
          <h3 class="text-xl font-bold text-gradient">Creative Developer</h3>
        </div>
      </div>
      <div class="aurora absolute w-32 h-32 sm:w-52 sm:h-52 blur-full bg-accent translate-x-1/2 -translate-y-2/3" />
      <div class="aurora absolute w-32 h-32 sm:w-52 sm:h-52 blur-full bg-accent-inverted -translate-x-2/3 translate-y-1/2" />
    </div>
    <div class="linebreak"></div>
    <div class="spotlight flex flex-col items-center justify-center z-10">
      <div class="max-w-6xl flex flex-col items-center gap-4">
        <h1 class="main-heading mt-16 text-center">
          <span class="white-gradient-tb">
            {{ $t("home.hero.part1") }}
          </span>
          <br />
          <span class="white-gradient-tb">
            {{ $t("home.hero.part2") }}
          </span>
        </h1>
        <p class="subheading mx-10 sm:mx-20 text-center">
          {{ $t("home.hero.subtitle") }}
        </p>
        <NuxtLink to="/contact" class="btn-primary mt-4">Contact</NuxtLink>
      </div>
    </div>
  </div>
</template>
