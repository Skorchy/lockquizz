<template>
  <div class="quiz">
    <timer :duration="20"></timer>
    <span class="question" style="color:white">
      {{ questionDisplayed.question }}
    </span>
    <audio v-if="questionDisplayed.audioUrl" autoplay controls>
      <source :src="questionDisplayed.audioUrl" />
    </audio>
    <img v-if="questionDisplayed.imgUrl" :src="questionDisplayed.imgUrl" />
  </div>
</template>

<script>
import Timer from '@/components/UI/Timer.vue';
export default {
  components: {
    Timer,
  },
  data() {
    return {
      questionNumber: 0,
      quizName: this.$store.state.roomInfos.quizName,
      questions: this.$store.state.roomInfos.questions,
    };
  },
  methods: {
    nextQuestion() {
      this.questionNumber++;
    },
  },
  computed: {
    questionDisplayed() {
      return this.questions[this.questionNumber];
    },
  },
  mounted() {
    console.log(this.questions);
  },
};
</script>

<style lang="scss" scoped>
.quiz {
  background: #050505;
  border: 1px solid rgb(255, 255, 255);
  margin: auto;
  padding-bottom: 50px;
  box-sizing: border-box;
  border-radius: 5px;
  width: 95%;
  color: white;
}
</style>
