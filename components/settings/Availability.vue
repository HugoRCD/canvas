<script setup lang="ts">
const runtimeConfig = useRuntimeConfig().public
const isAvailable = ref<'true' | 'false'>(runtimeConfig.available as 'true' | 'false')

const availability = ref([
  {
    status: 'available',
    message: 'Available for hire',
    color: 'bg-green-600/80',
    bgColor: 'bg-green-500/80',
    textColor: 'text-green-500/80',
  },
  {
    status: 'unavailable',
    message: 'Not available for hire',
    color: 'bg-red-500',
    bgColor: 'bg-red-400',
    textColor: 'text-red-400',
  },
])

defineProps({
  background: {
    type: Boolean,
    default: false,
  },
})

const currentAvailability = computed(() => {
  return availability.value.find(a => a.status === isAvailable.value) || availability.value[0]
})
</script>

<template>
  <div
    class="flex items-center rounded-full"
    :class="{ 'border border-white/10 bg-zinc-900/80 px-5 py-2 backdrop-blur-3xl': background }"
  >
    <span class="relative flex size-3">
      <span
        class="absolute inline-flex size-full animate-ping rounded-full opacity-75"
        :class="currentAvailability.color"
      />
      <span
        class="relative inline-flex size-3 scale-90 rounded-full"
        :class="currentAvailability.bgColor"
      />
    </span>
    <span
      class="ml-2 text-sm font-medium"
      :class="currentAvailability.textColor"
    >
      {{ $t("global." + currentAvailability.status) }}
    </span>
  </div>
</template>

<style scoped></style>
