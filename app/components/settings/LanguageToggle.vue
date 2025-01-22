<script setup lang="ts">
const { locale: current, setLocaleCookie, locales } = useI18n()

const currentLocale = computed(() => {
  return locales.value.find(locale => locale.code === current.value)
})

watch(current, (newLocale) => {
  setLocaleCookie(newLocale)
})

const switchLocalePath = useSwitchLocalePath()
</script>

<template>
  <div class="z-99 flex items-center gap-3 rounded-lg border border-white/10 bg-zinc-900/90 px-3 py-1 backdrop-blur-xl">
    <ClientOnly>
      <NuxtLink
        v-for="locale in locales"
        :key="locale.code"
        class="cursor-pointer select-none"
        :to="switchLocalePath(locale.code)"
      >
        <span
          class="font-semibold"
          :class="locale.code === currentLocale?.code ? 'text-white' : 'text-neutral-500'"
        >
          {{ locale.code }}
        </span>
      </NuxtLink>
      <template #fallback>
        <div class="h-2 w-5" />
      </template>
    </ClientOnly>
  </div>
</template>
