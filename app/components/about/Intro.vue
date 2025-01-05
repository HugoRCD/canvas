<script setup lang="ts"></script>

<template>
  <div class="relative flex flex-col gap-3 sm:ml-4">
    <h3 class="text-lg text-muted">
      Intro
    </h3>
    <div class="flex flex-col gap-4">
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
    <AboutSignature class="absolute -bottom-1/3 right-0 hidden w-40 sm:block" />
    <AboutSignature class="black absolute -right-2 bottom-[-6rem] w-32 sm:hidden" />
  </div>
</template>
