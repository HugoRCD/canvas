<script setup lang="ts">
import AppLayout from "~/components/layout/AppLayout.vue";

definePageMeta({
  name: "Writing",
  title: "Writing",
  path: "/writing",
});
</script>

<template>
  <AppLayout page="writing">
    <ContentDoc>
      <template #not-found>
        {{ $t("writing.empty") }}
      </template>
    </ContentDoc>
    <!--    <main>
      <NuxtLink class="text-2xl font-bold text-center text-primary" to="/articles/first"> Articles </NuxtLink>
      <ContentNavigation v-slot="{ navigation }">
        {{ navigation }}
        <div v-for="link in navigation" :key="link._path" class="mx-auto max-w-5xl">
          <NuxtLink class="text-2xl font-bold text-center text-primary" :to="link._path">
            {{ link.title }}
          </NuxtLink>
        </div>
      </ContentNavigation>

      &lt;!&ndash;        <ContentDoc>
      <template #not-found>
        <p>{{ $t("writing.empty") }}</p>
      </template>
    </ContentDoc>&ndash;&gt;
    </main>-->
  </AppLayout>
</template>
