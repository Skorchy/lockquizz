<template>
  <button class="quiz-button" @click="forwardClick()">
    <slot></slot>
  </button>
</template>

<script>
export default {
  methods: {
    forwardClick() {
      this.$emit('click');
    },
  },
};
</script>

<style lang="scss" scoped>
.quiz-button {
  padding: 10px;
  border-radius: 8px;
  background: #0e0e0e;
  border: 2px solid #ff9010;
  color: #ff9010;
  font-weight: 500;
  font-family: 'Varela Round', sans-serif;
  -webkit-box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.75);
  transition: all ease-in 0.1s;

  @media (min-width: 520px) {
    font-size: 20px;
    font-weight: 600;
  }
}
.quiz-button:hover {
  background: #ff9010;
  color: #0e0e0e;
}
.quiz-button:focus {
  outline: 0;
}
.quiz-button:active {
  transform: scale(0.98);
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
}
</style>
