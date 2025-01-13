<script setup lang="ts">
import { Toaster } from 'vue-sonner'
import * as locales from '@nuxt/ui/locale'

const { locale } = useI18n()
</script>

<template>
  <Html
    :lang="locale"
    class="font-geist text-[var(--ui-text)] transition-colors duration-300 selection:bg-white/60 selection:text-zinc-800"
  >
    <Body>
      <LayoutScrollToTop />
      <NuxtLayout>
        <UApp :locale="locales[locale]">
          <NuxtPage />
        </UApp>
      </NuxtLayout>
      <Toaster close-button />
      <DotPattern class="absolute inset-0 -z-10 size-full fill-white/5 [mask-image:radial-gradient(white,transparent_85%)]" />
    </Body>
  </Html>
</template>
