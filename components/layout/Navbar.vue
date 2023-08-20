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
  <div class="flex flex-col gap-4 items-center justify-center p-2">
    <header class="card-nf group flex justify-between px-6 py-2 gap-4 rounded-full">
      <NuxtLink
        v-for="item in navigation"
        :key="item.name"
        :to="item.to"
        :id="item.name.toLowerCase()"
        class="font-semibold hover:text-primary hover:scale-110 transition-all duration-300 ease-in-out flex items-center gap-2"
        :class="[item.name === $route.name ? 'text-primary' : 'text-muted']"
      >
        <component :is="item.icon" class="w-5 h-5" />
        <span v-if="isText">{{ $t("navigation." + item.name.toLowerCase()) }}</span>
      </NuxtLink>
    </header>
  </div>
</template>
