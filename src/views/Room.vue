<template>
  <div class="room" v-if="$store.state.roomInfos">
    <room-infos :roomInfos="$store.state.roomInfos" />
    <div
      class="room-waiting"
      v-if="!$store.state.roomInfos.gameInitializationFinished"
    >
      <waiting
        v-if="$store.state.roomInfos"
        :roomName="$store.state.roomInfos.name"
        :players="$store.state.roomInfos.players"
        :quizNames="quizNames"
      />
    </div>
    <div class="quiz" v-if="$store.state.roomInfos.gameInitializationFinished">
      <quiz></quiz>
    </div>
  </div>
</template>

<script>
import RoomInfos from '../components/RoomInfos';
import Waiting from '../components/Waiting';
import Quiz from '../components/Quiz';

import { client } from '@/services/contentfulHelper';

export default {
  data() {
    return {
      roomName: this.$route.params.roomName,
      quizQuestions: [],
      quizNames: [],
    };
  },
  components: {
    RoomInfos,
    Waiting,
    Quiz,
  },
  methods: {
    fetchRoomInfos() {
      this.$store.dispatch('fetchRoomInfos', this.roomName);
    },

    async fetchQuizNames() {
      const entries = await client.getEntries({
        content_type: 'quiz',
      });

      for (const questionName of entries.items) {
        this.quizNames.push(questionName.fields.title);
      }
    },
  },

  created() {
    this.fetchRoomInfos();
    this.fetchQuizNames();
  },
};
</script>

<style lang="scss" scoped>
.room-waiting {
  background: #050505;
  border: 1px solid rgb(255, 255, 255);
  margin: auto;
  padding-bottom: 50px;
  box-sizing: border-box;
  border-radius: 5px;
  width: 95%;
}

.room {
  margin-bottom: 50px;
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
