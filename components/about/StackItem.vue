<script setup lang="ts">
import type { PropType } from "vue";
import type { Stack } from "~/data/stack";

defineProps({
  item: {
    type: Object as PropType<Stack>,
    required: true,
  },
});
</script>

<template>
  <SpotlightCard white class="p-6">
    <NuxtLink :to="item.link" target="_blank" :aria-label="item.name + ' link'" class="flex gap-4">
      <div class="h-14 w-14">
        <component
          :is="item.logo"
          class="w-8 h-8 text-main"
          :class="item.logo.includes('Color') ? '' : 'text-main'"
          :fontControlled="false"
          :alt="item.name + ' logo'"
          :filled="item.logo.includes('Color')"
          :aria-label="item.name + ' logo'"
        />
      </div>
      <div class="flex flex-col gap-2">
        <div class="text-lg text-white-shadow font-testimonial font-bold">
          {{ item.name }}
        </div>
        <p class="text-sm font-light leading-relaxed text-muted">
          {{ item.description[$i18n.locale as "en" | "fr"] }}
        </p>
        <div class="flex gap-2">
          <UKbd size="sm" v-for="item in item.tags" :key="item" :aria-label="item" :value="$t(`tags.${item}`)" />
        </div>
      </div>
    </NuxtLink>
  </SpotlightCard>
</template>

<style scoped lang="scss"></style>
