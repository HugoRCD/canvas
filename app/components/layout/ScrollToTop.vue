<script setup lang="ts">
const isScrolling = ref(false)

onMounted(() => {
  window.addEventListener('scroll', () => {
    isScrolling.value = window.scrollY > 0
  })
})

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}
</script>

<template>
  <div class="fixed bottom-36 right-3 z-50 sm:bottom-20">
    <SpotlightButton
      aria-label="scroll to top button"
      class="flex size-10 items-center justify-center p-1 text-muted transition-all duration-200"
      rounded
      :class="{ 'opacity-100': isScrolling, 'opacity-0': !isScrolling }"
      @click="scrollToTop"
    >
      <UIcon
        name="heroicons-arrow-up"
        class="z-20 size-6"
      />
    </SpotlightButton>
  </div>
</template>
