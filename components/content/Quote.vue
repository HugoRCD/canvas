<script setup lang="ts"></script>

<template>
  <div class="quotes w-full select-all bg-main text-center italic">
    <slot />
  </div>
</template>

<style scoped>
.quotes {
  margin-top: 2rem;
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
