<script setup lang="ts">
definePageMeta({
  title: "Home",
  name: "Home",
});
</script>

<template>
  <section class="relative pt-12">
    <!-- grid -->
    <div class="pointer-events-none absolute inset-0 bg-center bg-grid-white/10 bg-grid-16 [mask-image:radial-gradient(white,transparent_85%)]"></div>

    <div class="relative flex flex-col justify-center gap-4 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
      <!-- spotlight -->
      <div
        class="absolute -top-8 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-white/25 blur-[120px] lg:-top-8 lg:h-[32rem] lg:w-[32rem] lg:blur-[200px]"
      ></div>

      <!-- profile picture -->
      <HomeProfilePicture />

      <div class="flex flex-col items-center justify-center z-20">
        <!-- title -->
        <HomeHero />

        <!-- social -->
        <HomeSocial />

        <!-- cta -->
        <HomeCTA />

        <div class="flex flex-col gap-4 w-full max-w-3xl lg:mt-16 mt-12">
          <!-- projects -->
          <HomeProjects />
        </div>
      </div>
    </div>
  </section>
</template>
