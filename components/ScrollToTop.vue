<script setup lang="ts">
import { ArrowUpIcon } from "@heroicons/vue/24/outline";

const isScrolling = ref(false);

onMounted(() => {
  window.addEventListener("scroll", () => {
    isScrolling.value = window.scrollY > 0;
  });
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
</script>

<template>
  <div
    class="flex items-center justify-center bg-secondary text-main rounded-full w-10 h-10 p-1 cursor-pointer border border-gray-700 hover:bg-gray-700 hover:text-white transition-colors duration-200 fixed bottom-20 right-4"
    @click="scrollToTop"
    :class="{ 'opacity-100': isScrolling, 'opacity-0': !isScrolling }"
  >
    <ArrowUpIcon class="w-6 h-6" />
  </div>
</template>

<style scoped></style>
