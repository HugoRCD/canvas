<template>
  <div>
    <div class="linebreak"></div>
    <footer class="mx-auto max-w-7xl px-4 py-10 flex flex-col items-center gap-4">
      <Logo :size="6" />
      <span class="text-muted text-sm"
        >© 2023
        <NuxtLink target="_blank" to="https://www.maisonhochard.com" class="text-muted hover:text-primary transition-colors duration-300 ease-in-out">
          Maison Hochard </NuxtLink
        >. All rights reserved.</span
      >
    </footer>
  </div>
</template>
