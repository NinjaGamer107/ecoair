<template>
  <q-header
    @reveal="closeMobileNav()"
    reveal
    :style="{
      'min-height': minHeightToFixWhiteLine + 'px'
    }"
    :reveal-offset="400"
    class="bg-secondary text-light shadow-3"
  >
    <q-toolbar class="no-shadow">
      <q-btn
        class="text-h5 text-weight-bold"
        unelevated
        stretch
        :to="{ name: 'Home' }"
        icon="fas fa-leaf"
        label="EcoAir"
      />
      <q-space />
      <q-btn-group unelevated stretch :outline="false">
        <q-btn
          v-show="!isMobile"
          class="text-subtitle2"
          v-for="(tab, index) in tabs"
          :to="{ name: tab.route }"
          :key="index"
          :icon="tab.icon"
          :label="tab.name"
        />

        <!-- This is mobile-only navigation -->
        <q-btn
          v-show="isMobile"
          icon="fas fa-bars"
          @click="switchMobileNav()"
        />
      </q-btn-group>
    </q-toolbar>
    <q-separator v-show="isMobileNavOpen" />
    <AnimMobMenu :isMobileNavOpen="isMobileNavOpen" :tabs="tabs" />
    <!-- End of mobile-only navigation -->
  </q-header>
</template>

<script>
// import { mapGetters } from "vuex";
import AnimMobMenu from "@/components/AnimatedMobileMenu.vue";

export default {
  name: "Navigation",
  components: {
    AnimMobMenu
  },
  data() {
    return {
      tab: "Home",
      tabs: [
        {
          name: "Home",
          route: "Home",
          icon: "fas fa-home"
        },
        {
          name: "About",
          route: "About",
          icon: "fas fa-info-circle"
        },
        {
          name: "Pre-register",
          route: "Register",
          icon: "fas fa-sign-in-alt"
        }
      ],
      windowWidth: window.innerWidth
    };
  },
  methods: {
    switchMobileNav() {
      this.$store.commit("switchMobileNav");
    },
    closeMobileNav() {
      this.$store.commit("turnOffMobileNav");
    }
  },
  computed: {
    isMobileNavOpen() {
      return this.isMobile && this.pressedForMobileNav;
    },
    minHeightToFixWhiteLine() {
      if (!this.isMobileNavOpen) {
        return 62;
      } else {
        return 171;
      }
    },
    isMobile() {
      if (this.$store.getters.isMobile) {
        return true;
      } else {
        this.$store.commit("turnOffMobileNav");
        return false;
      }
    },
    pressedForMobileNav() {
      return this.$store.state.pressedForMobileNav;
    }
  }
};
</script>

<style scoped></style>
