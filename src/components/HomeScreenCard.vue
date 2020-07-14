<template>
  <div
    data-aos-once="true"
    data-aos-duration="1200"
    :data-aos="right ? 'fade-left' : 'fade-right'"
  >
    <!-- Version of the component for the bigger screens -->
    <q-card v-show="!isMobile" flat bordered>
      <q-card-section horizontal>
        <q-img
          v-show="!right"
          class="q-ma-md col-5 no-border no-border-radius"
          :src="imageLink"
        />
        <q-space v-show="!right" />
        <q-card-section>
          <q-card-section>
            <p class="text-h4 text-bold">
              <slot name="title">This is title</slot>
            </p>
          </q-card-section>
          <q-card-section>
            <p class="text-weight-light text-body1">
              <slot name="paragraph">This is paragrapgh</slot>
            </p>
          </q-card-section>
        </q-card-section>
        <q-space v-show="right" />
        <q-img
          v-show="right"
          class="q-ma-md col-5 no-border no-border-radius"
          :src="imageLink"
        />
      </q-card-section>
    </q-card>
    <!-- Version of the component for the smaller screens -->
    <q-card v-show="isMobile" flat bordered class="rounded-borders">
      <q-card-section>
        <q-img class="col-5 no-border no-border-radius" :src="imageLink" />
        <q-space />
        <q-card-section>
          <q-card-section>
            <p class="text-h4 text-bold">
              <slot name="title">This is title</slot>
            </p>
          </q-card-section>
          <q-card-section>
            <p class="text-weight-light text-body1">
              <slot name="paragraph">This is paragrapgh</slot>
            </p>
          </q-card-section>
        </q-card-section>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  name: "HomeScreenCard",
  props: {
    imageLink: {
      default: require("@/assets/ship-on-the-water.jpg"),
      required: false
    },
    right: {
      default: true,
      required: false,
      type: Boolean
    }
  },
  computed: {
    isMobile() {
      return this.$store.getters.isMobile;
    }
  }
};
</script>

<style scoped>
.my-image {
  opacity: 100%;
}
</style>
