<script lang="ts" setup>
const { t } = useI18n();
const route = useRoute();

const navigation = getNavigation("home");
</script>

<template>
  <header class="backdrop-blur-lg bg-black-opacity/40 sticky top-0 z-50">
    <nav class="mx-auto flex max-w-7xl items-center justify-between py-3 px-4">
      <div class="flex flex-1 items-center">
        <div class="hidden lg:flex lg:gap-x-8">
          <NuxtLink
            v-for="item in navigation"
            :id="item.name.toLowerCase()"
            :key="item.name"
            :to="item.to"
            class="text-xs font-semibold leading-6 transition-colors duration-300 ease-in-out"
          >
            {{ $t("navigation." + item.name.toLowerCase()) }}
          </NuxtLink>
        </div>
      </div>
      <Logo :size="6" />
      <div class="flex flex-1 justify-end items-center gap-x-4">
        <LanguageToggle />
        <ThemeToggle />
      </div>
    </nav>
  </header>
</template>