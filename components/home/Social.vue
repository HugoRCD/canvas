<script setup lang="ts">
import socials from '~/data/socials'
</script>

<template>
  <div class="my-7 flex items-center justify-center gap-6 sm:gap-10">
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
        class="social-item size-6 text-muted transition-all duration-300 hover:text-main"
        :font-controlled="false"
        :alt="social.name + ' logo'"
        :aria-label="social.name + ' logo'"
      />
    </NuxtLink>
  </div>
</template>

<style scoped></style>
