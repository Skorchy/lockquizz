<template>
  <div class="player-modal">
    <p class="explanations">
      Le maître du jeu est en train de sélection le quiz sur lequel vous allez
      jouer.
    </p>
    <div class="loader">
      <div></div>
      <div></div>
      <div></div>
    </div>
    <p class="get-ready">Tenez vous prêt(e)!</p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.player-modal {
  position: relative;
  margin: auto;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
}
.explanations {
  font-family: 'Varela Round', sans-serif;
}
.get-ready {
  font-family: 'Black Ops One', cursive;
  color: #ff9010;
  text-align: center;
  margin: 25px 0;
  @media (min-width: 520px) {
    font-size: 20px;
  }
}
.loader {
  display: relative;
  display: inline-block;
  width: 70px;
  height: 70px;
}
.loader div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 50px;
  height: 50px;
  margin: 5px;
  border: 3px solid #fdb461;
  border-radius: 50%;
  animation: loader 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #fdb461 transparent transparent transparent;
}
.loader div:nth-child(1) {
  animation-delay: -0.45s;
}
.loader div:nth-child(2) {
  animation-delay: -0.3s;
}
.loader div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes loader {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
