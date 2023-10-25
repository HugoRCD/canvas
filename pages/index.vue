<script setup lang="ts">
import { EnvelopeIcon } from "@heroicons/vue/24/outline";
import socials from "~/data/socials";
import projects from "~/data/projects";
import MeetingButton from "~/components/MeetingButton.vue";

defineShortcuts({
  meta_o: {
    usingInput: true,
    handler: () => {
      copyToClipboard("contact@hrcd.fr");
    },
  },
});

definePageMeta({
  title: "Home",
  name: "Home",
});

const items = [
  {
    name: "Sophia Martinez",
    title: "Lead designer, Avalon",
    image:
      "https://images.generated.photos/TdA_3xKb49DtgqfPPu5REnQFiALErCu6i3M2I_1AqIA/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDAwNTU5LmpwZw.jpg",
    body: "I've been in the design game for a while now and this kit is one of the best. It's made me fall in love with designing all over again. It's just brilliant.",
  },
  {
    name: "Caroline Lee",
    title: "Senior Graphic Designer, Echo",
    image:
      "https://images.generated.photos/mp3gkB9z2wwhyySWzQJMegNbvvLV6HbKQX1_h6BEYAc/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDAwOTI5LmpwZw.jpg",
    body: "I'm a newbie designer and this kit is just perfect. I've learnt so much and my work looks amazing now. A big thumbs up!",
  },
  {
    name: "Tyler Otwell",
    title: "CTO, Apple",
    image:
      "https://images.generated.photos/vOkveSlBohR880A8z67aLHImhPr7UHdnXg06pifYvZ4/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDAyNjg4LmpwZw.jpg",
    body: "This design kit is a game changer! My designs look better and I get things done faster. Totally recommending it to my mates!",
  },
  {
    name: "Jake Harris",
    title: "Thompson Creative",
    image:
      "https://images.generated.photos/d_r3VzW3lO5ZsdaHhoVX7msWku7YIrqP4Qn1yozJU54/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDAyMTQ4LmpwZw.jpg",
    body: "I'm a newbie designer and this kit is just perfect. I've learnt so much and my work looks amazing now. A big thumbs up!",
  },
];

const clients = [
  "SvgoClientsHelpr",
  "SvgoClientsMaisonHochard",
  "SvgoClientsOkko",
  "SvgoClientsStatshop",
  "SvgoClientsHelpr",
  "SvgoClientsMaisonHochard",
  "SvgoClientsOkko",
  "SvgoClientsStatshop",
];
</script>

<template>
  <div class="relative pt-32">
    <div class="pointer-events-none absolute inset-0 bg-center bg-grid-white/10 bg-grid-16 [mask-image:radial-gradient(white,transparent_85%)]"></div>

    <div class="relative flex flex-col justify-center gap-4 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
      <!-- spotlight -->
      <div
        class="absolute -top-8 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-white/25 blur-[120px] lg:-top-8 lg:h-[32rem] lg:w-[32rem] lg:blur-[200px]"
      ></div>

      <!-- profile picture -->
      <div class="flex items-center justify-center z-10">
        <SpotlightButton rounded>
          <div
            class="relative bg-gradient-to-b from-white/25 to-white bg-clip-text font-mona text-lg font-medium text-transparent transition-all duration-200 flex items-center justify-center gap-2"
          >
            <NuxtImg
              width="96"
              src="/assets/hugo-richard-light-sm.webp"
              class="rounded-full h-24 w-24 object-cover border-2 border-gray-800/30"
              alt="Hugo Richard Profile Picture"
              aria-label="Hugo Richard Profile Picture"
            />
          </div>
        </SpotlightButton>
      </div>

      <div class="flex flex-col items-center justify-center z-20">
        <!-- title -->
        <h1 class="text-center font-display text-3xl font-light leading-tight lg:text-5xl">
          {{ $t("home.hero.part1") }}

          <br />

          <span class="bg-gradient-to-br from-white/90 to-white/30 bg-clip-text text-transparent">
            {{ $t("home.hero.part2") }}
          </span>
        </h1>

        <!-- subtitle -->
        <h2 class="mt-4 max-w-xl text-center text-lg font-light text-white/60">
          {{ $t("home.hero.subtitle") }}
        </h2>

        <!-- social -->
        <div class="flex items-center justify-center gap-6 sm:gap-10 mt-6">
          <NuxtLink
            v-for="social in socials"
            :key="social.name"
            :to="social.link"
            target="_blank"
            class="flex items-center justify-center"
            :aria-label="'Go to ' + social.name + ' profile'"
          >
            <component
              :is="social.logo"
              class="social-item w-5 h-5 text-muted hover:text-main transition-all duration-300"
              :fontControlled="false"
              :alt="social.name + ' logo'"
              :aria-label="social.name + ' logo'"
            />
          </NuxtLink>
        </div>

        <!-- cta -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-2 mt-6">
          <UTooltip :text="$t('home.hero.email')" :shortcuts="['⌘', 'O']">
            <SpotlightButton>
              <NuxtLink
                class="relative bg-gradient-to-b from-white/25 to-white bg-clip-text font-mona text-lg font-medium text-transparent transition-all duration-200 flex items-center justify-center gap-2"
                to="/contact"
              >
                {{ $t("home.hero.contact") }}
                <EnvelopeIcon class="w-5 h-5 text-white/80" />
              </NuxtLink>
            </SpotlightButton>
          </UTooltip>
          <MeetingButton />
        </div>

        <div class="flex flex-col gap-4 w-full max-w-3xl lg:mt-16 mt-12">
          <div class="flex flex-col gap-4 w-full">
            <h3 class="text-muted">
              {{ $t("navigation.works") }}
            </h3>
            <div class="flex flex-col gap-4 w-full">
              <NuxtLink
                v-for="project in projects.filter((work) => work.featured)"
                :key="project.name"
                class="flex items-center gap-2 cursor-pointer px-4 py-2 rounded-lg hover:bg-secondary hover:text-main"
                :to="project.release === 'soon' ? '/' : project.link"
                :aria-label="project.name + ' project link'"
                :target="project.release === 'soon' ? '_self' : '_blank'"
              >
                <span class="whitespace-nowrap">
                  {{ project.name }}
                </span>
                <div class="w-full h-[0.1px] mx-2 bg-muted"></div>
                <span class="text-muted whitespace-nowrap">
                  {{ project.release === "soon" ? $t("global.soon") + "..." : project.release }}
                </span>
              </NuxtLink>
              <div class="flex justify-center mt-4">
                <button class="btn-primary" @click="useRouter().push('/works')">{{ $t("global.see_more") }}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--  <div class="flex flex-col gap-4 items-center justify-center p-6">
      <Hero />
      <div class="linebreak my-6"></div>
      <div class="flex flex-col max-w-3xl gap-8">
        <div class="flex flex-col gap-4">
          <h3 class="text-muted">
            {{ $t("navigation.about") }}
          </h3>
          <div class="flex flex-col gap-4 text-main font-light">
            <p>
              {{ $t("home.about.part1") }}
            </p>
            <p>
              {{ $t("home.about.part2") }}
            </p>
            <p>
              {{ $t("home.about.part3") }}
            </p>
          </div>
        </div>
        <div class="flex flex-col gap-4">
          <h3 class="text-muted">
            {{ $t("navigation.works") }}
          </h3>
          <ProjectList featured />
        </div>
      </div>
      &lt;!&ndash;    <Testimonials />&ndash;&gt;
    </div>-->
  </div>
</template>

<style scoped></style>
