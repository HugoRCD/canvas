<script setup lang="ts">
import type { PropType } from 'vue'

defineProps({
  experiences: {
    type: Object as PropType<{ title: string, date: string, company: string }[]>,
    required: true,
  },
})
</script>

<template>
  <div class="flex flex-col gap-3">
    <h3 class="mb-4 text-white-shadow font-newsreader italic text-2xl">
      {{ $t("global.experiences") }}
    </h3>
    <div class="flex flex-col gap-4">
      <div
        v-for="experience in experiences"
        :key="experience.title"
      >
        <h4 class="font-semibold">
          {{ experience.title }}
        </h4>
        <div class="flex gap-1">
          <p>
            {{ experience.date }}
          </p>
          <span class="mx-1"> / </span>
          <p>
            {{ experience.company }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
