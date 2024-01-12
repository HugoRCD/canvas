<template>
  <div class="mt-6 pb-20">
    <Divider />
    <footer class="mx-auto max-w-7xl px-4 py-6 flex flex-col items-center gap-4">
      <Logo :size="8" />
      <span class="text-muted text-sm text-center">
        © {{ new Date().getFullYear() }}, {{ useAppConfig().footerName }} - {{ $t("seo.all_rights_reserved") }}.
      </span>
    </footer>
  </div>
</template>
