<template>
  <div class="modal-container">
    <div class="modal-content">
      <div class="modal-success" v-if="type == 'success'">
        <owner-modal
          v-if="$store.state.playerInfos.role == 'owner'"
          :quizNames="quizNames"
        ></owner-modal>
        <player-modal
          v-if="$store.state.playerInfos.role == 'player'"
        ></player-modal>
      </div>
      <div class="modal-error" v-if="type == 'error'">
        <span>Une erreur est survenue !</span>
      </div>
    </div>
  </div>
</template>

<script>
import OwnerModal from './OwnerModal.vue';
import PlayerModal from './PlayerModal.vue';

export default {
  components: { OwnerModal, PlayerModal },
  props: {
    type: {
      type: String,
    },
    quizNames: {
      type: Array,
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
  min-width: 310px;
  border-radius: 8px;
  background: #0e0e0e;
  transform: translate(-50%, -50%);

  @media (min-width: 520px) {
    width: 500px;
  }
}
</style>
