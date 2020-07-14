<template>
  <div>
    <Hero />
    <div class="q-pa-md items-start q-gutter-md">
      <HomeCard
        :right="true"
        :imageLink="require('@/assets/factory-air-pollution.jpeg')"
      >
        <span slot="title">We can create a better world together</span>
        <span slot="paragraph">This is text from we can create</span>
      </HomeCard>
    </div>
    <BannerSection route="Register">
      <span slot="heading">
        <span class="text-accent">Pre-register</span> and recieve email when we
        launch!</span
      >
      <span>Pre-register now</span>
    </BannerSection>
    <div class="q-pa-md items-start q-gutter-md">
      <HomeCard
        :right="false"
        :imageLink="require('@/assets/polluted-dawn.jpg')"
      >
        <span slot="title">We can create a better world together 2</span>
        <span slot="paragraph">This is text from we can create 2</span>
      </HomeCard>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from "@/components/HeroSection.vue";
import HomeCard from "@/components/HomeScreenCard.vue";
import BannerSection from "@/components/BannerSection.vue";

export default {
  name: "Home",
  components: {
    Hero,
    HomeCard,
    BannerSection
  }
};
</script>
