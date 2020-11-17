<template>
  <div class="container">
    <div class="menu">
      <quiz-title/>
      <img class="quiz-img" src="../assets/quiz-final.png" />
    </div>
    <div class="rules">
      <p>
        Bonjour et bienvenue sur le
        <b class="colored fonted">Quizz des Confinés</b> ! En cette période
        trouble et malheureuse, ce petit jeu est là pour égayer vos soirées
        "Sky'Péro" ou autres!
      </p>
      <p>
        Les règles du jeu sont simples, une séries de questions (<b
          style="color:green"
          >Faciles</b
        >,<b style="color:orange"> Intermédiaires</b> ou
        <b style="color:red">Difficiles</b>) et un temps limité pour y
        répondre!
      </p>
      <p>
        Après avoir répondu à toutes les questions, le maître du jeu les
        corrigera (de préférence en live/partage d'écran) afin que tout le monde
        puisse voir ses fautes (et surtout que vous puissiez rigoler des erreurs
        des autres !).
      </p>
      <p>
        Selon la difficulté des questions, vous obtiendrez plus ou moins de
        points!
      </p>
      <h4 class="scale-title"><b>Barème</b>:</h4>
      <p class="scale">
        <ul>
          <li><img class="questionmark" src="../assets/quiz-final.png"/><b style="color:green">Facile</b> : 1 point.</li>
          <li ><img class="questionmark" src="../assets/quiz-final.png"/><b style="color:orange">Intermédiaire</b> : 2 points.</li>
          <li><img class="questionmark" src="../assets/quiz-final.png"/><b style="color:red">Difficile</b> : 5 points.</li>
        </ul>
      </p>
      <p>Amusez vous bien, et puisse le sort vous être favorable !</p>
      <div class="game-buttons">
      <router-link to="/waiting"><button type="button">Jouer</button></router-link>
    </div>
    </div>
    
  </div>
</template>

<script>
import QuizTitle from "@/components/QuizTitle.vue";

export default {
  name: "Home",
  components: {
    QuizTitle
  }
};
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #dee0e4;
}

.menu {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.fonted {
  font-family: "Grandstander", cursive;
}
.colored {
  background: #ff9010;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
}
.light-grey {
  color: rgb(233, 233, 233);
}
.quiz-img {
  width: 50px;
  height: 50px;
  margin-bottom: 40px;
  
  @media (min-width: 520px) {
    width: 150px;
    height: 150px;
  }
}
.rules {
  background: rgb(14, 14, 14);
  border: 1px solid rgb(255, 255, 255);
  color: rgb(202, 201, 201);
  box-sizing: border-box;
  font-family: "Mukta", sans-serif;
  padding: 20px;
  width: 95%;
  font-size: 18px;
  margin-bottom: 20px;

  @media (min-width: 1024px) {
    width: 50%;
    font-size: 20px;
  }
}
.rules p {
  margin-bottom: 15px;
  line-height: 1.2;
}
.scale {
  padding: 0;
  margin: 0;
}
.scale-title {
  margin: 0;
}
.rules ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
}
.rules li {
  display: flex;
}
.questionmark {
  height: 18px;
  width: 18px;
}
.game-buttons {
  width: 100%;
  margin-top:50px;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.game-buttons button {
  background: #ff9010;
  color: #202124;
  font-family: "Grandstander", cursive;
  font-size: 24px;
  -webkit-box-shadow: 4px 4px 2px 0px rgba(0, 0, 0, 1);
  -moz-box-shadow: 4px 4px 2px 0px rgba(0, 0, 0, 1);
  box-shadow: 4px 4px 2px 0px rgba(0, 0, 0, 1);
  border: none;
  padding: 10px;
  width: 320px;
  margin-bottom: 10px;
  border-radius: 8px;
}
.game-buttons button:focus {
  outline: none;
}
.game-buttons button:hover {
  background: #ff8f10d3;
}
.game-buttons button:active {
  transform: translateY(2px);
}
</style>
