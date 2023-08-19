<script setup lang="ts">
definePageMeta({
  title: "Home",
  name: "Home",
  path: "/",
  description: "Home page",
  keywords: "Home",
});

const colorMode = useColorMode();
const invertTheme = computed(() => (colorMode.preference === "dark" ? "light" : "dark"));
const theme = computed(() => (colorMode.preference === "dark" ? "dark" : "light"));

const socials = computed(() => [
  {
    name: "Instagram",
    logo: `/assets/logo/socials/instagram-${invertTheme.value}.svg`,
    link: "https://www.instagram.com/hugo.rcd_",
  },
  {
    name: "GitHub",
    logo: `/assets/logo/socials/github-${invertTheme.value}.svg`,
    link: "https://github.com/HugoRCD",
  },
  {
    name: "X / Twitter",
    logo: `/assets/logo/socials/x-${invertTheme.value}.svg`,
    link: "https://twitter.com/HugoRCD__",
  },
  {
    name: "LinkedIn",
    logo: `/assets/logo/socials/linkedin-${invertTheme.value}.svg`,
    link: "https://www.linkedin.com/in/hugo-richard-0801/",
  },
  {
    name: "Spotify",
    logo: `/assets/logo/socials/spotify-${invertTheme.value}.svg`,
    link: "https://open.spotify.com/user/yuvl0zpp3bpx4hne1ag7huten?si=df7ee2777c0c4fc4",
  },
]);
</script>

<template>
  <div class="flex flex-col gap-4 items-center justify-center p-6">
    <ThemeSelector class="fixed bottom-3 right-3 sm:bottom-4" />
    <div class="flex flex-col items-center gap-2">
      <div class="flex items-center justify-between">
        <ClientOnly>
          <img
            :src="'/assets/hugo-richard-' + theme + '.webp'"
            class="rounded-full h-24 w-24 object-cover border-2 border-gray-800/30"
            alt="Hugo Richard Profile Picture"
            aria-label="Hugo Richard Profile Picture"
          />
          <template #fallback>
            <div class="rounded-full h-24 w-24 object-cover border-2 border-gray-800/30"></div>
          </template>
        </ClientOnly>
      </div>
      <h2 class="text-2xl text-primary">
        <span>Hugo Richard</span>
      </h2>
      <Availability />
      <div class="social">
        <div class="flex items-center justify-center gap-6 sm:gap-10 mt-3">
          <NuxtLink
            v-for="social in socials"
            :key="social.name"
            :to="social.link"
            target="_blank"
            class="flex items-center justify-center"
            :aria-label="'Go to ' + social.name + ' profile'"
          >
            <img :src="social.logo" class="w-5 h-5" :alt="social.name + ' logo'" :aria-label="social.name + ' logo'" />
          </NuxtLink>
        </div>
      </div>
    </div>
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
