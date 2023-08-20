<script setup lang="ts">
definePageMeta({
  name: "Contact",
  title: "Contact",
  path: "/contact",
  description: "Contact us",
});

const email = ref("");
const message = ref("");
const phone = ref("");
const fullname = ref("");
</script>

<template>
  <div>Contact</div>
</template>
