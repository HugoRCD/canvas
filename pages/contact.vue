<script setup lang="ts">
import { EnvelopeIcon, PhoneIcon } from "@heroicons/vue/24/outline";
import Availability from "~/components/settings/Availability.vue";
import MeetingButton from "~/components/MeetingButton.vue";

definePageMeta({
  name: "Contact",
  title: "Contact",
});

useHead({
  title: "HR Folio - Contact",
  meta: [
    {
      name: "description",
      content: "Profile",
    },
  ],
});

const toastStore = useToastStore();

const email = ref("");
const subject = ref("");
const message = ref("");
const phone = ref("");
const fullname = ref("");

const loading = ref(false);

async function submitForm() {
  loading.value = true;
  const { data } = await useFetch("/api/sendEmail", {
    method: "POST",
    body: {
      email: email.value,
      subject: subject.value,
      message: message.value,
      phone: phone.value,
      fullname: fullname.value,
    },
  });
  if (data) {
    email.value = "";
    message.value = "";
    phone.value = "";
    fullname.value = "";
    toastStore.showSuccessToast({
      title: "contact.success",
    });
  } else {
    toastStore.showErrorToast({
      title: "contact.error",
    });
  }
  loading.value = false;
}
</script>

<template>
  <div class="mx-auto max-w-6xl lg:grid lg:grid-cols-5 -z-1">
    <div class="py-16 px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
      <div class="mx-auto max-w-2xl">
        <Availability class="mb-6" />
        <h2 class="text-2xl font-bold tracking-tight sm:text-3xl text-primary">{{ $t("contact.title") }}<span class="text-primary ml-2">.</span></h2>
        <p class="mt-3 text-lg leading-6 text-muted">
          {{ $t("contact.description") }}
        </p>
        <dl class="mt-8 text-base text-muted">
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
              <span class="ml-3">contact@hrcd.fr</span>
            </dd>
          </div>
          <MeetingButton />
        </dl>
      </div>
    </div>
    <div class="sm:py-16 px-6 lg:col-span-3">
      <div class="mx-auto max-w-2xl lg:max-w-none">
        <form @submit.prevent="submitForm" class="grid grid-cols-1 gap-y-6">
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
              :placeholder="$t('contact.fullname')"
            />
          </div>
          <div>
            <label for="email" class="sr-only">
              {{ $t("contact.email") }}
            </label>
            <input required v-model="email" id="email" name="email" type="email" autocomplete="email" class="input w-full" :placeholder="$t('contact.email')" />
          </div>
          <div>
            <label for="phone" class="sr-only">
              {{ $t("contact.phone") }}
            </label>
            <input v-model="phone" type="text" name="phone" id="phone" autocomplete="tel" class="input w-full" :placeholder="$t('contact.phone')" />
          </div>
          <div>
            <label for="subject" class="sr-only">
              {{ $t("contact.subject") }}
            </label>
            <input
              required
              v-model="subject"
              type="text"
              name="subject"
              id="subject"
              autocomplete="subject"
              class="input w-full"
              :placeholder="$t('contact.subject')"
            />
          </div>
          <div>
            <label for="message" class="sr-only">
              {{ $t("contact.message") }}
            </label>
            <textarea required v-model="message" id="message" name="message" rows="4" class="input w-full" :placeholder="$t('contact.message')" />
          </div>
          <div class="flex justify-center">
            <ButtonPrimary type="submit" :pending="loading" :text="$t('contact.submit')" />
          </div>
          <p class="text-center text-muted">{{ $t("contact.average_response_time") }}</p>
        </form>
      </div>
    </div>
  </div>
</template>
