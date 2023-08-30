<script setup lang="ts"></script>

<template>
  <div>
    <SettingsTools class="fixed bottom-14 right-3 sm:bottom-4" />
    <LayoutNavbar class="fixed z-50 bottom-0 sm:top-0 sm:bottom-auto flex" />
    <div class="sm:mt-[50px]">
      <slot />
    </div>
    <LayoutFooter />
  </div>
</template>
