<template>
  <q-layout view="hhh lpR fFf">
    <Navigation />
    <q-page-container id="body">
      <router-view />
    </q-page-container>
    <Footer />
    <q-resize-observer @resize="onResize" />
  </q-layout>
</template>

<script>
import Navigation from "@/components/TheNavigation.vue";
import Footer from "@/components/TheFooter.vue";

export default {
  name: "App",
  components: {
    Navigation,
    Footer
  },
  methods: {
    onResize(size) {
      // Whenever resized, sets the width of the window to global state, make site more responsive across other components
      this.$store.commit("updateWindowWidth", size.width);
    }
  }
};
</script>
