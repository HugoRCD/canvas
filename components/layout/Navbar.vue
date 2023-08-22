<script lang="ts" setup>
defineProps({
  isText: {
    type: Boolean,
    default: false,
  },
});

const navigation = getNavigation("home");
</script>

<template>
  <header class="h-[45px] bg-secondary border-[1px] border-primary shadow-md group flex justify-around px-6 py-2 gap-4 w-full">
    <NuxtLink
      v-for="item in navigation"
      :key="item.name"
      :to="item.to"
      :id="item.name.toLowerCase()"
      class="hover:text-primary transition-all duration-300 ease-in-out flex items-center gap-2"
      :class="[item.name === $route.name ? 'text-primary' : 'text-muted']"
    >
      <component :is="item.icon" class="w-6 h-6 font-medium" />
      <span class="hidden sm:flex text-[14px]"> {{ $t("navigation." + item.name.toLowerCase()) }}</span>
    </NuxtLink>
  </header>
</template>
