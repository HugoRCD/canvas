<script setup lang="ts"></script>

<template>
  <main>
    <ContentDoc>
      <template #not-found>
        {{ $t("writing.empty") }}
      </template>
    </ContentDoc>
  </main>
</template>

<style scoped></style>
