<script setup lang="ts">
const { profilePicture } = useAppConfig();
</script>

<template>
  <div class="flex items-center justify-center z-10">
    <SpotlightButton rounded>
      <div
        class="relative bg-gradient-to-b from-white/25 to-white bg-clip-text font-mona text-lg font-medium text-transparent transition-all duration-200 flex items-center justify-center gap-2"
      >
        <NuxtImg
          width="96"
          :src="profilePicture"
          class="rounded-full h-24 w-24 object-cover border-2 border-gray-800/30"
          alt="Hugo Richard Profile Picture"
          aria-label="Hugo Richard Profile Picture"
        />
      </div>
    </SpotlightButton>
  </div>
</template>

<style scoped></style>
