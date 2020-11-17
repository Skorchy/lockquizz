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
    <div class="player-display-table">
      <h3>Liste des joueurs</h3>
      <div class="player-display-table-container">
        <div
          class="player-display"
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
  </div>
</template>

<script>
export default {
  props: {
    roomName: {
      type: String,
      required: true,
    },
    players: {
      type: Array,
      required: true,
    },
  },
  methods: {
    capitalize(string) {
      return string[0].toUpperCase() + string.slice(1);
    },
  },
};
</script>

<style lang="scss" scoped>
.room-waiting-container {
  color: rgb(202, 201, 201);
  width: 95%;
}

.room-title {
  font-family: "Mukta", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: rgb(204, 204, 204);
  padding: 0 16px;
  font-size: 28px;
  text-align: center;
  margin-bottom: 40px;

  @media (min-width: 520px) {
    font-size: 30px;
  }
}
.room-name {
  font-family: "Grandstander", cursive;
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

  @media (min-width: 768px) {
    width: 50%;
  }
}
.player-display-table h3 {
  font-family: "Mukta", sans-serif;
  margin-bottom: 40px;
  font-size: 24px;
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
  background: rgb(255, 144, 16);
  width: 100%;
  text-align: center;
}
.player-nickname span {
  color: #0e0e0e;
  font-family: "Mukta", sans-serif;
  font-weight: 600;
}
</style>
