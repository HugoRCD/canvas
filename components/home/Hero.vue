<script setup lang="ts"></script>

<template>
  <div>
    <h1 class="font-display text-center text-3xl font-light leading-tight lg:text-5xl">
      <span>
        {{ $t("home.hero.part1") }}
      </span>
      <br>
      <span class="bg-gradient-to-br from-white/90 to-white/30 bg-clip-text text-transparent">
        {{ $t("home.hero.part2") }}
      </span>
    </h1>

    <!-- subtitle -->
    <h2 class="mx-auto mt-4 max-w-xl text-center text-lg font-extralight text-white/60">
      {{ $t("home.hero.subtitle") }}
    </h2>

    <div class="mt-3 flex items-center justify-center">
      <SettingsAvailability background />
    </div>
  </div>
</template>

<style scoped></style>
