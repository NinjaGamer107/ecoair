<template>
  <div
    style="height: 300px;"
    class="container full-width column items-center text-center"
    :class="reversed ? 'bg-white' : 'bg-primary'"
    data-aos-once="true"
    data-aos-duration="1200"
    data-aos="fade-up"
  >
    <q-space />
    <q-space />
    <q-space />
    <q-space />
    <p class="text-h4" :class="reversed ? 'text-primary' : 'text-white'">
      <slot name="heading">This is default heading</slot>
    </p>
    <q-space />
    <q-btn
      style="width: 300px;"
      flat
      class="bg-accent text-bold"
      :to="{ name: route }"
      ><slot>Default button name</slot></q-btn
    >
    <q-space />
    <q-space />
    <q-space />
    <q-space />
  </div>
</template>

<script>
export default {
  name: "PreRegsiterSection",
  props: {
    reversed: {
      required: false,
      type: Boolean,
      default: false
    },
    route: {
      required: true,
      type: String
    }
  }
};
</script>

<style scoped></style>
