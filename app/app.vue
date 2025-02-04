<script setup lang="ts">
import { Toaster } from 'vue-sonner'
import * as locales from '@nuxt/ui/locale'

const { locale } = useI18n()
const { visitors } = useVisitors()
</script>

<template>
  <Html
    :lang="locale"
    class="font-geist text-[var(--ui-text)] transition-colors duration-300 selection:bg-white/60 selection:text-zinc-800"
  >
    <Body>
      <LayoutScrollToTop />
      <ClientOnly>
        <div class="fixed z-[999] items-center justify-center max-sm:top-2 sm:bottom-2 left-2 w-full">
          <NuxtLink
            to="https://github.com/HugoRCD/nuxt-visitors"
            target="_blank"
            class="text-neutral-500 text-xs w-fit flex items-center gap-2 cursor-pointer hover:text-neutral-200 transition-colors duration-300"
          >
            <span class="relative flex size-2">
              <span
                class="absolute bg-green-50 inline-flex size-full animate-ping rounded-full opacity-75"
              />
              <span
                class="relative bg-green-500 inline-flex size-2 scale-90 rounded-full"
              />
            </span>
            <span class="sm:flex hidden">
              Active visitors:
            </span>
            {{ visitors }}
          </NuxtLink>
        </div>
      </ClientOnly>
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
