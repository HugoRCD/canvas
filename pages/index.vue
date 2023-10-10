<script setup lang="ts">
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
  <div class="flex flex-col gap-4 items-center justify-center p-6">
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
    <!--    <Testimonials />-->
  </div>
</template>

<style scoped></style>
