<template>
  <div class="room-waiting-container">
    <h1 class="room-title">
      <span>Bienvenue dans la salle </span>
      <span>
        <i style="color:white">
          " <b class="room-name">{{ $store.state.roomInfos.name }}</b> "</i
        >
      </span>
    </h1>
    <div class="room-waiting-display">
      <div class="player-display-table">
        <h3>
          <em style="color:#ff9010; font-style:normal">-</em> Liste des joueurs
          <em style="color:#ff9010; font-style:normal">-</em>
        </h3>
        <div class="player-display-table-container">
          <div
            class="player-display"
            :class="{
              'player-display--ready':
                $store.state.roomInfos.players[player.playerNickname]
                  .playerIsReady,
            }"
            v-for="player in players"
            :key="player.playerNickname"
          >
            <div class="player-avatar-container">
              <img class="player-avatar" src="../assets/quiz-final.png" />
            </div>
            <div class="player-nickname">
              <span>{{ capitalize(player.playerNickname) }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="controller">
        <h3>
          <em style="color:#ff9010; font-style:normal">-</em> Rappel des règles
          <em style="color:#ff9010; font-style:normal">-</em>
        </h3>

        <ul class="controller-section">
          <li>
            <img class="questionmark" src="../assets/quiz-final.png" />30
            questions.
          </li>
          <li>
            <img class="questionmark" src="../assets/quiz-final.png" />30
            secondes pour répondre à chaque question.
          </li>
          <li>
            <img class="questionmark" src="../assets/quiz-final.png" />Il en va
            de soi qu'aucune recherche sur les susnommés Google/Yahoo/Bing/etc..
            n'est autorisée.
          </li>
          <li>
            <img class="questionmark" src="../assets/quiz-final.png" />Amusez
            vous !
          </li>
        </ul>

        <quiz-button
          class="owner-button"
          v-if="$store.state.playerInfos.role == 'owner'"
          :disabled="!areAllPlayersReady"
          @click="launchGame()"
        >
          Lancer la partie
        </quiz-button>
        <quiz-button
          class="ready-button"
          v-if="
            $store.state.playerInfos.role == 'player' &&
              !$store.state.playerInfos.isReady
          "
          @click="setReady()"
        >
          Je suis prêt(e)
        </quiz-button>
        <span
          class="waiting-message"
          v-if="
            $store.state.playerInfos.role == 'player' &&
              $store.state.playerInfos.isReady
          "
          >- En attente du maître du jeu -</span
        >
      </div>
    </div>
    <quiz-modal
      type="success"
      :quizNames="quizNames"
      v-if="
        $store.state.roomInfos.modal.openModal == true &&
          $store.state.roomInfos.modal.modalType == 'success'
      "
    ></quiz-modal>
    <quiz-modal
      type="error"
      v-if="
        $store.state.roomInfos.modal.openModal == true &&
          $store.state.roomInfos.modal.modalType == 'error'
      "
    ></quiz-modal>
  </div>
</template>

<script>
import QuizModal from '@/components/Modals/QuizModal.vue';
import QuizButton from '@/components/UI/QuizButton.vue';

export default {
  components: {
    QuizModal,
    QuizButton,
  },
  props: {
    roomName: {
      type: String,
      required: true,
    },
    players: {
      type: Object,
      required: true,
    },
    quizNames: {
      type: Array,
      required: true,
    },
  },
  computed: {
    areAllPlayersReady() {
      const players = this.$store.state.roomInfos.players;
      const playersArray = Object.values(players);

      for (const player of playersArray) {
        if (!player.playerIsReady) {
          return false;
        }
      }
      return true;
    },
  },
  methods: {
    capitalize(string) {
      return string[0].toUpperCase() + string.slice(1);
    },
    setReady() {
      this.$store.dispatch('setReady', {
        roomName: this.$store.state.roomInfos.name,
        playerNickname: this.$store.state.playerInfos.name,
      });
    },
    async launchGame() {
      try {
        await this.$store.dispatch('launchGame', {
          roomName: this.roomName,
        });
        this.$store.dispatch('openModal', {
          roomName: this.roomName,
          modalType: 'success',
        });
      } catch (error) {
        this.$store.dispatch('openModal', {
          roomName: this.roomName,
          modalType: 'error',
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.room-waiting-container {
  color: #cac9c9;
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
}

.room-title {
  font-family: 'Mukta', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: rgb(204, 204, 204);
  padding: 0 16px;
  font-size: 28px;
  text-align: center;
  margin-bottom: 60px;

  @media (min-width: 520px) {
    font-size: 30px;
    margin-bottom: 120px;
  }
}
.room-name {
  font-family: 'Grandstander', cursive;
  color: #ff9010;
}

.player-display {
  border: 2px solid rgb(255, 144, 16);
  width: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 5px;
  border-radius: 5px;
  -webkit-box-shadow: 5px 5px 5px 0px rgb(0, 0, 0);
  -moz-box-shadow: 5px 5px 5px 0px rgb(0, 0, 0);
  box-shadow: 5px 5px 5px 0px rgb(0, 0, 0);
}

.player-display--ready {
  background: rgb(4, 105, 4);
}
.player-avatar {
  margin: auto;
  width: 100px;
  height: 100px;
}
.player-avatar-container {
  display: flex;
  align-items: center;
  width: 100%;
  padding-bottom: 10px;
  border: 1px solid rgb(255, 144, 16);
}
.player-display-table {
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1024px) {
    width: 40%;
  }
}
.player-display-table h3 {
  font-family: 'Mukta', sans-serif;
  margin-bottom: 40px;
  font-size: 28px;
}
.player-display-table-container {
  display: flex;
  box-sizing: border-box;
  max-width: 100%;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-bottom: 50px;
}
.player-nickname {
  background: #ff9010;
  width: 100%;
  text-align: center;
}
.player-nickname span {
  color: #0e0e0e;
  font-family: 'Mukta', sans-serif;
  font-weight: 600;
}

.room-waiting-display {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
}

.controller {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: fit-content;
  border: 2px dashed white;

  @media (min-width: 1024px) {
    width: 45%;
  }
}

.controller h3 {
  font-family: 'Mukta', sans-serif;
  margin-bottom: 50px;
  font-size: 28px;
}

.controller-section {
  font-family: 'Mukta', sans-serif;
}

ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  width: 80%;
  padding-bottom: 0;
  margin-bottom: 50px;

  @media (min-width: 1024px) {
    width: 85%;
  }
}

ul li {
  display: flex;
  font-size: 22px;
  line-height: 24px;
  margin-bottom: 20px;
}
.questionmark {
  height: 18px;
  width: 18px;
  margin-right: 15px;
}
.owner-button {
  margin-bottom: 30px;
  font-size: 18px;
}
.owner-button:disabled {
  border: 1px solid grey;
  color: grey;
}
.owner-button:disabled:hover {
  background: #0e0e0e;
}

.ready-button {
  margin-bottom: 30px;
  font-size: 18px;
}

.waiting-message {
  color: #ff9010;
  font-family: 'Black Ops One', cursive;
  margin-bottom: 50px;
}
</style>
