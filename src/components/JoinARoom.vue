<template>
  <div class="jar-container">
    <span style="color:red" v-if="errorMessage">{{ errorMessage }}</span>
    <div class="jar-form">
      <div class="jar-form-row">
        <span>Nom de la salle</span>
        <input
          v-model="roomName"
          type="text"
          name="room-name"
          id="room-name"
          placeholder="Nom de la salle"
          required
          @keyup.enter="connect()"
        />
      </div>
      <div class="jar-form-row">
        <span>Mot de passe</span>
        <input
          v-model="roomPw"
          type="password"
          name="room-pw"
          id="room-pw"
          placeholder="Mot de passe"
          required
          @keyup.enter="connect()"
        />
      </div>
      <div class="jar-form-row">
        <span>Pseudonyme</span>
        <input
          v-model="playerNickname"
          type="text"
          name="room-playerNickname"
          id="room-playerNickname"
          placeholder="Pseudonyme"
          required
          maxlength="16"
          @keyup.enter="connect()"
        />
      </div>
      <div class="jar-form-row jar-form-button">
        <button type="button" :disabled="isDisabled" @click="connect()">
          - Rejoindre la salle -
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { joinRoom } from "@/services/roomFunctions.js";
export default {
  data() {
    return {
      roomName: "",
      roomPw: "",
      playerNickname: "",
      errorMessage: "",
    };
  },
  methods: {
    async connect() {
      try {
        await joinRoom(this.roomName, this.roomPw, this.playerNickname);
        this.$store.dispatch("setPlayer", {
          name: this.playerNickname,
          role: "player",
          isReady: false,
        });
        this.$router.push({ path: `/room/${this.roomName}` });
      } catch (error) {
        this.errorMessage = "Connexion refusée";
        setTimeout(() => {
          this.errorMessage = "";
        }, 5000);
      }
    },
  },
  computed: {
    isDisabled() {
      if ((this.playerNickname && this.roomName && this.roomPw) == "") {
        return true;
      } else return false;
    },
  },
};
</script>

<style lang="scss" scoped>
.jar-container {
  min-height: 400px;
  width: 100%;
}

.jar-form {
  width: 75%;
  margin: auto;
  padding-top: 50px;

  @media (min-width: 1024px) {
    width: 50%;
  }
}

.jar-form-row {
  display: flex;
  flex-direction: column;
}

.jar-form-row span {
  font-family: "Mukta", sans-serif;
  font-size: 18px;
  color: #ff9010;
  margin-bottom: 3px;
}
.jar-form-row input {
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 2px solid #ffffff;
  background: transparent;
  color: #e0e0e0;
}

.jar-form-row input:focus {
  outline: none;
}

.jar-form-button {
  margin: 30px 0;
}
.jar-form-row button {
  margin: auto;
  width: 95%;
  border-radius: 5px;
  border: none;
  background: #ff9010;
  color: #202124;
  font-family: "Mukta", sans-serif;
  font-size: 24px;
  -webkit-box-shadow: 4px 4px 2px 0px rgba(0, 0, 0, 1);
  -moz-box-shadow: 4px 4px 2px 0px rgba(0, 0, 0, 1);
  box-shadow: 4px 4px 2px 0px rgba(0, 0, 0, 1);

  @media (min-width: 768px) {
    width: 60%;
  }
}

.jar-form-row button:disabled {
  background: grey;
}
</style>
