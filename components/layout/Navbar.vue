<!--<div class="flex items-center justify-center mx-auto w-full mb-2 sm:mt-2">
<header class="mx-auto flex items-center justify-center">
  <div class="overflow-hidden rounded-full">
    <NavGroup v-slot="{ ready, size, position, duration }" as="nav" class="relative rounded-full border border-white/10 bg-white/5 p-2">
      <div
        :style="{
              '&#45;&#45;size': size,
              '&#45;&#45;position': position,
              '&#45;&#45;duration': duration,
            }"
      >
        &lt;!&ndash; border highlighter &ndash;&gt;
        <div
          v-if="ready"
          class="absolute bottom-0 h-1/2 w-[var(&#45;&#45;size)] translate-x-[var(&#45;&#45;position)] bg-white/75 blur-xl transition-[width,transform] duration-[&#45;&#45;duration]"
        ></div>

        &lt;!&ndash; background &ndash;&gt;
        <div class="absolute inset-0 rounded-full bg-zinc-800"></div>

        <div class="relative">
          &lt;!&ndash; pill &ndash;&gt;
          <div
            v-if="ready"
            class="absolute inset-y-0 h-full w-[var(&#45;&#45;size)] translate-x-[var(&#45;&#45;position)] rounded-full bg-white/10 transition-[width,transform] duration-[&#45;&#45;duration]"
          ></div>

          &lt;!&ndash; light &ndash;&gt;
          <div
            v-if="ready"
            class="absolute bottom-0 h-1/3 w-[var(&#45;&#45;size)] translate-x-[var(&#45;&#45;position)] rounded-full bg-white opacity-20 blur-md transition-[width,transform] duration-[&#45;&#45;duration]"
          ></div>

          <NavList as="ul" class="relative flex items-center gap-1 sm:gap-3">
            <NavItem v-for="(item, index) in navigation" :key="index" v-slot="{ setActive, isActive }" as="li" :active="route === item.to">
              <NuxtLink
                :to="item.to"
                :class="[isActive ? 'text-white/75 text-shadow-sm' : 'text-white/60 hover:text-white/75']"
                class="flex px-4 py-1.5 text-sm font-light transition-[text-shadow,color] duration-300"
                @click.prevent="setActive"
                :aria-label="item.name + ' link'"
              >
                <component :is="item.icon" class="w-6 h-6 sm:w-6 sm:h-6 font-medium" />
              </NuxtLink>
            </NavItem>
            <DevOnly>
              <NavItem v-for="(item, index) in devNavigation" :key="index" v-slot="{ setActive, isActive }" as="li">
                <NuxtLink
                  :to="item.to"
                  :class="[isActive ? 'text-white/75 text-shadow-sm' : 'text-white/60 hover:text-white/75']"
                  class="flex px-4 py-1.5 text-sm font-light transition-[text-shadow,color] duration-300"
                  @click.prevent="setActive"
                  :aria-label="item.name + ' link'"
                >
                  <component :is="item.icon" class="w-6 h-6 sm:w-6 sm:h-6 font-medium" />
                </NuxtLink>
              </NavItem>
            </DevOnly>
          </NavList>
        </div>
      </div>
    </NavGroup>
  </div>-->

<script lang="ts" setup>
defineProps({
  isText: {
    type: Boolean,
    default: false,
  },
});

const navigation = getNavigation("home").filter((link) => link.devOnly !== true);
</script>

<template>
  <div class="flex items-center justify-center mx-auto w-full my-2">
    <header class="rounded-full">
      <SpotlightButton rounded :animate="false" class="">
        <nav class="z-10 h-[50px] sm:h-[45px] flex justify-around gap-2 p-1">
          <NuxtLink
            v-for="item in navigation"
            :id="item.name.toLowerCase()"
            :key="item.name"
            :aria-label="item.name + ' navigation link'"
            :class="[item.name === $route.name ? 'text-white/75 text-shadow-sm border border-white/5 backdrop-blur-3xl bg-zinc-900/50' : 'text-muted']"
            :to="item.to"
            class="flex items-center rounded-full px-4 sm:px-6 py-1 border border-transparent hover:bg-zinc-900/50 hover:backdrop-blur-3xl hover:border-white/5 hover:text-main duration-300 ease-in-out transition-all"
          >
            <component :is="item.icon" class="w-7 h-7 sm:w-6 sm:h-6 font-medium" />
          </NuxtLink>
        </nav>
      </SpotlightButton>
    </header>
  </div>
</template>
