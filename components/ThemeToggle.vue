<template>
  <ClientOnly>
    <UButton
      :icon="$colorMode.value === 'light' ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'"
      color="gray"
      variant="ghost"
      aria-label="Theme"
      @click="$colorMode.value === 'light' ? ($colorMode.preference = 'dark') : ($colorMode.preference = 'light')"
    />
    <template #fallback>
      <div class="w-8 h-8" />
    </template>
  </ClientOnly>
</template>
