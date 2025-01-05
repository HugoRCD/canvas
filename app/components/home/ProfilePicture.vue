<script setup lang="ts">
const { profile } = useAppConfig()
</script>

<template>
  <div class="z-10 flex items-center justify-center">
    <SpotlightButton rounded>
      <div
        class="font-mona relative flex items-center justify-center gap-2 bg-gradient-to-b from-white/25 to-white bg-clip-text text-lg font-medium text-transparent transition-all duration-200"
      >
        <NuxtImg
          width="96"
          :src="profile.picture"
          class="size-24 rounded-full border-2 border-neutral-800/30 object-cover"
          alt="Hugo Richard Profile Picture"
          aria-label="Hugo Richard Profile Picture"
        />
      </div>
    </SpotlightButton>
  </div>
</template>
