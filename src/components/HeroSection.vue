<template>
  <q-parallax class="full-width" :speed="0.6">
    <template v-slot:media>
      <img class="blur" src="@/assets/black-and-white-pollution.jpg" />
    </template>
    <template v-slot:content="scope">
      <div
        class="absolute column items-center non-selectable"
        :style="{
          opacity: 0.5 + (1 - scope.percentScrolled) * 1.15,
          top: scope.percentScrolled * 55 + '%',
          left: 0,
          right: 0
        }"
      >
        <img
          src="https://uilogos.co/img/logomark/leaf.png"
          style="width: 175px; height: 175px;"
        />
        <div class="text-h2 text-white text-weight-bolder text-center">
          EcoAir
        </div>
        <div class="text-h6 text-accent text-center">
          Everything you need to stay healthy and save the planet, within the
          grasp of your hand
        </div>
      </div>
    </template>
  </q-parallax>
</template>

<script>
export default {
  name: "Hero"
};
</script>

<style scoped>
.blur {
  -webkit-filter: blur(1px); /* Safari 6.0 - 9.0 */
  filter: blur(1px);
}
</style>
