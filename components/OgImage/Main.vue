<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
});
</script>

<template>
  <div class="relative w-full h-full flex text-white items-center justify-center">
    <img src="https://hrcd.fr/preview.webp" class="absolute inset-0 w-full h-full" alt="Article image" width="1200" height="630" />
  </div>
</template>

<style scoped>
img {
  object-fit: cover;
}
</style>
