<script setup lang="ts">
definePageMeta({
  name: 'Articles',
  title: 'Articles',
  middleware: [],
})

const resetError = (error: { value: null }) => {
  error.value = null
  useRouter().back()
}
</script>

<template>
  <div>
    <NuxtErrorBoundary>
      <NuxtPage />
      <template #error="{ error }">
        <div class="flex h-screen flex-col justify-center">
          <h2 class="text-center text-4xl font-bold">
            {{ $t("writing.not_found") }}
          </h2>
          <p class="mt-4 text-center text-muted">
            {{ $t("writing.not_found_description") }}
          </p>
          <p>
            {{ error }}
          </p>
          <div class="mt-4 flex justify-center">
            <button
              class="btn-primary"
              @click="resetError"
              @keydown.enter="resetError"
            >
              {{ $t("writing.back_link") }}
            </button>
          </div>
        </div>
      </template>
    </NuxtErrorBoundary>
  </div>
</template>

<style scoped></style>
