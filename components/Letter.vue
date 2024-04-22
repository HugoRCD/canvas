<script setup lang="ts">
import appConfig from '~/app.config'
const colorMode = useColorMode()

const theme = computed(() => (colorMode.preference === 'dark' ? 'light' : 'dark'))
</script>

<template>
  <div class="letter mx-auto flex max-w-xl flex-col items-center justify-center gap-10">
    <div>
      <p class="text-left text-muted">
        {{ $t("home.letter.part1") }}
        <br>
        <br>
        {{ $t("home.letter.part2") }}
      </p>
      <div class="mt-2">
        <NuxtLink
          :to="appConfig.socials.instagram"
          target="_blank"
          class="text-left text-main"
        >
          @HugoRCD
        </NuxtLink>
      </div>
    </div>
    <img
      :src="'/assets/hr-sign-' + theme + '.svg'"
      class="w-28"
      alt="Hugo Richard Signature"
    >
  </div>
</template>

<style scoped></style>
