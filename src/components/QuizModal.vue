<template>
  <div class="modal-container">
    <div class="modal-content">
      <div class="modal-success" v-if="type == 'success'">
        <div
          class="modal-success-owner"
          v-if="$store.state.playerInfos.role == 'owner'"
        >
          YEY OWNER
        </div>
        <div
          class="modal-success-player"
          v-if="$store.state.playerInfos.role == 'player'"
        >
          YEY PLAYER
        </div>
      </div>
      <div class="modal-error" v-if="type == 'error'">
        <span>Une erreur est survenue !</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.modal-container {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 20;
  background: #050505f1;
  opacity: 1;
  -webkit-transition: opacity 200ms ease-in;
  -moz-transition: opacity 200ms ease-in;
  transition: opacity 200ms ease-in;
}
.modal-content {
  position: absolute;
  border: 1px solid white;
  top: 50%;
  left: 50%;
  width: 700px;
  height: 700px;
  background: white;
  transform: translate(-50%, -50%);
}
</style>
