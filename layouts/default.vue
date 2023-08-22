<template>
  <div>
    <SettingsTools class="fixed bottom-14 right-3 sm:bottom-4" />
    <LayoutNavbar class="fixed top-0 hidden sm:flex" />
    <LayoutNavbar class="fixed bottom-0 flex sm:hidden" />
    <slot />
    <LayoutFooter />
  </div>
</template>
<script setup lang="ts"></script>
