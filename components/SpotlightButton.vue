<script setup>
defineProps({
  as: {
    type: String,
    default: "button",
  },
});
</script>

<template>
  <component :is="as" class="group relative inline-flex items-center overflow-hidden rounded-md bg-zinc-800 px-8 py-1 transition">
    <div class="absolute inset-0 flex items-center [container-type:inline-size]">
      <div
        class="absolute h-[100cqw] w-[100cqw] animate-spin bg-[conic-gradient(from_0_at_50%_50%,rgba(255,255,255,0.5)_0deg,transparent_60deg,transparent_300deg,rgba(255,255,255,0.5)_360deg)] opacity-0 transition duration-300 group-hover:opacity-100"
      ></div>
    </div>

    <div class="absolute inset-0.5 rounded-md bg-zinc-900"></div>

    <div
      class="absolute bottom-0 left-1/2 h-1/3 w-4/5 -translate-x-1/2 rounded-md bg-white/10 opacity-50 blur-md transition-all duration-500 group-hover:h-2/3 group-hover:opacity-100"
    ></div>

    <slot />
  </component>
</template>
