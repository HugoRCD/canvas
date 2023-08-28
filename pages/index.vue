<script setup lang="ts">
definePageMeta({
  title: "Home",
  name: "Home",
});
</script>

<template>
  <div class="flex flex-col gap-4 items-center justify-center p-6">
    <Hero />
    <div class="linebreak my-6"></div>
    <div class="flex flex-col max-w-3xl gap-8">
      <div class="flex flex-col gap-4">
        <h3 class="text-muted">
          {{ $t("navigation.about") }}
        </h3>
        <div class="flex flex-col gap-4 text-primary font-light">
          <p>
            {{ $t("home.about.part1") }}
          </p>
          <p>
            {{ $t("home.about.part2") }}
          </p>
          <p>
            {{ $t("home.about.part3") }}
          </p>
        </div>
      </div>
      <div class="flex flex-col gap-4">
        <h3 class="text-muted">
          {{ $t("navigation.projects") }}
        </h3>
        <ProjectList featured />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
