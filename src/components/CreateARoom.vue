<template>
  <div class="car-container">
    <span style="color:red" v-if="errorMessage"
      >Ce nom de salle est déjà utilisé !</span
    >
    <div class="car-form">
      <div class="car-form-row">
        <span class="label">Nom de la salle</span>
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
        <span>Mot de passe (min. 3 car.)</span>
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
          placeholder="Pseudonyme"
          required
          maxlength="16"
        />
      </div>
      <div class="car-form-row car-form-button">
        <quiz-button :disabled="isDisabled" @click="validate()">
          - Créer la salle -
        </quiz-button>
      </div>
    </div>
  </div>
</template>

<script>
import { createRoom, checkIfRoomExists } from '../services/roomFunctions.js';
import QuizButton from '@/components/UI/QuizButton.vue';

export default {
  data() {
    return {
      roomOwner: '',
      roomName: '',
      roomPw: '',
      errorMessage: false,
    };
  },
  components: {
    QuizButton,
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
            this.$store.dispatch('setPlayer', {
              name: this.roomOwner,
              role: 'owner',
              isReady: true,
            });
          });
        }
      });
    },
  },
  computed: {
    isDisabled() {
      if ((this.roomOwner && this.roomName && this.roomPw) == '') {
        return true;
      } else return false;
    },
  },
};
</script>

<style lang="scss" scoped>
.car-container {
  min-height: 400px;
  width: 100%;
}

.car-form {
  width: 75%;
  margin: auto;
  padding-top: 50px;

  @media (min-width: 1024px) {
    width: 50%;
  }
}

.car-form-row {
  display: flex;
  flex-direction: column;
}

.car-form-row span {
  font-family: 'Mukta', sans-serif;
  font-size: 18px;
  color: #ff9010;
  margin-bottom: 3px;
}
.car-form-row input {
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 2px solid #ffffff;
  background: transparent;
  color: #e0e0e0;
}

.car-form-row input:focus {
  outline: none;
}

.car-form-button {
  margin: 30px 0;
}
.car-form-row button:disabled {
  border: 1px solid grey;
  color: grey;
}
.car-form-row button:disabled:hover {
  background: #0e0e0e;
}
</style>
