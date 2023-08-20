<script setup lang="ts">
import appConfig from "~/app.config";
const colorMode = useColorMode();

const theme = computed(() => (colorMode.preference === "dark" ? "light" : "dark"));
</script>

<template>
  <div class="letter flex flex-col items-center justify-center max-w-xl mx-auto gap-10">
    <div>
      <p class="text-muted text-left">
        {{ $t("home.letter.part1") }}
        <br />
        <br />
        {{ $t("home.letter.part2") }}
      </p>
      <div class="mt-2">
        <NuxtLink :to="appConfig.socials.instagram" target="_blank" class="text-primary text-left">@HugoRCD</NuxtLink>
      </div>
    </div>
    <img :src="'/assets/hr-sign-' + theme + '.svg'" class="w-28" alt="Hugo Richard Signature" />
  </div>
</template>

<style scoped></style>
