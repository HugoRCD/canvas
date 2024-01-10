<template>
  <div class="mt-6 pb-20">
    <Divider />
    <footer class="mx-auto max-w-7xl px-4 py-6 flex flex-col items-center gap-4">
      <Logo :size="8" />
      <span class="text-muted text-sm text-center">© 2024,
        <NuxtLink role="link" target="_blank" to="https://mh.hrcd.fr/"
          class="text-muted hover:text-main transition-colors duration-300 ease-in-out"
          aria-label="Go to Maison Hochard website">
          HugoRCD</NuxtLink>- <br />{{ $t("seo.all_rights_reserved") }}.
      </span>
    </footer>
  </div>
</template>
