<template>
  <q-footer
    bottom
    class="q-pa-md bg-primary text-light shadow-3 absolute column justify-around items-center"
  >
    <div class="row full-width justify-center q-gutter-md">
      <div class="row justify-center q-gutter-md">
        <!-- Empty to prop because it is required, or else element won't render -->
        <router-link
          @click.native="scrollToTop()"
          to=""
          class="text-subtitle1 text-white no-dec"
          >Go to the top of the page</router-link
        >
      </div>
      <div />
      <div />
      <div class="row justify-center q-gutter-md text-subtitle1">
        <router-link
          :to="{ name: 'Home' }"
          class="text-subtitle1 text-white no-dec"
          >Home</router-link
        >
        <p class="non-selectable">|</p>
        <router-link
          :to="{ name: 'About' }"
          class="text-subtitle1 text-white no-dec"
          >About</router-link
        >
        <p class="non-selectable">|</p>
        <router-link
          :to="{ name: 'Register' }"
          class="text-subtitle1 text-white no-dec"
          >Pre-register</router-link
        >
      </div>
    </div>
    <div class="row justify-center q-gutter-md">
      <a href="https://www.github.com">
        <q-avatar size="md">
          <img :src="require('@/assets/svgs/github-svg.svg')" />
        </q-avatar>
      </a>
      <a href="https://www.twitter.com">
        <q-avatar size="md">
          <img :src="require('@/assets/svgs/twitter-svg.svg')" />
        </q-avatar>
      </a>
      <a href="https://www.instagram.com">
        <q-avatar size="md">
          <img :src="require('@/assets/svgs/instagram-svg.svg')" />
        </q-avatar>
      </a>
      <a href="https://www.facebook.com">
        <q-avatar size="md">
          <img :src="require('@/assets/svgs/facebook-svg.svg')" />
        </q-avatar>
      </a>
    </div>
  </q-footer>
</template>

<script>
export default {
  name: "Footer",
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
    }
  }
};
</script>

<style scoped>
.no-dec {
  text-decoration: none;
}
</style>
