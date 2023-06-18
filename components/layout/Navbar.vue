<script lang="ts" setup></script>

<template>
  <header class="p-6 flex justify-between">
    <div class="flex items-center gap-4">
      <Logo :size="12" />
      <div>
        <h1 class="text-3xl font-bold">Hugo Richard</h1>
        <h2 class="text-xl font-bold text-gradient">Creative Developer</h2>
      </div>
    </div>
    <div class="flex flex-col items-center sm:flex-row sm:gap-4">
      <LanguageToggle />
      <ThemeToggle />
    </div>
  </header>
</template>
