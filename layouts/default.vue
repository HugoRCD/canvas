<script setup lang="ts">
const width = useWindowSize().width;
</script>

<template>
  <div>
    <SettingsTools class="fixed bottom-14 right-3 sm:bottom-4" />
    <LayoutNavbar class="fixed z-20 top-0 flex" v-if="width > 640" />
    <LayoutNavbar class="fixed z-20 bottom-0 flex" v-else />
    <div class="sm:mt-[50px]">
      <slot />
    </div>
    <LayoutFooter />
  </div>
</template>
