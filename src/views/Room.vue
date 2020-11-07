<template>
  <div class="room-container" v-if="$store.state.roomInfos">
    <div class="room-infos"></div>
    <span style="color:white"
      >Bienvenue dans la room : {{ $store.state.roomInfos.name }}</span
    ><br />
    <span style="color:white">Room ID : {{ $store.state.roomInfos.id }}</span>
    <br />
    <span style="color:white"
      >Room Pw : {{ $store.state.roomInfos.password }}</span
    >
    <br />
    <span style="color:white"
      >Room Owner : {{ $store.state.roomInfos.owner }}</span
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      roomName: this.$route.params.roomName,
    };
  },
  methods: {
    fetchRoomInfos() {
      this.$store.dispatch("fetchRoomInfos", this.roomName);
    },
  },
  created() {
    this.fetchRoomInfos();
  },
};
</script>

<style></style>
