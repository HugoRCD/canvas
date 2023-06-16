<script setup lang="ts">
import { EnvelopeIcon, PhoneIcon } from "@heroicons/vue/24/outline";
const { t } = useI18n();

definePageMeta({
  name: "Contact",
  title: "Contact",
  path: "/contact",
  description: "Contact us",
});

const email = ref("");
const message = ref("");
const phone = ref("");
const fullname = ref("");

const loading = ref(false);
</script>

<template>
  <div class="relative">
    <div class="absolute inset-0">
      <div class="absolute inset-y-0 left-0 w-1/2" />
    </div>
    <div class="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5">
      <div class="py-16 px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
        <div class="mx-auto max-w-lg">
          <h2 class="text-2xl font-bold tracking-tight sm:text-3xl text-gradient">{{ $t("contact.title") }}<span class="text-blue ml-1">.</span></h2>
          <p class="mt-3 text-lg leading-6 text-muted">
            {{ $t("contact.description") }}
          </p>
          <dl class="mt-8 text-base text-muted">
            <dd>
              <p>113 Boulevard René Cassin</p>
              <p>06200 Nice, France</p>
            </dd>
            <div class="mt-6">
              <dd class="flex">
                <PhoneIcon class="h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true" />
                <span class="ml-3">(+33) 6 21 56 22 18</span>
              </dd>
            </div>
            <div class="mt-3">
              <dt class="sr-only">Email</dt>
              <dd class="flex">
                <EnvelopeIcon class="h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true" />
                <span class="ml-3">contact@helprapp.fr</span>
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <div class="py-16 px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
        <div class="mx-auto max-w-lg lg:max-w-none">
          <form class="grid grid-cols-1 gap-y-6">
            <div>
              <label for="fullname" class="sr-only">
                {{ $t("contact.fullname") }}
              </label>
              <input
                v-model="fullname"
                type="text"
                required
                name="fullname"
                id="full-name"
                autocomplete="name"
                class="input w-full"
                :placeholder="t('contact.fullname')"
              />
            </div>
            <div>
              <label for="email" class="sr-only">
                {{ $t("contact.email") }}
              </label>
              <input
                required
                v-model="email"
                id="email"
                name="email"
                type="email"
                autocomplete="email"
                class="input w-full"
                :placeholder="t('contact.email')"
              />
            </div>
            <div>
              <label for="phone" class="sr-only">
                {{ $t("contact.phone") }}
              </label>
              <input v-model="phone" type="text" name="phone" id="phone" autocomplete="tel" class="input w-full" :placeholder="t('contact.phone')" />
            </div>
            <div>
              <label for="message" class="sr-only">
                {{ $t("contact.message") }}
              </label>
              <textarea required v-model="message" id="message" name="message" rows="4" class="input w-full" :placeholder="t('contact.message')" />
            </div>
            <UButton class="gradient">
              {{ $t("contact.submit") }}
            </UButton>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>