<template>
  <div class="room" v-if="$store.state.roomInfos">
    <room-infos :roomInfos="$store.state.roomInfos" />
    <div class="room-waiting">
      <waiting
        :roomName="$store.state.roomInfos.name"
        :players="$store.state.roomInfos.players"
      />
    </div>
  </div>
</template>

<script>
import RoomInfos from "../components/RoomInfos";
import Waiting from "../components/Waiting";

import { client } from "../services/contentfulHelper";
import get from "lodash/get";

export default {
  data() {
    return {
      roomName: this.$route.params.roomName,
      quizQuestions: [],
    };
  },
  components: {
    RoomInfos,
    Waiting,
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

<style lang="scss" scoped>
.room-waiting {
  background: #0e0e0e;
  border: 1px solid rgb(255, 255, 255);
  margin: auto;
  box-sizing: border-box;
}

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
