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
  <div class="flex flex-col h-full">
    <div class="h-1/3 flex justify-center items-center p-6">
      <div class="flex flex-col items-center gap-2">
        <Logo :size="20" />
        <div class="flex flex-col items-center">
          <h2 class="text-3xl font-bold text-text-color">Hugo Richard</h2>
          <h3 class="text-xl font-bold text-gradient">Creative Developer</h3>
        </div>
      </div>
    </div>
    <div class="linebreak"></div>
    <div class="spotlight flex flex-col items-center justify-center">
      <h1 class="main-heading mt-10 text-center">
        <span class="white-gradient-tb">Turning ideas into real life products </span>
        <br />
        <span class="white-gradient-tb">is my calling</span>
      </h1>
      <p class="subheading mx-10 sm:mx-20 text-center">
        I craft premium websites for creators, entrepreneurs and startups who want to convert clients, drive serious revenue and stand out in an ever-crowding
        market.
      </p>
      <NuxtLink to="/contact" class="btn-primary mt-4"> Contact </NuxtLink>
    </div>
  </div>
</template>
