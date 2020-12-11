<template>
  <div class="quiz">{{ $store.state.roomInfos.quizName }}</div>
</template>

<script>
export default {};
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
