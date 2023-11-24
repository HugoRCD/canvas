<script lang="ts" setup>
import type { Navigation } from "~/composables/useNavigation";
const localePath = useLocalePath();

defineProps({
  isText: {
    type: Boolean,
    default: false,
  },
});

const navigation = getNavigation("home") as Record<string, Navigation>;
</script>

<template>
  <div class="flex items-center justify-center mx-auto w-full my-2">
    <header class="rounded-full">
      <SpotlightButton rounded transparent :animate="false" class="border border-white/10">
        <nav class="z-10 h-[50px] sm:h-[45px] flex justify-around gap-2 sm:hover:gap-4 p-1 transition-all duration-300 ease-in-out">
          <LayoutNavItem :item="navigation.home" :to="localePath({ name: 'index' })" />
          <LayoutNavItem :item="navigation.works" :to="localePath({ name: 'works' })" />
          <LayoutNavItem :item="navigation.writing" :to="localePath({ name: 'writing' })" />
          <LayoutNavItem :item="navigation.about" :to="localePath({ name: 'about' })" />
          <LayoutNavItem :item="navigation.contact" :to="localePath({ name: 'contact' })" />
        </nav>
      </SpotlightButton>
    </header>
  </div>
</template>
