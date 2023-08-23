<script setup lang="ts">
definePageMeta({
  name: "Contact",
  title: "Contact",
  path: "/contact",
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
  <div class="max-w-3xl mx-auto p-6">
    <form @submit.prevent="submitForm" class="w-full grid grid-cols-1 gap-y-6">
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
        <label for="message" class="sr-only">
          {{ $t("contact.message") }}
        </label>
        <textarea required v-model="message" id="message" name="message" rows="4" class="input w-full" :placeholder="$t('contact.message')" />
      </div>
      <div class="flex items-center justify-center">
        <ButtonPrimary type="submit" :pending="loading">
          {{ $t("contact.submit") }}
        </ButtonPrimary>
      </div>
    </form>
  </div>
</template>
