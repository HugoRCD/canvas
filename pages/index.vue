<script setup lang="ts">
import appConfig from "~/app.config";

definePageMeta({
  title: "Home",
  name: "Home",
  path: "/",
  description: "Home page",
  keywords: "Home",
});
</script>

<template>
  <div class="flex flex-col mb-10">
    <Hero />
    <div class="linebreak"></div>
    <div class="spotlight-section">
      <div class="max-w-4xl flex flex-col items-center gap-4">
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
    <div class="flex flex-col justify-center max-w-xl mx-auto mt-20 gap-10">
      <Card class="md:translate-x-[-50%]">
        <h2 class="text-2xl font-bold white-gradient-tb">
          {{ $t("home.about.title") }}
        </h2>
        <p class="subheading">
          {{ $t("home.about.description") }}
        </p>
      </Card>
      <Card class="md:translate-x-[50%]">
        <h2 class="text-2xl font-bold white-gradient-tb">
          {{ $t("home.projects.title") }}
        </h2>
        <p class="subheading">
          {{ $t("home.projects.description") }}
        </p>
      </Card>
      <Card class="md:translate-x-[-50%]">
        <h2 class="text-2xl font-bold white-gradient-tb">
          {{ $t("home.contact.title") }}
        </h2>
        <p class="subheading">
          {{ $t("home.contact.description") }}
        </p>
      </Card>
    </div>
    <div class="linebreak mt-40"></div>
    <div class="spotlight-section low-bg">
      <Letter />
    </div>
  </div>
</template>
