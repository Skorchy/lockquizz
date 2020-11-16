<template>
  <div class="room-waiting">
    <h1 class="room-title">
      <span>Bienvenue dans la salle </span>
      <span>
        <i style="color:white">
          " <b class="room-name">{{ $store.state.roomInfos.name }}</b> "</i
        >
      </span>
    </h1>
    <div class="player-display-table">
      <div
        class="player-display"
        v-for="player in players"
        :key="player.playerNickname"
      >
        <div class="player-avatar-container">
          <img class="player-avatar" src="../assets/pikachu.png" />
        </div>
        <span class="player-nickname">{{ player.playerNickname }}</span>
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
};
</script>

<style lang="scss" scoped>
.room-waiting {
  background: #0e0e0e;
  border: 1px solid rgb(255, 255, 255);
  color: rgb(202, 201, 201);
  width: 95%;
  margin: auto;
  box-sizing: border-box;
}

.room-title {
  font-family: "Grandstander", cursive;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: rgb(204, 204, 204);
  padding: 0 16px;
  font-size: 24px;
  text-align: center;
  margin-bottom: 50px;

  @media (min-width: 520px) {
    font-size: 30px;
  }
}
.room-name {
  color: rgb(255, 144, 16);
}

.player-display {
  border: 1px solid #464646;
  width: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
  border-radius: 5px;
  -webkit-box-shadow: 4px 3px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 4px 3px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 4px 3px 5px 0px rgba(0, 0, 0, 0.75);
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
  border-bottom: 1px solid #464646;
}
.player-display-table {
  display: flex;
  box-sizing: border-box;
  max-width: 100%;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
.player-nickname {
}
</style>
