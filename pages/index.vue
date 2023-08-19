<script setup lang="ts">
import SvgoInstagramLight from "~/assets/socials/instagram-light.svg";
import SvgoXDark from "~/assets/socials/x-dark.svg";
import SvgoGithubLight from "~/assets/socials/github-light.svg";
import SvgoLinkedinLight from "~/assets/socials/linkedin-light.svg";
import SvgoSpotifyLight from "~/assets/socials/spotify-light.svg";

definePageMeta({
  title: "Home",
  name: "Home",
  path: "/",
  description: "Home page",
  keywords: "Home",
});

const colorMode = useColorMode();
const theme = computed(() => (colorMode.preference === "dark" ? "dark" : "light"));

const socials = computed(() => [
  {
    name: "Instagram",
    logo: SvgoInstagramLight,
    color: "#E1306C",
    class: "hover:text-[#E1306C]",
    link: "https://www.instagram.com/hugo.rcd_",
  },
  {
    name: "GitHub",
    logo: SvgoGithubLight,
    color: "#4a4a4a",
    class: "hover:text-[#383838]",
    link: "https://github.com/HugoRCD",
  },
  {
    name: "X / Twitter",
    logo: SvgoXDark,
    color: "#1DA1F2",
    class: "hover:text-[#1DA1F2]",
    link: "https://twitter.com/HugoRCD__",
  },
  {
    name: "LinkedIn",
    logo: SvgoLinkedinLight,
    color: "#0077B5",
    class: "hover:text-[#0077B5]",
    link: "https://www.linkedin.com/in/hugo-richard-0801/",
  },
  {
    name: "Spotify",
    logo: SvgoSpotifyLight,
    color: "#1DB954",
    class: "hover:text-[#1DB954]",
    link: "https://open.spotify.com/user/yuvl0zpp3bpx4hne1ag7huten?si=df7ee2777c0c4fc4",
  },
]);
</script>

<template>
  <div class="flex flex-col gap-4 items-center justify-center p-6">
    <Tools class="fixed bottom-3 right-3 sm:bottom-4" />
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
            <component
              :is="social.logo"
              class="w-5 h-5 text-primary transition-colors duration-300"
              :fontControlled="false"
              :class="social.class"
              :alt="social.name + ' logo'"
              :aria-label="social.name + ' logo'"
            />
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
