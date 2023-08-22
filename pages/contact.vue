<script setup lang="ts">
definePageMeta({
  name: "Contact",
  title: "Contact",
  path: "/contact",
});

useHead({
  title: "HR Folio - Contact",
  meta: [
    {
      name: "description",
      content: "Profile",
    },
  ],
});

const email = ref("");
const message = ref("");
const phone = ref("");
const fullname = ref("");
</script>

<template>
  <div>Contact</div>
</template>
