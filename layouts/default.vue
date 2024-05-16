<script lang="ts" setup>
const { appName, email } = useAppConfig()
const toast = useToast()
const { t } = useI18n()

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

defineShortcuts({
  meta_o: {
    usingInput: true,
    handler: () => {
      copyToClipboard(email)
      toast.add({ title: t('global.email_copied'), icon: 'i-heroicons-check-circle', timeout: 2500 })
    },
  },
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
        <SettingsLanguageToggle class="fixed bottom-20 right-3 z-50 sm:bottom-4" />
        <LayoutNavbar class="fixed bottom-0 z-50 flex sm:bottom-auto sm:top-0" />
        <div class="sm:mt-[50px]">
          <slot />
        </div>
        <LayoutFooter />
      </div>
      <UNotifications />
      <DotPattern class="absolute inset-0 -z-10 size-full fill-white/5 [mask-image:radial-gradient(white,transparent_85%)]" />
    </Body>
  </Html>
</template>
