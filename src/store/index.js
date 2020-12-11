import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import get from 'lodash/get';
import { db } from '../services/firebaseServices';
Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState({ key: 'quiz' })],
  state: {
    playerInfos: {
      name: '',
      role: '',
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
      state.roomInfos.modal.openModal = false;
      state.roomInfos.modal.modalType = '';
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
    setGameInitiated(state) {
      state.roomInfos.gameInitiated = true;
    },
    setupQuiz(state, payload) {
      state.roomInfos.quizName = payload.quizName;
      state.roomInfos.gameInitializationFinished = true;
      state.roomInfos.questions = payload.questions;
    },
  },

  actions: {
    async fetchRoomInfos(context, payload) {
      const roomName = payload;

      db.collection('rooms')
        .doc(roomName)
        .onSnapshot((roomSnapshot) => {
          const roomInfos = roomSnapshot.data();

          context.commit('setRoomInfos', roomInfos);
        });
    },
    setPlayer(context, payload) {
      context.commit('setPlayer', payload);
    },
    async setReady(context, payload) {
      const playerNickname = payload.playerNickname;
      const roomName = payload.roomName;

      await db
        .collection('rooms')
        .doc(roomName)
        .update({
          ['players.' + playerNickname + '.playerIsReady']: true,
        });

      context.commit('setReady');
    },
    async launchGame(context, payload) {
      const roomName = payload.roomName;

      await db
        .collection('rooms')
        .doc(roomName)
        .update({
          gameInitiated: true,
        });

      context.commit('setGameInitiated');
    },
    async openModal(context, payload) {
      const roomName = payload.roomName;
      const modalType = payload.modalType;

      await db
        .collection('rooms')
        .doc(roomName)
        .update({
          modal: {
            openModal: true,
            modalType: modalType,
          },
        });
      context.commit('openModal', modalType);
    },
    async closeModal(context, payload) {
      const roomName = payload.roomName;

      await db
        .collection('rooms')
        .doc(roomName)
        .update({
          modal: {
            openModal: false,
            modalType: '',
          },
        });

      context.commit('closeModal');
    },
    async setupQuiz(context, payload) {
      const roomName = payload.roomName;
      const quizName = payload.quizName;

      const questions = payload.questions.map((question) => {
        return {
          question: question.fields.title,
          difficulty: question.fields.difficulty,
          imgUrl: get(question, 'fields.image.fields.file.url', null),
          audioUrl: get(question, 'fields.audio.fields.file.url', null),
        };
      });

      await db
        .collection('rooms')
        .doc(roomName)
        .update({
          quizName: quizName,
          gameInitializationFinished: true,
          questions: questions,
        });

      context.commit('setupQuiz', { quizName: quizName, questions: questions });
      context.commit('closeModal');
    },
  },
  modules: {},
});
