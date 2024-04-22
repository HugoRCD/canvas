<script setup lang="ts">
import experiences from '~/data/about'
</script>

<template>
  <div class="flex flex-col gap-3">
    <h3 class="text-lg text-muted">
      {{ $t("about.experience") }}
    </h3>
    <div class="flex flex-col gap-4 text-main">
      <div
        v-for="experience in experiences[$i18n.locale as 'en' | 'fr']"
        :key="experience.title"
      >
        <h4 class="font-semibold text-main">
          {{ experience.title }}
        </h4>
        <div class="flex gap-1 text-muted">
          <p>
            {{ experience.date }}
          </p>
          <span class="mx-1"> / </span>
          <p>
            {{ experience.company }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
