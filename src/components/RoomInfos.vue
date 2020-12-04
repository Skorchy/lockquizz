<template>
  <div class="room-infos-container">
    <div class="room-infos" @click="CopyToClipboard()">
      <span
        ><b>Room</b> : <em>{{ roomInfos.name }}</em></span
      >
      <span
        ><b>MDP</b> : <em>{{ roomInfos.password }}</em></span
      >
      <span
        ><b>Owner</b> : <em>{{ roomInfos.owner }}</em></span
      >
    </div>
    <span class="copy-tooltip" v-if="copySucceed">
      Copié !
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      copySucceed: false,
    };
  },
  props: {
    roomInfos: {
      type: Object,
      required: true,
    },
  },
  methods: {
    CopyToClipboard() {
      const roomInfos = this.roomInfos.name + ' / ' + this.roomInfos.password;

      navigator.clipboard.writeText(roomInfos).then(() => {
        this.copySucceed = true;
        setTimeout(() => {
          this.copySucceed = false;
        }, 2000);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.room-infos-container {
  position: relative;
  cursor: pointer;
  margin-bottom: 50px;
}
.room-infos {
  padding: 5px 0;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-family: 'Varela Round', sans-serif;
  background: #050505;
  border: 1px solid rgb(255, 255, 255);
  color: rgb(202, 201, 201);
  opacity: 0.8;
  font-size: 12px;
}
.copy-tooltip {
  width: 100px;
  text-align: center;
  padding: 8px 0;
  position: absolute;
  background-color: #ff9010;
  color: #0e0e0e;
  font-weight: bold;
  font-family: 'Grandstander', cursive;
  border-radius: 3px;
  left: calc(50% - 50px);
  top: 33px;
}
.copy-tooltip::after {
  content: '';
  height: 8px;
  width: 8px;
  position: absolute;
  background: #ff9010;
  transform: rotate(45deg);
  left: 46px;
  top: -4px;
  z-index: -1;
}
</style>
