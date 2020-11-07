import Vue from "vue";
import Vuex from "vuex";
import { db } from "../services/firebaseServices";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    roomInfos: null,
  },

  mutations: {
    setRoomInfos(state, payload) {
      state.roomInfos = payload;
    },
  },

  actions: {
    async fetchRoomInfos(context, payload) {
      const roomName = payload;

      const roomSnapshot = await db
        .collection("rooms")
        .doc(roomName)
        .get();

      if (roomSnapshot.exists) {
        const roomInfos = roomSnapshot.data();

        context.commit("setRoomInfos", roomInfos);
      }
    },
  },
  modules: {},
});
