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
  <div class="flex items-center justify-center mx-auto w-full mb-2 sm:mt-2">
    <header class="mx-auto flex items-center justify-center">
      <div class="overflow-hidden rounded-full">
        <NavGroup v-slot="{ ready, size, position, duration }" as="nav" class="relative rounded-full border border-white/10 bg-white/5 p-2">
          <div
            :style="{
              '--size': size,
              '--position': position,
              '--duration': duration,
            }"
          >
            <!-- border highlighter -->
            <div
              v-if="ready"
              class="absolute bottom-0 h-1/2 w-[var(--size)] translate-x-[var(--position)] bg-white/75 blur-xl transition-[width,transform] duration-[--duration]"
            ></div>

            <!-- background -->
            <div class="absolute inset-0 rounded-full bg-zinc-800"></div>

            <div class="relative">
              <!-- pill -->
              <div
                v-if="ready"
                class="absolute inset-y-0 h-full w-[var(--size)] translate-x-[var(--position)] rounded-full bg-white/10 transition-[width,transform] duration-[--duration]"
              ></div>

              <!-- light -->
              <div
                v-if="ready"
                class="absolute bottom-0 h-1/3 w-[var(--size)] translate-x-[var(--position)] rounded-full bg-white opacity-20 blur-md transition-[width,transform] duration-[--duration]"
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
      </div>
    </header>
  </div>
</template>
