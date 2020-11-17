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
      console.log("payload:", payload);
      context.commit("setPlayer", payload);
    },
  },
  modules: {},
});
