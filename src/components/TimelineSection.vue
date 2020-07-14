<template>
  <div
    class="q-px-md q-py-lg"
    data-aos-once="true"
    data-aos-duration="600"
    data-aos="fade-up"
  >
    <p class="text-center text-h4 text-bold q-pb-md">How it all began</p>
    <q-timeline :layout="isMobile ? 'dense' : 'loose'" color="secondary">
      <q-timeline-entry
        v-for="(time, index) in timelineData"
        :key="index"
        :title="time.title"
        :subtitle="time.date"
        :side="index % 2 == 0 ? 'left' : 'right'"
        color="primary"
        :icon="time.icon"
      >
        <div class="text-weight-light text-body1">
          <!-- Replace with time.content, once it's been filled with real content -->
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
          quibusdam cupiditate id, quasi, beatae, a ab quod possimus
          exercitationem atque inventore repudiandae numquam consequatur illum
          similique recusandae. Quod, eaque labore?
        </div>
      </q-timeline-entry>
    </q-timeline>
  </div>
</template>

<script>
export default {
  name: "TimeLine",
  data() {
    return {
      timelineData: [
        {
          title: "Idea was born",
          date: "February 22, 1986",
          icon: "far fa-check-square",
          content: "Lorem ipsum ipsum lorem"
        },
        {
          title: "Idea was born",
          date: "February 22, 1986",
          icon: "far fa-check-square",
          content: "Lorem ipsum ipsum lorem"
        },
        {
          title: "Idea was born",
          date: "February 22, 1986",
          icon: "far fa-check-square",
          content: "Lorem ipsum ipsum lorem"
        },
        {
          title: "Idea was born",
          date: "February 22, 1986",
          icon: "far fa-check-square",
          content: "Lorem ipsum ipsum lorem"
        }
      ]
    };
  },
  computed: {
    isMobile() {
      return this.$store.getters.isMobile;
    }
  }
};
</script>

<style scoped></style>
