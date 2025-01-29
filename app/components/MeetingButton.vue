<script setup lang="ts">
const meetingLink = useAppConfig().global.meetingLink
</script>

<template>
  <div class="flex gap-4 sm:gap-2">
    <SpotlightButton>
      <NuxtLink
        class="font-mona relative flex items-center justify-center gap-2 bg-gradient-to-b from-white/25 to-white bg-clip-text text-lg font-medium text-transparent transition-all duration-200"
        :to="meetingLink"
      >
        {{ $t("global.meeting") }}
        <UIcon
          name="heroicons:calendar-days"
          class="size-5 text-white/80"
        />
      </NuxtLink>
    </SpotlightButton>
  </div>
</template>
