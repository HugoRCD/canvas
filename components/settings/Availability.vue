<script setup lang="ts">
const runtimeConfig = useRuntimeConfig().public;
const isAvailable = ref<"true" | "false">(runtimeConfig.available as "true" | "false");

const availability = ref([
  {
    status: "available",
    message: "Available for hire",
    color: "bg-green-500",
    bgColor: "bg-green-400",
  },
  {
    status: "unavailable",
    message: "Not available for hire",
    color: "bg-red-500",
    bgColor: "bg-red-400",
  },
]);

const currentAvailability = computed(() => {
  return availability.value.find((a) => a.status === isAvailable.value) || availability.value[0];
});
</script>

<template>
  <div class="flex items-center rounded-xl">
    <span class="relative flex h-3 w-3">
      <span class="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" :class="currentAvailability.color"></span>
      <span class="relative inline-flex rounded-full h-3 w-3 scale-90" :class="currentAvailability.bgColor"></span>
    </span>
    <span class="ml-2 text-sm font-medium text-green-500">{{ $t("availability." + currentAvailability.status) }}</span>
  </div>
</template>

<style scoped></style>
