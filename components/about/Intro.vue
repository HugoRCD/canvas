<script setup lang="ts"></script>

<template>
  <div class="flex flex-col gap-3 sm:ml-4">
    <h3 class="text-muted text-lg">Intro</h3>
    <div class="flex flex-col gap-4 text-main">
      <p>
        {{ $t("about.intro.part1") }}
      </p>
      <p>
        {{ $t("about.intro.part2") }}
      </p>
      <p>
        {{ $t("about.intro.part3") }}
      </p>
      <p>
        {{ $t("about.intro.part4") }}
      </p>
    </div>
  </div>
</template>

<style scoped></style>
