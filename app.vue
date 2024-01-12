<script lang="ts" setup>
import { SpeedInsights } from "@vercel/speed-insights/nuxt";
const { appName, email } = useAppConfig();
const toast = useToast();
const { t } = useI18n();

useHead({
  title: `${t("home.hero.job.part1")} / ${t("home.hero.job.part2")}`,
  titleTemplate: `%s - ${appName}`,
  link: [
    {
      rel: "icon",
      type: "image/x-icon",
      href: "/favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/favicon-16x16.png",
    },
    {
      rel: "manifest",
      href: "/site.webmanifest",
    },
  ],
});

if (process.client) {
  console.log(`
.------..------..------..------.
|H.--. ||R.--. ||C.--. ||D.--. |
| :(): || :(): || :  : || :(): |
| (__) || ()() || :  : || (__) |
| '--'H|| '--'R|| '--'C|| '--'D|
'------''------''------''------'
`);
  console.log("I see you're curious, just like me. If you want to have more information about the code, you can contact me :)");
}

defineShortcuts({
  meta_o: {
    usingInput: true,
    handler: () => {
      copyToClipboard(email);
      toast.add({ title: t("global.email_copied"), icon: "i-heroicons-check-circle", timeout: 2500 });
    },
  },
});
</script>

<template>
  <Html :lang="$i18n.locale" class="bg-zinc-950 text-main selection:bg-white/60 selection:text-zinc-800 transition-colors duration-300">
    <Body>
      <LayoutScrollToTop />
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
      <UNotifications />
      <DotPattern class="absolute -z-10 inset-0 h-full w-full fill-white/5 [mask-image:radial-gradient(white,transparent_85%)]" />
      <SpeedInsights />
    </Body>
  </Html>
</template>
