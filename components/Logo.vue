<script setup lang="ts">
defineProps({
  size: {
    type: Number,
    default: 6,
  },
});
</script>

<template>
  <div id="main-logo">
    <NuxtLink to="/" class="flex flex-shrink-0 items-center" id="home-redirect">
      <img class="block w-auto lg:hidden" :class="size ? 'h-' + size : 'h-6'" :src="'assets/hochard-logo-' + ($colorMode.value === 'light' ? 'dark' : 'light') + '.svg'" alt="" />
      <img class="hidden w-auto lg:block" :class="size ? 'h-' + size : 'h-6'" :src="'assets/hochard-logo-' + ($colorMode.value === 'light' ? 'dark' : 'light') + '.svg'" alt="" />
    </NuxtLink>
  </div>
</template>
