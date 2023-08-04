<script setup lang="ts">
import { loadFull } from "tsparticles";

const particlesInit = async (engine: any) => {
  await loadFull(engine);
};
</script>

<template>
  <div class="h-[600px] relative flex flex-col items-center justify-center">
    <Particles id="tsparticles" :particlesInit="particlesInit" class="absolute top-0 left-0 w-full h-full" />
    <Particles
      class="absolute top-0 left-0 w-full h-full"
      id="tsparticles"
      :particlesInit="particlesInit"
      :options="{
        fullScreen: { enable: false, zIndex: 1 },
        fpsLimit: 120,
        particles: {
          color: { value: '#ffffff' },
          move: { direction: 'none', enable: true, random: false, speed: 0.2, straight: false },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: { value: 0.5 },
          shape: { type: 'circle' },
          size: { random: true, value: 1.5 },
        },
        detectRetina: true,
      }"
    />
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
