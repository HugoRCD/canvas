<script setup lang="ts"></script>

<template>
  <div class="w-full text-center italic bg-main quotes select-all">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.quotes {
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 1.75rem;
  color: #7d8084;
  font-family: Inter, sans-serif;
  font-style: italic;
  border-left: 4px solid #7d8084;
  border-radius: 0.25rem;
  padding: 0.1rem;
  @media (max-width: 640px) {
    font-size: 1rem;
    line-height: 1.5rem;
  }
}
</style>
