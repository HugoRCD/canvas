<script setup lang="ts">
const { appName } = useAppConfig();
defineProps({
  isText: {
    type: Boolean,
    default: false,
  },
  size: {
    type: Number,
    default: 6,
  },
});
</script>

<template>
  <div id="main-logo">
    <NuxtLink to="/" class="flex flex-shrink-0 items-center" aria-label="Go back to home page">
      <img
        class="block w-auto lg:hidden"
        :class="size ? 'h-' + size : 'h-6'"
        :src="'assets/hochard-logo-' + ($colorMode.value === 'light' ? 'dark' : 'light') + '.svg'"
        alt=""
      />
      <img
        class="hidden w-auto lg:block"
        :class="size ? 'h-' + size : 'h-6'"
        :src="'assets/hochard-logo-' + ($colorMode.value === 'light' ? 'dark' : 'light') + '.svg'"
        alt=""
      />
      <span class="text-xs font-semibold ml-1" v-if="isText">{{ appName }}</span>
    </NuxtLink>
  </div>
</template>
