<template>
  <div class="owner-modal">
    <span class="text">- Veuillez sélectionner le quiz -</span>
    <select name="quiz" id="quiz" class="quiz-selector" v-model="selectedQuiz">
      <option v-for="quizName in quizNames" :key="quizName">
        {{ quizName }}
      </option>
    </select>
    <quiz-button class="owner-modal-validate-button">Valider</quiz-button>
  </div>
</template>

<script>
import QuizButton from '../UI/QuizButton.vue';

export default {
  data() {
    return {
      selectedQuiz: '',
    };
  },
  components: { QuizButton },
  props: {
    quizNames: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.owner-modal {
  position: relative;
  margin: auto;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
}
.text {
  font-family: 'Black Ops One', cursive;
  color: #ff9010;
  text-align: center;
  margin: 25px 0 50px 0;
  @media (min-width: 520px) {
    font-size: 20px;
  }
}
.quiz-selector {
  padding: 8px;
  border: 1px dashed white;
  background: #0e0e0e;
  color: #cac9c9;
  width: 100%;
  @media (min-width: 520px) {
    font-size: 20px;
  }
}
.owner-modal-validate-button {
  margin: 50px 0;
  width: 50%;
}
</style>
