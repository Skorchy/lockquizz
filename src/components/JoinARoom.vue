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
        />
      </div>
      <div class="jar-form-row">
        <button type="button" @click="connect()">Go !</button>
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
        this.$router.push({ path: `/room/${this.roomName}` });
      } catch (error) {
        this.errorMessage = "Connexion refusée";
        setTimeout(() => {
          this.errorMessage = "";
        }, 5000);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.jar-container {
  min-height: 500px;
  width: 100%;
}
</style>
