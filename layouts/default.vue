<template>
  <div class="h-full flex flex-col relative">
    <div class="absolute top-0 left-0 right-0 z-50 w-50">
      <div class="flex items-center p-6">
        <LanguageSelector is-text />
      </div>
    </div>
    <slot />
    <LayoutFooter />
  </div>
</template>
