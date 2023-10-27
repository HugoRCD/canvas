<script setup lang="ts">
import socials from "~/data/socials";
</script>

<template>
  <div class="flex items-center justify-center gap-6 sm:gap-10 my-7">
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
        class="social-item w-6 h-6 text-muted hover:text-main transition-all duration-300"
        :fontControlled="false"
        :alt="social.name + ' logo'"
        :aria-label="social.name + ' logo'"
      />
    </NuxtLink>
  </div>
</template>

<style scoped></style>
