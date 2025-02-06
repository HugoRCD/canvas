<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-4 sm:gap-2">
    <div class="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-2">
      <UTooltip
        :text="$t('global.email')"
        :shortcuts="['⌘', 'O']"
      >
        <SpotlightButton>
          <NuxtLinkLocale
            class="font-mona relative flex items-center justify-center gap-2 bg-gradient-to-b from-white/25 to-white bg-clip-text text-lg font-medium text-transparent transition-all duration-200"
            to="/contact"
          >
            {{ t("global.contact") }}
            <UIcon
              name="heroicons-envelope"
              class="size-5 text-white/80"
            />
          </NuxtLinkLocale>
        </SpotlightButton>
      </UTooltip>
      <MeetingButton />
    </div>
    <div class="mt-4 flex flex-col items-center gap-1">
      <NuxtLink href="https://hub.nuxt.com/new?repo=HugoRCD/canvas">
        <img
          src="https://hub.nuxt.com/button.svg"
          alt="Deploy to Nuxthub"
        >
      </NuxtLink>
      <NuxtLink href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FHugoRCD%2Fcanvas&env=NUXT_PRIVATE_RESEND_API_KEY&envDescription=NUXT_PRIVATE_RESEND_API_KEY%20is%20required%20to%20make%20the%20contact%20form%20work&project-name=canvas-portfolio&repository-name=canvas-portfolio&demo-title=Canvas%20Portfolio&demo-url=https%3A%2F%2Fcanvas.hrcd.fr&demo-image=https%3A%2F%2Fgithub.com%2FHugoRCD%2Fcanvas%2Fblob%2Fmain%2Fpublic%2Fog.png%3Fraw%3Dtrue">
        <img
          src="https://vercel.com/button"
          alt="Deploy with Vercel"
        >
      </NuxtLink>
    </div>
  </div>
</template>
