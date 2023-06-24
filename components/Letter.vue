<script setup lang="ts">
import appConfig from "~/app.config";
</script>

<template>
  <div class="letter flex flex-col items-center justify-center max-w-xl mx-auto mt-20 gap-10">
    <img src="/assets/hugo-richard.jpeg" class="rounded-full h-24 w-24 object-cover border-[2px] border-white/20" alt="Hugo Richard Profile Picture" />
    <div class="mt-6 mx-8">
      <p class="text-white/60 text-left mb-4">
        {{ $t("home.letter.part1") }}
        <br />
        <br />
        {{ $t("home.letter.part2") }}
        <br />
        <br />
        {{ $t("home.letter.part3") }}
        <br />
        <br />
        {{ $t("home.letter.part4") }}
      </p>
      <NuxtLink :to="appConfig.socials.instagram" target="_blank" class="text-white/60 text-left">@HugoRCD</NuxtLink>
    </div>
    <img src="/assets/hr-signature-white.png" class="w-28 mt-4" alt="Hugo Richard Signature" />
  </div>
</template>

<style scoped></style>
