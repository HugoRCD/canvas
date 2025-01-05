<script setup lang="ts">
const { data: stack } = await useAsyncData('stack', () => queryContent('/stack').findOne())
</script>

<template>
  <section class="mx-auto mt-4 flex max-w-4xl flex-col p-7 sm:mt-20 text-[var(--ui-text-toned)]">
    <h1 class="font-newsreader italic text-white-shadow text-center text-4xl">
      <ContentSlot :use="$slots.title" />
    </h1>
    <h2 class="text-center text-lg font-extralight italic text-muted">
      <ContentSlot :use="$slots.subtitle" />
    </h2>
    <Divider class="mb-8 mt-2" />
    <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <AboutProfilePicture />
      <div class="relative flex flex-col gap-3 sm:ml-4">
        <h3 class="text-lg">
          Intro
        </h3>
        <div class="flex flex-col gap-4 text-primary">
          <ContentSlot :use="$slots.intro" />
        </div>
        <AboutSignature class="absolute -bottom-24 right-0 hidden w-40 sm:block" />
        <AboutSignature class="black absolute -bottom-24 -right-2 w-32 sm:hidden" />
      </div>
    </div>
    <Divider class="my-8" />
    <ContentSlot :use="$slots.experiences" />
    <Divider class="my-8" />
    <div class="flex flex-col gap-3">
      <div class="mb-6 flex flex-col gap-1">
        <h3 class="text-white-shadow font-newsreader italic text-3xl">
          <ContentSlot :use="$slots.stack_title" />
        </h3>
        <p>
          <ContentSlot :use="$slots.stack_description" />
        </p>
      </div>
      <div class="flex flex-wrap gap-4">
        <SpotlightCard
          v-for="item in stack!.items"
          :key="item.name"
          white
        >
          <NuxtLink
            :to="item.link"
            target="_blank"
            :aria-label="item.name + ' link'"
            class="flex gap-2 p-6"
          >
            <UIcon
              :name="item.icon"
              class="size-9"
              :font-controlled="false"
              :alt="item.name + ' logo'"
              :aria-label="item.name + ' logo'"
            />
          </NuxtLink>
        </SpotlightCard>
      </div>
    </div>
  </section>
</template>
