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
  <NuxtLink
    to="/"
    class="flex flex-shrink-0 items-center"
    aria-label="Go back to home page"
  >
    <SvgoMaisonHochard
      class="block w-auto"
      :class="size ? 'h-' + size : 'h-6'"
      :font-controlled="false"
    />
    <span
      v-if="isText"
      class="text-xs font-semibold ml-1"
    >{{ appName }}</span>
  </NuxtLink>
</template>
