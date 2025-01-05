<script setup lang="ts">
import { Toaster } from 'vue-sonner'
</script>

<template>
  <Html
    :lang="$i18n.locale"
    class="font-geist transition-colors duration-300 selection:bg-white/60 selection:text-zinc-800"
  >
    <Body>
      <FolioMeta>
        <LayoutScrollToTop />
        <NuxtLayout>
          <UApp>
            <NuxtPage />
          </UApp>
        </NuxtLayout>
        <Toaster close-button />
        <DotPattern class="absolute inset-0 -z-10 size-full fill-white/5 [mask-image:radial-gradient(white,transparent_85%)]" />
      </FolioMeta>
    </Body>
  </Html>
</template>
