<script lang="ts" setup>
const { appName } = useAppConfig()

useHead({
  titleTemplate: `%s - ${appName}`,
  script: [
    {
      'src': 'https://plausible.hrcd.fr/js/script.js',
      'defer': true,
      'data-domain': 'canvas.hrcd.fr',
    },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicon-16x16.png',
    },
    {
      rel: 'manifest',
      href: '/site.webmanifest',
    },
  ],
})
</script>

<template>
  <Html
    :lang="$i18n.locale"
    class="bg-zinc-950 text-main transition-colors duration-300 selection:bg-white/60 selection:text-zinc-800"
  >
    <Body>
      <LayoutScrollToTop />
      <div>
        <NuxtLink
          to="/writing"
          class="mx-auto my-8 flex cursor-pointer items-center gap-2 px-4 text-muted transition-colors duration-200 hover:text-main sm:max-w-2xl md:max-w-3xl lg:max-w-4xl"
        >
          <span class="i-lucide-arrow-left size-4" />
          <span class="text-sm font-light">
            {{ $t("navigation.writing") }}
          </span>
        </NuxtLink>
        <SettingsLanguageToggle class="fixed bottom-4 right-4 sm:bottom-4" />
        <article class="markdown prose mx-auto px-4 sm:max-w-2xl md:max-w-3xl lg:max-w-4xl">
          <slot />
        </article>
        <LayoutFooter class="pt-6" />
      </div>
      <UNotifications />
      <DotPattern class="absolute inset-0 -z-10 size-full fill-white/5 [mask-image:radial-gradient(white,transparent_85%)]" />
    </Body>
  </Html>
</template>

<style scoped></style>
