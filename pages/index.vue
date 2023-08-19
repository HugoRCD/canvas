<script setup lang="ts">
definePageMeta({
  title: "Home",
  name: "Home",
  path: "/",
  description: "Home page",
  keywords: "Home",
});

const socials = [
  {
    name: "Instagram",
    icon: "fab fa-instagram",
    link: "https://www.instagram.com/hugorcd/",
  },
  {
    name: "LinkedIn",
    icon: "fab fa-linkedin",
    link: "https://www.linkedin.com/in/hugorcd/",
  },
  {
    name: "GitHub",
    icon: "fab fa-github",
    link: "",
  },
  {
    name: "Twitter",
    icon: "fab fa-twitter",
    link: "",
  },
];
</script>

<template>
  <div class="flex flex-col gap-4 items-center justify-center p-6">
    <ThemeSelector class="fixed bottom-3 right-3 sm:bottom-4" />
    <div class="flex flex-col items-center gap-2">
      <div class="flex items-center justify-between">
        <img src="/assets/hugo-richard.jpeg" class="rounded-full h-24 w-24 object-cover border-2 border-gray-800/30" alt="Hugo Richard Profile Picture" />
      </div>
      <h2 class="text-2xl text-primary">
        <span>Hugo Richard</span>
      </h2>
      <Availability />
      <div class="social">
        <div class="flex items-center justify-center gap-4">
          <NuxtLink
            v-for="social in socials"
            :key="social.name"
            :to="social.link"
            class="flex items-center justify-center rounded-full w-10 h-10 bg-primary text-primary hover:bg-primary/80"
          >
            <div class="h-5 w-5 bg-secondary rounded-full"></div>
          </NuxtLink>
        </div>
      </div>
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
