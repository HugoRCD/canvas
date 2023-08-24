<template>
  <div>
    <SettingsTools class="fixed bottom-14 right-3 sm:bottom-4" />
    <LayoutNavbar class="fixed z-20 top-0 hidden sm:flex" />
    <LayoutNavbar class="fixed z-20 bottom-0 flex sm:hidden" />
    <div class="sm:mt-[50px]">
      <slot />
    </div>
    <LayoutFooter />
  </div>
</template>
<script setup lang="ts"></script>
