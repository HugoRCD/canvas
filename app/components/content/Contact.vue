<script setup lang="ts">
import type { ContactEmail } from '~~/types/ContactEmail'

const { profile } = useAppConfig()
const { t } = useI18n()

const email = ref('')
const message = ref('')
const phone = ref('')
const fullname = ref('')
const subject = ref('')

const loading = ref(false)

const contactData = computed(() => {
  return {
    email: email.value,
    message: message.value,
    phone: phone.value,
    fullname: fullname.value,
    subject: subject.value,
  } as ContactEmail
})

async function submitForm() {
  loading.value = true
  try {
    await $fetch('/api/sendEmail', {
      method: 'POST',
      body: contactData.value,
    })
    email.value = ''
    message.value = ''
    phone.value = ''
    fullname.value = ''
    subject.value = ''
    toast.success(t('contact.success'))
  }
  catch (error) {
    toast.error(t('contact.error'))
  }
  loading.value = false
}
</script>

<template>
  <section class="mx-auto mt-4 flex max-w-4xl flex-col p-7 sm:mt-20">
    <h1 class="font-newsreader italic text-white-shadow text-center text-4xl">
      <ContentSlot :use="$slots.title" />
    </h1>
    <h2 class="text-center text-lg font-extralight italic text-muted">
      <ContentSlot :use="$slots.subtitle" />
    </h2>
    <Divider class="mb-8 mt-2" />
    <div class="flex flex-col sm:items-center sm:justify-between">
      <form
        class="flex w-full max-w-[40rem] flex-col gap-3"
        @submit.prevent="submitForm"
      >
        <UFormField
          label="Fullname"
          required
        >
          <UInput
            id="full-name"
            v-model="fullname"
            type="text"
            required
            name="fullname"
            autocomplete="name"
            class="w-full"
            placeholder="John Doe"
          />
        </UFormField>

        <UFormField
          label="Email"
          required
        >
          <UInput
            id="email"
            v-model="email"
            type="email"
            required
            name="email"
            autocomplete="email"
            class="w-full"
            placeholder="john.doe@gmail.com"
          />
        </UFormField>

        <UFormField
          label="Phone"
        >
          <UInput
            id="phone"
            v-model="phone"
            type="text"
            name="phone"
            autocomplete="tel"
            class="w-full"
            placeholder="123-456-7890"
          />
        </UFormField>

        <UFormField
          label="Subject"
          required
        >
          <UInput
            id="subject"
            v-model="subject"
            type="text"
            name="subject"
            class="w-full"
            :placeholder="$t('contact.subject')"
          />
        </UFormField>

        <UFormField
          label="Message"
          required
        >
          <UTextarea
            id="message"
            v-model="message"
            autoresize
            required
            name="message"
            class="w-full"
            :rows="4"
            placeholder="Lets work together!"
          />
        </UFormField>
        <div class="flex justify-center">
          <UButton
            :loading
            type="submit"
            block
          >
            {{ $t("contact.submit") }}
          </UButton>
        </div>
      </form>
      <Divider class="my-10" />
      <div class="flex w-full flex-col items-center justify-between gap-4 sm:flex-row">
        <div class="flex flex-col gap-3">
          <dd class="flex items-center gap-3 text-neutral-400">
            <UIcon
              name="heroicons-phone"
              class="size-6"
              aria-hidden="true"
            />
            <span>
              {{ profile.phone }}
            </span>
          </dd>
          <dd class="flex items-center gap-3 text-neutral-400">
            <UIcon
              name="heroicons-envelope"
              class="size-6"
              aria-hidden="true"
            />
            <UTooltip
              :text="$t('global.email')"
              :shortcuts="['⌘', 'O']"
            >
              <NuxtLink
                :to="`mailto:${profile.email}`"
                class="cursor-pointer transition-colors duration-300"
              >
                {{ profile.email }}
              </NuxtLink>
            </UTooltip>
          </dd>
        </div>
        <div>
          <MeetingButton />
        </div>
      </div>
    </div>
  </section>
</template>
