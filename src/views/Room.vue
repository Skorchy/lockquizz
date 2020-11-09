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

    <div v-for="question in quizQuestions" :key="question.question">
      <img :src="question.imgUrl" v-if="question.imgUrl" />
      <audio
        autoplay
        controls
        :src="question.audioUrl"
        v-if="question.audioUrl"
      />
      <p
        class="question"
        :class="[
          {
            easy: question.difficulty === 'easy',
            medium: question.difficulty === 'medium',
            hard: question.difficulty === 'hard',
          },
        ]"
        style="color:white"
      >
        {{ question.question }}
      </p>
    </div>
  </div>
</template>

<script>
import { client } from "../services/contentfulHelper";
import get from "lodash/get";

export default {
  data() {
    return {
      roomName: this.$route.params.roomName,
      quizQuestions: [],
    };
  },
  methods: {
    fetchRoomInfos() {
      this.$store.dispatch("fetchRoomInfos", this.roomName);
    },
    async fetchQuizData() {
      const entries = await client.getEntries();
      console.log("entries items =>", entries.items);

      this.quizQuestions = entries.items.map((question) => {
        return {
          question: question.fields.title,
          difficulty: question.fields.difficulty,
          imgUrl: get(question, "fields.image.fields.file.url"),
          audioUrl: get(question, "fields.audio.fields.file.url"),
        };
      });
    },
  },

  created() {
    this.fetchRoomInfos();
    this.fetchQuizData();
  },
};
</script>

<style>
.question {
  border: 1px dashed white;
}
.easy {
  border-color: green;
}
.medium {
  border-color: orange;
}
.hard {
  border-color: red;
}
</style>
