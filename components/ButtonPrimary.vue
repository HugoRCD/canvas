<script setup lang="ts">
defineProps({
  pending: {
    type: Boolean,
    required: false,
    default: false,
  },
  disabled: {
    type: Boolean,
    required: false,
    default: false,
  },
  text: {
    type: String,
    required: false,
    default: "Submit",
  },
  fullWidth: {
    type: Boolean,
    required: false,
    default: false,
  },
});
</script>

<template>
  <div>
    <button class="btn-primary px-5 py-2" :disabled="disabled || pending" :class="{ 'w-full': fullWidth }">
      <Loader v-if="pending" />
      <span v-else>{{ text }}</span>
    </button>
  </div>
</template>
