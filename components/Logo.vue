<script setup lang="ts">
import MaisonHochard from "~/assets/logo/maison-hochard.svg";

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
  <NuxtLink to="/" class="flex flex-shrink-0 items-center" aria-label="Go back to home page">
    <MaisonHochard class="block w-auto" :class="size ? 'h-' + size : 'h-6'" :fontControlled="false" />
    <span class="text-xs font-semibold ml-1" v-if="isText">{{ appName }}</span>
  </NuxtLink>
</template>
