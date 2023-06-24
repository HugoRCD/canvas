<script setup lang="ts">
import { useRenderLoop } from "@tresjs/core";
import { shallowRef, ShallowRef } from "vue";

const { onLoop } = useRenderLoop();

const getRandomPosition = () => Math.floor(Math.random() * 10) - 5;

const boxRef: ShallowRef<TresInstance | null> = shallowRef(null);
onLoop(({ delta, elapsed }) => {
  if (boxRef.value) {
    boxRef.value.rotation.y += delta;
    boxRef.value.rotation.z = elapsed * 0.2;
  }
});
</script>

<template>
  <div class="h-[600px] relative flex flex-col items-center justify-center">
    <TresCanvas>
      <TresScene>
        <TresPerspectiveCamera visible :position="[0, 0, 5]" />
        <TresMesh :key="i" :position="[getRandomPosition(), getRandomPosition(), getRandomPosition()]" v-for="i in 10">
          <TresBoxGeometry :args="[1, 1, 1]" />
          <TresMeshNormalMaterial />
        </TresMesh>
      </TresScene>
    </TresCanvas>
    <div class="flex flex-col items-center gap-2 z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <Logo :size="20" />
      <div class="flex flex-col items-center text-center">
        <h2 class="text-3xl font-bold white-gradient-tb">Hugo Richard</h2>
        <h3 class="text-xl font-bold text-gradient">Creative Developer</h3>
      </div>
    </div>
    <div class="aurora absolute w-24 h-24 sm:w-52 sm:h-52 blur-full bg-accent translate-x-1/2 -translate-y-2/3" />
    <div class="aurora absolute w-24 h-24 sm:w-52 sm:h-52 blur-full bg-accent-inverted -translate-x-2/3 translate-y-1/2" />
  </div>
</template>

<style scoped></style>
