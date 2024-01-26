<script setup lang="ts">
const { profilePicture } = useAppConfig();
</script>

<template>
  <div class="flex justify-center">
    <SpotlightCard
      mode="after"
      from="rgba(255,255,255,0.1)"
      :size="400"
      class="hidden sm:flex group w-64 rounded-2xl border border-white/10 bg-white/5 p-2 pb-4"
    >
      <div class="relative">
        <NuxtImg
          width="256"
          :src="profilePicture"
          class="absolute inset-0 h-64 w-64 scale-110 rounded-xl object-cover blur-xl grayscale saturate-200 transition-all duration-300 group-hover:blur-[32px] group-hover:grayscale-0"
          alt="Hugo Richard Profile Picture"
          aria-label="Hugo Richard Profile Picture"
        />
        <NuxtImg
          width="256"
          src="/assets/hugo-richard-light.webp"
          class="relative h-64 w-64 rounded-xl object-cover grayscale transition-all duration-300 group-hover:grayscale-0"
          alt="Hugo Richard Profile Picture"
          aria-label="Hugo Richard Profile Picture"
        />
      </div>
    </SpotlightCard>
    <SpotlightCard
      mode="after"
      from="rgba(255,255,255,0.1)"
      :size="400"
      class="sm:hidden group w-64 rounded-2xl border border-white/10 bg-white/5 p-2 pb-4"
    >
      <NuxtImg
        width="256"
        :src="profilePicture"
        class="h-64 w-64 rounded-xl object-cover transition-all duration-300"
        alt="Hugo Richard Profile Picture"
        aria-label="Hugo Richard Profile Picture"
      />
    </SpotlightCard>
  </div>
</template>

<style scoped></style>
