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
  <div class="h-screen flex flex-col bg-main">
    <div class="flex justify-center items-center p-6 relative h-[500px]">
      <div class="flex flex-col items-center gap-2">
        <Logo :size="20" />
        <div class="flex flex-col items-center">
          <h2 class="text-3xl font-bold text-text-color">Hugo Richard</h2>
          <h3 class="text-xl font-bold text-gradient">Creative Developer</h3>
        </div>
      </div>
      <img src="/assets/aurora.png" alt="aurora" class="object-cover blur-3xl w-full h-full absolute top-0 left-0" />
    </div>
    <div class="linebreak"></div>
    <div class="spotlight flex flex-col items-center justify-center z-10 bg-main">
      <div class="max-w-6xl flex flex-col items-center gap-4">
        <h1 class="main-heading mt-16 text-center">
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
  </div>
</template>
