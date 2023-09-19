<script lang="ts" setup>
const { appName } = useAppConfig();
const { t } = useI18n();

const tags = [
  "web",
  "developer",
  "portfolio",
  "hugo",
  "richard",
  "hugo richard",
  "hrfolio",
  "hr",
  "folio",
  "hr folio",
  "Nice",
  "France",
  "Nice France",
  "Côte d'Azur",
  "Cote d'Azur",
  "Côte d'Azur France",
  "Cote d'Azur France",
  "art",
  "design",
  "designer",
  "art director",
  "directeur artistique",
  "Développeur",
];

useHead({
  title: appName + " - " + t("home.hero.job.part1") + " / " + t("home.hero.job.part2"),
  meta: [
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { name: "author", content: "Hugo Richard" },
    { charset: "utf-8" },
    {
      name: "description",
      content: t("seo.description"),
    },
    {
      name: "keywords",
      content: tags.join(", "),
    },
    {
      property: "og:title",
      content: appName,
    },
    {
      property: "og:url",
      content: "https://hrcd.fr/",
    },
    {
      property: "og:description",
      content: t("seo.description"),
    },
    {
      property: "og:image",
      content: "/preview.webp",
    },
    {
      property: "twitter:card",
      content: "summary_large_image",
    },
    {
      property: "twitter:title",
      content: appName,
    },
    {
      property: "twitter:description",
      content: t("seo.description"),
    },
    {
      property: "twitter:image",
      content: "/preview.webp",
    },
    {
      property: "twitter:url",
      content: "https://hrcd.fr/",
    },
  ],
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

const toastStore = useToastStore();
const toast = computed(() => {
  return {
    show: toastStore.getShow,
    title: toastStore.getTitle,
    message: toastStore.getMessage,
    type: toastStore.getType,
    infos: toastStore.getInfos,
  };
});

if (process.client) {
  console.log(`
__/\\\\\\________/\\\\\\_        ____/\\\\\\\\\\\\\\\\\\_____        ________/\\\\\\\\\\\\\\\\\\_        __/\\\\\\\\\\\\\\\\\\\\\\\\____
 _\\/\\\\\\_______\\/\\\\\\_        __/\\\\\\///////\\\\\\___        _____/\\\\\\////////__        _\\/\\\\\\////////\\\\\\__
  _\\/\\\\\\_______\\/\\\\\\_        _\\/\\\\\\_____\\/\\\\\\___        ___/\\\\\\/___________        _\\/\\\\\\______\\//\\\\\\_
   _\\/\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\_        _\\/\\\\\\\\\\\\\\\\\\\\\\/____        __/\\\\\\_____________        _\\/\\\\\\_______\\/\\\\\\_
    _\\/\\\\\\/////////\\\\\\_        _\\/\\\\\\//////\\\\\\____        _\\/\\\\\\_____________        _\\/\\\\\\_______\\/\\\\\\_
     _\\/\\\\\\_______\\/\\\\\\_        _\\/\\\\\\____\\//\\\\\\___        _\\//\\\\\\____________        _\\/\\\\\\_______\\/\\\\\\_
      _\\/\\\\\\_______\\/\\\\\\_        _\\/\\\\\\_____\\//\\\\\\__        __\\///\\\\\\__________        _\\/\\\\\\_______/\\\\\\__
       _\\/\\\\\\_______\\/\\\\\\_        _\\/\\\\\\______\\//\\\\\\_        ____\\////\\\\\\\\\\\\\\\\\\_        _\\/\\\\\\\\\\\\\\\\\\\\\\\\/___
        _\\///________\\///__        _\\///________\\///__        _______\\/////////__        _\\////////////_____
`);
  console.log("I see you're curious, just like me. If you want to have more information about the code, you can contact me :)");
}
</script>

<template>
  <Html :lang="$i18n.locale" class="bg-main text-main transition-colors duration-300">
    <Body>
      <ToastsBasic
        :show="toast.show"
        :title="toast.title"
        :description="toast.message"
        :type="toast.type"
        :infos="toast.infos"
        @close="toastStore.closeToast()"
      />
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
      <DotPattern class="absolute -z-10 inset-0 h-full w-full fill-white/5 [mask-image:radial-gradient(white,transparent_85%)]" />
    </Body>
  </Html>
</template>
