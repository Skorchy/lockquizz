<template>
  <div class="room-container">
    <div class="room-infos"></div>
    <span style="color:white">Bienvenue dans la room : {{ roomName }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      roomName: this.$route.params.roomName,
    };
  },
  created() {
    //fetch room infos
  },
};
</script>

<style></style>
