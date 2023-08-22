<script setup>
import { computed, ref } from "vue";
import { MagnifyingGlassIcon, LanguageIcon } from "@heroicons/vue/20/solid";
import { DocumentIcon, InformationCircleIcon } from "@heroicons/vue/24/outline";
import { Combobox, ComboboxInput, ComboboxOptions, ComboboxOption, Dialog, DialogPanel, TransitionChild, TransitionRoot } from "@headlessui/vue";
const { locale, t } = useI18n();

const consoleActions = ref([
  {
    name: t("global.back_to_home"),
    shortcut: "⌘ + Z",
    action: () => useRouter().push("/"),
    icon: DocumentIcon,
  },
  {
    name: t("global.switch_french"),
    shortcut: "⌘ + F",
    action: () => {
      locale.value = "fr";
    },
    icon: LanguageIcon,
  },
  {
    name: t("global.switch_english"),
    shortcut: "⌘ + E",
    action: () => {
      locale.value = "en";
    },
    icon: LanguageIcon,
  },
]);

const open = ref(false);
const query = ref("");
const filteredActions = computed(() =>
  query.value === "" ? [] : consoleActions.value.filter((action) => action.name.toLowerCase().includes(query.value.toLowerCase())),
);

function onSelect(item) {
  item.action();
  open.value = false;
}

onMounted(() => {
  if (process.client) {
    document.addEventListener("keydown", (event) => {
      if (event.metaKey && event.key === "k") open.value = !open.value;
    });
    document.addEventListener("keydown", (event) => {
      if (event.metaKey && event.key === "z") {
        event.preventDefault();
        consoleActions.value.find((action) => action.shortcut === "⌘ + Z").action();
      }
      if (event.metaKey && event.key === "f") {
        event.preventDefault();
        consoleActions.value.find((action) => action.shortcut === "⌘ + F").action();
      }
      if (event.metaKey && event.key === "e") {
        event.preventDefault();
        consoleActions.value.find((action) => action.shortcut === "⌘ + E").action();
      }
    });
  }
});
</script>

<template>
  <TransitionRoot :show="open" as="template" @after-leave="query = ''" appear>
    <Dialog as="div" class="relative z-10" @close="open = false">
      <TransitionChild
        as="template"
        enter="ease-out duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in duration-200"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-gray-700 bg-opacity-50 transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 z-10 overflow-y-auto p-4 sm:p-6 md:p-20">
        <TransitionChild
          as="template"
          enter="ease-out duration-300"
          enter-from="opacity-0 scale-95"
          enter-to="opacity-100 scale-100"
          leave="ease-in duration-200"
          leave-from="opacity-100 scale-100"
          leave-to="opacity-0 scale-95"
        >
          <DialogPanel class="mx-auto max-w-2xl transform divide-y divide-gray-800 overflow-hidden rounded-xl bg-secondary shadow-2xl transition-all">
            <Combobox @update:modelValue="onSelect">
              <div class="relative">
                <MagnifyingGlassIcon class="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-muted" aria-hidden="true" />
                <ComboboxInput
                  class="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-primary placeholder-gray-400 focus:ring-0 sm:text-sm focus:outline-none"
                  :placeholder="$t('global.search')"
                  @change="query = $event.target.value"
                />
              </div>

              <ComboboxOptions v-if="query === '' || filteredActions.length > 0" static class="max-h-80 scroll-py-2 divide-y divide-gray-800 overflow-y-auto">
                <li class="p-2">
                  <h2 class="mt-4 mb-2 px-3 text-xs font-semibold text-muted">{{ $t("global.command") }}</h2>
                  <ul class="text-sm text-primary">
                    <ComboboxOption
                      v-for="action in query === '' ? filteredActions : filteredActions"
                      :key="action.id"
                      :value="action"
                      as="template"
                      v-slot="{ active }"
                    >
                      <li :class="['flex cursor-default text-muted select-none items-center rounded-md px-3 py-2', active && 'bg-accent text-primary']">
                        <component :is="action.icon" :class="['h-6 w-6 flex-none', active ? 'text-white' : 'text-gray-400']" aria-hidden="true" />
                        <span class="ml-3 flex-auto truncate" :class="[active ? 'text-primary' : 'text-muted']">
                          {{ action.name }}
                        </span>
                      </li>
                    </ComboboxOption>
                  </ul>
                </li>
              </ComboboxOptions>

              <div v-if="query !== '' && filteredActions.length === 0" class="p-2">
                <h2 class="mt-4 mb-2 px-3 text-xs font-semibold text-muted">{{ $t("global.command") }}</h2>
                <ul class="text-sm text-primary">
                  <li class="flex cursor-default text-muted select-none items-center rounded-md px-3 py-2">
                    <InformationCircleIcon class="h-6 w-6 flex-none text-gray-400" aria-hidden="true" />
                    <span class="ml-3 flex-auto truncate text-muted">
                      {{ $t("global.not_found") }}
                    </span>
                  </li>
                </ul>
              </div>
            </Combobox>
          </DialogPanel>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
