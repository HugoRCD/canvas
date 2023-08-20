<script setup lang="ts">
import { EnvelopeIcon, ClipboardIcon } from "@heroicons/vue/24/outline";
import SvgoInstagramLight from "~/assets/socials/instagram-light.svg";
import SvgoXDark from "~/assets/socials/x-dark.svg";
import SvgoGithubLight from "~/assets/socials/github-light.svg";
import SvgoLinkedinLight from "~/assets/socials/linkedin-light.svg";
import SvgoSpotifyLight from "~/assets/socials/spotify-light.svg";

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
    <h3>
      <span class="text-lg text-muted">{{ $t("home.hero.job.part1") }} / {{ $t("home.hero.job.part2") }} </span>
    </h3>
    <SettingsAvailability />
    <div class="social flex items-center justify-center gap-6 sm:gap-10 mt-3">
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
          class="w-5 h-5 text-muted transition-colors duration-300"
          :fontControlled="false"
          :class="social.class"
          :alt="social.name + ' logo'"
          :aria-label="social.name + ' logo'"
        />
      </NuxtLink>
    </div>
    <div class="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-2 mt-4">
      <button class="flex items-center justify-center gap-2 text-muted bg-white rounded-lg px-8 py-1 hover:bg-white/80 transition-colors duration-200">
        {{ $t("home.hero.contact") }}
        <EnvelopeIcon class="w-5 h-5" />
      </button>
      <button
        class="flex items-center justify-center gap-2 text-muted bg-secondary rounded-lg px-8 py-1 transition-colors duration-200"
        @click="copyToClipboard('hrichard206@gmail.com')"
      >
        {{ $t("home.hero.email") }}
        <ClipboardIcon class="w-5 h-5" />
      </button>
    </div>
  </div>
</template>

<style scoped></style>
