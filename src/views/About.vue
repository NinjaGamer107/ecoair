<template>
  <div class="q-gutter-lg">
    <Faq class="q-pa-md" />
    <Banner route="Register">
      <span slot="heading">
        <span class="text-accent">Pre-register</span> and recieve email when we
        launch!
      </span>
      <span>Pre-register now</span>
    </Banner>
    <Timeline class="q-pa-md" />
    <!-- Insert product overview here -->
  </div>
</template>

<script>
import Faq from "@/components/FaqSection.vue";
import Banner from "@/components/BannerSection.vue";
import Timeline from "@/components/TimelineSection.vue";

export default {
  name: "About",
  components: {
    Faq,
    Timeline,
    Banner
  },
  data() {
    return {};
  }
};
</script>

<style scoped></style>
