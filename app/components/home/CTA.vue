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
      <NuxtLink href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FHugoRCD%2Fcanvas&env=NUXT_PRIVATE_RESEND_API_KEY,NUXT_PUBLIC_SITE_URL&envDescription=You%20will%20require%20an%20API%20key%20for%20Resend%20and%20Nuxt%20Studio%2C%20but%20it%20is%20not%20essential%20for%20the%20portfolio%20to%20work.%20Simply%20add%20%22test%2C%22%20for%20example%2C%20and%20edit%20the%20variable%20later.&project-name=canvas-portfolio&repository-name=canvas-portfolio&demo-title=Canvas&demo-url=canvas.hrcd.fr&demo-image=https%3A%2F%2Fcanvas.hrcd.fr%2Fog.png">
        <img
          src="https://vercel.com/button"
          alt="Deploy with Vercel"
        >
      </NuxtLink>
    </div>
  </div>
</template>
