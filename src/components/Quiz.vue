<template>
  <div class="quiz">
    <timer :duration="20"></timer>
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
      quizName: this.$store.state.roomInfos.quizName,
      questions: this.$store.state.roomInfos.questions,
    };
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
