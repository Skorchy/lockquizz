<template>
  <div class="car-container">
    <span style="color:red" v-if="errorMessage"
      >Ce nom de salle est déjà utilisé !</span
    >
    <div class="car-form">
      <div class="car-form-row">
        <span>Nom De La Salle</span>
        <input
          v-model="roomName"
          type="text"
          name="room-name"
          id="room-name"
          placeholder="Nom de la salle"
          required
        />
      </div>
      <div class="car-form-row">
        <span>Mot De Passe (min. 3 car.)</span>
        <input
          v-model="roomPw"
          type="password"
          name="room-pw"
          id="room-pw"
          placeholder="Mot de passe"
          minlength="3"
          required
        />
      </div>
      <div class="car-form-row">
        <span>Pseudonyme</span>
        <input
          v-model="roomOwner"
          type="text"
          name="room-player-nickname"
          id="room-player-nickname"
          placeholder="Votre pseudonyme"
          required
        />
      </div>
      <div class="car-form-row">
        <button type="button" @click="validate()">Go !</button>
      </div>
    </div>
  </div>
</template>

<script>
import { createRoom, checkIfRoomExists } from "../services/roomFunctions.js";
export default {
  data() {
    return {
      roomOwner: "",
      roomName: "",
      roomPw: "",
      errorMessage: false,
    };
  },
  methods: {
    validate() {
      const checking = checkIfRoomExists(this.roomName);
      checking.then((response) => {
        if (response === 0) {
          this.errorMessage = true;
          setTimeout(() => {
            this.errorMessage = false;
          }, 3000);
        } else {
          const room = createRoom(this.roomName, this.roomPw, this.roomOwner);
          room.then(() => {
            this.$router.push({ path: `/room/${this.roomName}` });
          });
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.car-container {
  min-height: 500px;
  width: 100%;
}
</style>
