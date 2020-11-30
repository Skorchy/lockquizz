import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

import { db } from "../services/firebaseServices";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState({ key: "quiz" })],
  state: {
    playerInfos: {
      name: "",
      role: "",
      isReady: false,
    },
    roomInfos: null,
  },

  mutations: {
    setRoomInfos(state, payload) {
      state.roomInfos = payload;
    },
    setPlayer(state, payload) {
      state.playerInfos.name = payload.name;
      state.playerInfos.role = payload.role;
      state.playerInfos.isReady = payload.isReady;
    },
    setReady(state) {
      state.playerInfos.isReady = true;
    },
    setGameLaunched(state) {
      state.roomInfos.gameLaunched = true;
    },
  },

  actions: {
    async fetchRoomInfos(context, payload) {
      const roomName = payload;

      db.collection("rooms")
        .doc(roomName)
        .onSnapshot((roomSnapshot) => {
          const roomInfos = roomSnapshot.data();

          context.commit("setRoomInfos", roomInfos);
        });
    },
    setPlayer(context, payload) {
      context.commit("setPlayer", payload);
    },
    async setReady(context, payload) {
      const playerNickname = payload.playerNickname;
      const roomName = payload.roomName;

      await db
        .collection("rooms")
        .doc(roomName)
        .update({
          ["players." + playerNickname + ".playerIsReady"]: true,
        });

      context.commit("setReady");
    },
    async launchGame(context, payload) {
      const roomName = payload.roomName;

      await db
        .collection("rooms")
        .doc(roomName)
        .update({
          gameLaunched: true,
        });

      context.commit("setGameLaunched");
    },
  },
  modules: {},
});
