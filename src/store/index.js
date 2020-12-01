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
    openModal(state, payload) {
      state.roomInfos.modal.openModal = true;
      state.roomInfos.modal.modalType = payload;
    },
    closeModal(state) {
      state.roomInfos.openModal = false;
      state.roomInfos.modalType = "";
    },
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
    async openModal(context, payload) {
      const roomName = payload.roomName;
      const modalType = payload.modalType;

      await db
        .collection("rooms")
        .doc(roomName)
        .update({
          modal: {
            openModal: true,
            modalType: modalType,
          },
        });
      context.commit("openModal", modalType);
    },
    async closeModal(context, payload) {
      const roomName = payload.roomName;

      await db
        .collection("rooms")
        .doc(roomName)
        .update({
          modal: {
            openModal: false,
            modalType: "",
          },
        });

      context.commit("closeModal");
    },
  },
  modules: {},
});
