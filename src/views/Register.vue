<template>
  <div>
    <Form />
    <BannerSection :reversed="true" route="About">
      <span slot="heading">
        Not sure who we are, or what this project is?
      </span>
      <span>Get to know more about us</span>
    </BannerSection>
  </div>
</template>

<script>
import BannerSection from "@/components/BannerSection.vue";
import Form from "@/components/PreRegisterForm.vue";

export default {
  name: "Register",
  components: {
    BannerSection,
    Form
  }
};
</script>

<style scoped></style>
