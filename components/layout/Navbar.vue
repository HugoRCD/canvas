<script lang="ts" setup>
defineProps({
  isText: {
    type: Boolean,
    default: false,
  },
});

const navigation = getNavigation("home").filter((link) => link.devOnly !== true);
const devNavigation = getNavigation("home").filter((link) => link.devOnly === true);
</script>

<template>
  <div class="flex items-center justify-center mx-auto w-full sm:mt-2">
    <header
      class="z-10 h-[50px] sm:h-[45px] bg-secondary border-[1px] border-primary shadow-md group flex justify-around px-6 py-3 sm:py-2 gap-4 sm:gap-8 sm:rounded-full w-full sm:w-auto"
    >
      <NuxtLink
        v-for="item in navigation"
        :key="item.name"
        :to="item.to"
        :id="item.name.toLowerCase()"
        class="hover:text-primary transition-all duration-300 ease-in-out flex items-center gap-2"
        :class="[item.name === $route.name ? 'text-primary' : 'text-muted']"
        :aria-label="item.name + ' navigation link'"
      >
        <component :is="item.icon" class="w-7 h-7 sm:w-6 sm:h-6 font-medium" />
      </NuxtLink>
      <DevOnly>
        <NuxtLink
          v-for="item in devNavigation"
          :key="item.name"
          :to="item.to"
          :id="item.name.toLowerCase()"
          class="hover:text-primary transition-all duration-300 ease-in-out flex items-center gap-2"
          :class="[item.name === $route.name ? 'text-primary' : 'text-muted']"
          :aria-label="item.name + ' navigation link'"
        >
          <component :is="item.icon" class="w-7 h-7 sm:w-6 sm:h-6 font-medium" />
        </NuxtLink>
      </DevOnly>
    </header>
  </div>
</template>
