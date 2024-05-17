<script setup lang="ts">
import type { ContactEmail } from '~/types/ContactEmail'

const appConfig = useAppConfig()
const { t } = useI18n()

const demandTypes = [
  {
    label: 'contact.subject_types.project',
    value: 'project',
    color: 'bg-blue-500',
    button_color: 'blue',
  },
  {
    label: 'contact.subject_types.question',
    value: 'question',
    color: 'bg-yellow-500',
    button_color: 'yellow',
  },
  {
    label: 'contact.subject_types.bug',
    value: 'bug',
    color: 'bg-red-500',
    button_color: 'red',
  },
  {
    label: 'contact.subject_types.other',
    value: 'other',
    color: 'bg-gray-500',
    button_color: 'gray',
  },
]

const email = ref('')
const message = ref('')
const phone = ref('')
const fullname = ref('')
const budget = ref(1000)
const selected = ref(demandTypes[0])

const loading = ref(false)

const contactData = computed(() => {
  return {
    email: email.value,
    message: message.value,
    phone: phone.value,
    fullname: fullname.value,
    budget: budget.value,
    subject: selected.value.value,
  } as ContactEmail
})

async function submitForm() {
  loading.value = true
  const { data } = await useFetch('/api/sendEmail', {
    method: 'POST',
    body: contactData.value,
  })
  if (data) {
    email.value = ''
    message.value = ''
    phone.value = ''
    fullname.value = ''
    budget.value = 450
    selected.value = demandTypes[0]
    toast.success(t('contact.success'))
  }
  else {
    toast.success(t('contact.error'))
  }
  loading.value = false
}

defineOgImage({ url: appConfig.openGraphImage, width: 1200, height: 630, alt: 'Home image' })
</script>

<template>
  <section class="mx-auto mt-4 flex max-w-4xl flex-col p-7 sm:mt-20">
    <h1 class="font-testimonial text-white-shadow text-center text-4xl font-bold">
      <ContentSlot :use="$slots.title" />
    </h1>
    <h2 class="text-center text-lg font-light italic text-muted">
      <ContentSlot :use="$slots.subtitle" />
    </h2>
    <Divider class="mb-8 mt-2" />
    <div class="flex flex-col sm:items-center sm:justify-between">
      <form
        class="flex w-full max-w-[40rem] flex-col gap-3"
        @submit.prevent="submitForm"
      >
        <!-- Fullname -->
        <div>
          <label
            for="fullname"
            class="sr-only"
          >
            {{ $t("contact.fullname") }}
          </label>
          <UInput
            id="full-name"
            v-model="fullname"
            icon="i-heroicons-user-solid"
            type="text"
            required
            name="fullname"
            autocomplete="name"
            variant="none"
            :placeholder="$t('contact.fullname')"
          />
        </div>

        <!-- Email -->
        <div>
          <label
            for="email"
            class="sr-only"
          >
            {{ $t("contact.email") }}
          </label>
          <UInput
            id="email"
            v-model="email"
            icon="i-heroicons-inbox-solid"
            variant="none"
            required
            name="email"
            type="email"
            autocomplete="email"
            :placeholder="$t('contact.email')"
          />
        </div>

        <!-- Phone -->
        <div>
          <label
            for="phone"
            class="sr-only"
          >
            {{ $t("contact.phone") }}
          </label>
          <UInput
            id="phone"
            v-model="phone"
            icon="i-heroicons-phone-solid"
            variant="none"
            type="text"
            name="phone"
            autocomplete="tel"
            :placeholder="$t('contact.phone')"
          />
        </div>

        <!-- Subject -->
        <div>
          <label
            for="subject"
            class="sr-only"
          >
            {{ $t("contact.subject") }}
          </label>
          <USelectMenu
            v-model="selected"
            :options="demandTypes"
          >
            <template #label>
              <div
                class="size-2 rounded-full"
                :class="selected.color"
              />
              <span class="text-gray-400">{{ $t(selected.label) }}</span>
            </template>
            <template #option="{ option }">
              <div class="flex items-center gap-3">
                <div
                  class="size-2 rounded-full"
                  :class="option.color"
                />
                <span>{{ $t(option.label) }}</span>
              </div>
            </template>
          </USelectMenu>
        </div>

        <!-- Budget -->
        <div
          v-if="selected.label === 'contact.subject_types.project'"
          class="my-2 flex flex-col gap-2"
        >
          <URange
            v-model="budget"
            size="xs"
            :min="400"
            :max="8000"
            :step="50"
          />
          <span class="text-sm text-gray-400"> {{ $t("contact.budget") }}: {{ budget }}€ </span>
        </div>

        <!-- Message -->
        <div>
          <label
            for="message"
            class="sr-only"
          >
            {{ $t("contact.message") }}
          </label>
          <UTextarea
            id="message"
            v-model="message"
            autoresize
            variant="none"
            required
            name="message"
            :rows="4"
            :placeholder="$t('contact.message')"
          />
        </div>
        <div class="flex justify-center">
          <UButton
            :loading
            type="submit"
            color="gray"
            block
          >
            {{ $t("contact.submit") }}
          </UButton>
        </div>
      </form>
      <Divider class="my-10" />
      <div class="flex w-full flex-col items-center justify-between gap-4 sm:flex-row">
        <div class="flex flex-col gap-3">
          <dd class="flex items-center gap-3 text-gray-400">
            <span
              class="i-heroicons-phone size-6"
              aria-hidden="true"
            />
            <span>
              {{ appConfig.phone }}
            </span>
          </dd>
          <dd class="flex items-center gap-3 text-gray-400">
            <span
              class="i-heroicons-envelope size-6"
              aria-hidden="true"
            />
            <UTooltip
              :text="$t('global.email')"
              :shortcuts="['⌘', 'O']"
            >
              <NuxtLink
                :to="`mailto:${appConfig.email}`"
                class="cursor-pointer transition-colors duration-300 hover:text-main"
              >
                {{ appConfig.email }}
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

<style scoped>

</style>
