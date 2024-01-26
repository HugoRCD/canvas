<script lang="ts" setup>
import type { Navigation } from "~/composables/useNavigation";

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
      <SpotlightButton
        rounded
        transparent
        :animate="false"
        class="border border-white/10"
      >
        <nav class="z-10 h-[50px] sm:h-[45px] flex justify-around gap-2 sm:hover:gap-4 p-1 transition-all duration-300 ease-in-out">
          <NuxtLink
            v-for="item in navigation"
            :id="item.name.toLowerCase()"
            :key="item.name"
            :aria-label="item.name + ' navigation link'"
            :class="[
              item.to === $route.path
                ? 'text-white/75 shadow-white/50 shadow-2xl text-shadow-sm border border-white/5 backdrop-blur-3xl bg-zinc-900/10'
                : 'text-muted',
            ]"
            :to="item.to"
            class="flex items-center rounded-full px-4 sm:px-6 py-1 border border-transparent hover:bg-zinc-900/50 hover:backdrop-blur-3xl hover:border-white/5 hover:text-main duration-300 ease-in-out transition-all"
          >
            <component
              :is="item.icon"
              class="w-7 h-7 sm:w-6 sm:h-6 font-medium"
            />
          </NuxtLink>
        </nav>
      </SpotlightButton>
    </header>
  </div>
</template>
