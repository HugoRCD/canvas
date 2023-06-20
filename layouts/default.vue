<template>
  <div class="flex flex-col relative">
    <div class="absolute top-0 left-0 right-0 z-50 w-50">
      <div class="fixed flex items-center p-6">
        <div class="bg-black/20 rounded-full backdrop-blur-3xl border-[1px] border-white/20">
          <LanguageSelector is-text />
        </div>
      </div>
    </div>
    <slot />
    <LayoutFooter />
  </div>
</template>
<script setup lang="ts"></script>
