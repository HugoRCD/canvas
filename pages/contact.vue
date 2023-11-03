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
});

const toastStore = useToastStore();

type ContactForm = {
  email: string;
  subject: string;
  message: string;
  phone: string;
  fullname: string;
  budget: string;
};

const demandTypes = [
  {
    label: "contact.subject_types.project",
    color: "bg-blue-500",
  },
  {
    label: "contact.subject_types.question",
    color: "bg-yellow-500",
  },
  {
    label: "contact.subject_types.bug",
    color: "bg-red-500",
  },
  {
    label: "contact.subject_types.other",
    color: "bg-gray-500",
  },
];

const email = ref("");
const subject = ref("");
const message = ref("");
const phone = ref("");
const fullname = ref("");
const budget = ref(450);
const selected = ref(demandTypes[0]);

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

defineShortcuts({
  meta_o: {
    usingInput: true,
    handler: () => {
      copyToClipboard("hrichard206@gmail.com");
    },
  },
});
</script>

<template>
  <LayoutInfoWrapper page="contact">
    <div class="flex flex-col sm:items-center sm:justify-between">
      <form @submit.prevent="submitForm" class="flex flex-col gap-3 max-w-[40rem] w-full">
        <!-- Fullname -->
        <div>
          <label for="fullname" class="sr-only">
            {{ $t("contact.fullname") }}
          </label>
          <UInput
            icon="i-heroicons-user-solid"
            v-model="fullname"
            type="text"
            required
            name="fullname"
            id="full-name"
            autocomplete="name"
            variant="none"
            :placeholder="$t('contact.fullname')"
          />
        </div>

        <!-- Email -->
        <div>
          <label for="email" class="sr-only">
            {{ $t("contact.email") }}
          </label>
          <UInput
            icon="i-heroicons-inbox-solid"
            variant="none"
            required
            v-model="email"
            id="email"
            name="email"
            type="email"
            autocomplete="email"
            :placeholder="$t('contact.email')"
          />
        </div>

        <!-- Phone -->
        <div>
          <label for="phone" class="sr-only">
            {{ $t("contact.phone") }}
          </label>
          <UInput
            icon="i-heroicons-phone-solid"
            variant="none"
            v-model="phone"
            type="text"
            name="phone"
            id="phone"
            autocomplete="tel"
            :placeholder="$t('contact.phone')"
          />
        </div>

        <!-- Subject -->
        <div>
          <label for="subject" class="sr-only">
            {{ $t("contact.subject") }}
          </label>
          <USelectMenu v-model="selected" :options="demandTypes">
            <template #label>
              <div class="rounded-full h-2 w-2" :class="selected.color"></div>
              <span class="text-gray-400">{{ $t(selected.label) }}</span>
            </template>
            <template #option="{ option }">
              <div class="flex items-center gap-3">
                <div class="rounded-full h-2 w-2" :class="option.color"></div>
                <span>{{ $t(option.label) }}</span>
              </div>
            </template>
          </USelectMenu>
        </div>

        <!-- Budget -->
        <div class="flex flex-col gap-2 my-2" v-if="selected.label === 'contact.subject_types.project'">
          <URange size="xs" color="blue" :min="400" :max="10000" :step="10" v-model="budget" />
          <span class="text-gray-400 text-sm"> {{ $t("contact.budget") }}: {{ budget }}€ </span>
        </div>

        <!-- Message -->
        <div>
          <label for="message" class="sr-only">
            {{ $t("contact.message") }}
          </label>
          <UTextarea autoresize variant="none" required v-model="message" id="message" name="message" :rows="4" :placeholder="$t('contact.message')" />
        </div>
        <div class="flex justify-center">
          <button type="submit" class="btn btn-primary">
            <span>
              {{ $t("contact.submit") }}
            </span>
          </button>
        </div>
        <p class="text-center font-light text-sm text-muted">{{ $t("contact.average_response_time") }}</p>
      </form>
      <Divider class="my-10" />
      <div class="w-full flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div class="flex flex-col gap-3">
          <dd class="flex items-center gap-3 text-gray-400">
            <PhoneIcon class="h-6 w-6 flex-shrink-0" aria-hidden="true" />
            <span>(+33) 6 21 56 22 18</span>
          </dd>
          <dd class="flex items-center gap-3 text-gray-400">
            <EnvelopeIcon class="h-6 w-6 flex-shrink-0" aria-hidden="true" />
            <UTooltip :text="$t('home.hero.email')" :shortcuts="['⌘', 'O']">
              <NuxtLink to="mailto:contact@hrcd.fr" class="cursor-pointer hover:text-main transition-colors duration-300"> contact@hrcd.fr </NuxtLink>
            </UTooltip>
          </dd>
        </div>
        <div>
          <MeetingButton />
        </div>
      </div>
    </div>
  </LayoutInfoWrapper>
</template>
