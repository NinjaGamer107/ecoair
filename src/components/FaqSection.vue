<template>
  <div data-aos-once="true" data-aos-duration="600" data-aos="fade-down">
    <p class="text-center text-h4 text-bold q-pb-md">
      The frequently asked questions
    </p>
    <q-expansion-item
      v-for="(question, index) in faq"
      group="faq"
      :key="index"
      expand-separator
      icon="fas fa-question"
      :duration="500"
      dense-toggle
      :label="question.name"
      style="width: 80%;"
      class="q-mx-auto text-h6"
      header-class="text-primary"
    >
      <q-card class="text-body1">
        <q-card-section>{{ question.content }}</q-card-section>
      </q-card>
    </q-expansion-item>
  </div>
</template>

<script>
export default {
  data() {
    return {
      faq: [
        {
          name: "Question 1",
          content: "Lorem ipsum dolor sit amet"
        },
        {
          name: "Question 2",
          content: "Lorem ipsum dolor sit amet"
        },
        {
          name: "Question 3",
          content: "Lorem ipsum dolor sit amet"
        },
        {
          name: "Question 4",
          content: "Lorem ipsum dolor sit amet"
        },
        {
          name: "Question 5",
          content: "Lorem ipsum dolor sit amet"
        },
        {
          name: "Question 6",
          content: "Lorem ipsum dolor sit amet"
        }
      ]
    };
  }
};
</script>

<style scoped></style>
