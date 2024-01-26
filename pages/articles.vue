<script setup lang="ts">
definePageMeta({
  name: "Articles",
  title: "Articles",
  middleware: [],
});

const resetError = (error: { value: null }) => {
  error.value = null;
  useRouter().back();
};
</script>

<template>
  <div>
    <NuxtErrorBoundary>
      <NuxtPage />
      <template #error="{ error }">
        <div class="h-screen flex flex-col justify-center">
          <h2 class="text-4xl font-bold text-center">
            {{ $t("writing.not_found") }}
          </h2>
          <p class="text-center text-muted mt-4">
            {{ $t("writing.not_found_description") }}
          </p>
          <p>
            {{ error }}
          </p>
          <div class="flex justify-center mt-4">
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
