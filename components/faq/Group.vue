<script setup>
const container = ref();

const activeItem = ref(-1);

function setActive(index) {
  if (activeItem.value === index) {
    activeItem.value = -1;
  } else {
    activeItem.value = index;
  }
}

const children = ref([]);

onMounted(() => {
  children.value = Array.from(container.value.children);
});

provide("details-context", {
  peers: children,
  activeItem,
  setActive,
});
</script>

<template>
  <div ref="container">
    <slot />
  </div>
</template>
