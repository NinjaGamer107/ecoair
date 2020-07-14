<template>
  <div data-aos-once="true" data-aos-duration="600" data-aos="fade-down">
    <div v-show="!isMobile" class="row items-stretch full-height">
      <q-carousel
        class="col-6"
        style="height: 700px;"
        id="carousel"
        swipeable
        animated
        v-model="slide"
        infinite
        autoplay
      >
        <q-carousel-slide
          :name="1"
          :img-src="require('@/assets/look-at-sky-and-breathe.jpg')"
        />
        <q-carousel-slide
          :name="2"
          :img-src="require('@/assets/hopefull-breath.jpg')"
        />
        <q-carousel-slide
          :name="3"
          :img-src="require('@/assets/enjoying-the-picnic.jpg')"
        />
      </q-carousel>
      <div
        class="column col-6 q-pa-md text-center bg-primary items-center content-center justify-center"
      >
        <q-card tag="div" class="bg-white h-enough" flat bordered>
          <q-card-section class="q-pa-lg">
            <p class="text-h2">Pre-register for EcoAir</p>
            <p class="text-h6">Let's breathe at the fullest together</p>
          </q-card-section>

          <q-separator />

          <q-card-section>
            <q-form
              autocorrect="off"
              autocapitalize="off"
              autocomplete="off"
              spellcheck="false"
              @submit="onSubmit()"
              method="post"
              :action="formUrl"
              id="form"
              class="f-h column items-center q-pa-md"
            >
              <q-input
                class="size3-4 q-mt-xl"
                color="primary"
                bg-color="accent"
                name="email"
                type="email"
                filled
                v-model.lazy="email"
                label="Your email address"
              >
                <template v-slot:prepend>
                  <q-icon name="far fa-envelope" />
                </template>
              </q-input>
              <q-checkbox
                class="q-mt-md"
                name="notifications"
                v-model="sendNotifs"
                label="Should we send occasional information of our progress to your mail?"
                color="accent"
              />
              <q-btn
                type="submit"
                form="form"
                flat
                class="bg-accent text-bold q-mt-xl"
                >Pre-register now</q-btn
              >
            </q-form>
          </q-card-section>
        </q-card>
      </div>
    </div>
    <div v-show="isMobile">
      <div
        class="column q-pa-md text-center bg-primary items-center content-center justify-center"
        style="height: 600px"
      >
        <q-card tag="div" class="bg-white h-enough" flat bordered>
          <q-card-section class="q-pa-lg">
            <p class="text-h3">Pre-register for EcoAir</p>
            <p class="text-h6">Let's breathe at the fullest together</p>
          </q-card-section>

          <q-separator />

          <q-card-section>
            <q-form
              autocorrect="off"
              autocapitalize="off"
              autocomplete="off"
              spellcheck="false"
              @submit="onSubmit()"
              method="post"
              :action="formUrl"
              id="form"
              class="f-h column items-center q-pa-md"
            >
              <q-input
                class="size3-4 q-mt-xl"
                color="primary"
                bg-color="accent"
                name="email"
                type="email"
                filled
                v-model.lazy="email"
                label="Your email address"
              >
                <template v-slot:prepend>
                  <q-icon name="far fa-envelope" />
                </template>
              </q-input>
              <q-checkbox
                class="q-mt-md"
                name="notifications"
                v-model="sendNotifs"
                label="Should we send occasional information of our progress to your mail?"
                color="accent"
              />
              <q-btn
                type="submit"
                form="form"
                flat
                class="bg-accent text-bold q-mt-xl"
                >Pre-register now</q-btn
              >
            </q-form>
          </q-card-section>
        </q-card>
      </div>
      <q-carousel
        style="height: 650px;"
        id="carousel"
        swipeable
        animated
        v-model="slide"
        infinite
        autoplay
      >
        <q-carousel-slide
          :name="1"
          :img-src="require('@/assets/look-at-sky-and-breathe.jpg')"
        />
        <q-carousel-slide
          :name="2"
          :img-src="require('@/assets/hopefull-breath.jpg')"
        />
        <q-carousel-slide
          :name="3"
          :img-src="require('@/assets/enjoying-the-picnic.jpg')"
        />
      </q-carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: "PreRegisterForm",
  data() {
    return {
      sendNotifs: false,
      slide: 1,
      email: null,
      formUrl: "https://www.test.com" // Moze biti i drugi lokalni fajl
    };
  },
  computed: {
    isMobile() {
      return this.$store.getters.isMobile;
    }
  },
  methods: {
    onSubmit() {
      console.log("Submitted!");
    }
  }
};
</script>

<style scoped>
.size3-4 {
  width: 80%;
}
.h-enough {
  min-height: 75%;
}
.f-h {
  height: 60%;
}
</style>
