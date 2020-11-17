<template>
  <div class="wr-container">
    <quiz-title class="wr-title" />
    <div class="wr-pannel">
      <div class="tabs">
        <button
          class="tab"
          :class="{ 'tab--active': activeTab === 'join' }"
          type="button"
          @click="setActiveTab('join')"
        >
          <svg
            class="wr-tab-svg"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M10 9.408l2.963 2.592-2.963 2.592v-1.592h-8v-2h8v-1.592zm-2-4.408v4h-8v6h8v4l8-7-8-7zm6-3c-1.787 0-3.46.474-4.911 1.295l.228.2 1.396 1.221c1.004-.456 2.114-.716 3.287-.716 4.411 0 8 3.589 8 8s-3.589 8-8 8c-1.173 0-2.283-.26-3.288-.715l-1.396 1.221-.228.2c1.452.82 3.125 1.294 4.912 1.294 5.522 0 10-4.477 10-10s-4.478-10-10-10z"
            />
          </svg>
          <span> Rejoindre une salle</span>
        </button>
        <button
          class="tab"
          :class="{ 'tab--active': activeTab === 'create' }"
          type="button"
          @click="setActiveTab('create')"
        >
          <svg
            class="wr-tab-svg"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z"
            />
          </svg>
          <span>Créer une salle</span>
        </button>
      </div>
      <div class="wr-inputs">
        <div class="wr-join" v-if="activeTab === 'join'"><join-a-room /></div>
        <div class="wr-create" v-if="activeTab === 'create'">
          <create-a-room />
        </div>
      </div>
    </div>
    <div class="wr-display"></div>
  </div>
</template>

<script>
import QuizTitle from "@/components/QuizTitle.vue";
import CreateARoom from "@/components/CreateARoom.vue";
import JoinARoom from "@/components/JoinARoom.vue";
export default {
  name: "WaitingRoom",
  data() {
    return {
      activeTab: "join",
    };
  },
  components: {
    QuizTitle,
    CreateARoom,
    JoinARoom,
  },
  methods: {
    setActiveTab(tab) {
      this.activeTab = tab;
    },
  },
};
</script>

<style lang="scss" scoped>
.wr-container {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.wr-title {
  margin-bottom: 50px;
}
.wr-pannel {
  border: 1px solid rgb(255, 255, 255);
  background: rgb(29, 29, 29);
  color: rgb(255, 255, 255);
  width: 95%;
  -webkit-box-shadow: 4px 4px 2px 0px rgba(0, 0, 0, 1);
  -moz-box-shadow: 4px 4px 2px 0px rgba(0, 0, 0, 1);
  box-shadow: 4px 4px 2px 0px rgba(0, 0, 0, 1);
  border-radius: 8px;

  @media (min-width: 1024px) {
    width: 60%;
  }
}

.tabs {
  display: flex;
  align-items: flex;
}
.tab {
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 12px;
  background: transparent;
  border: 1px solid rgb(14, 14, 14);
  opacity: 0.85;
  color: rgb(194, 194, 194);
  cursor: pointer;
  font-weight: bold;
  font-size: 30px;
}
.tab--active {
  background: rgb(14, 14, 14);
  color: #ff9010;
}
.tab--active svg {
  fill: #ff9010;
}
.tab--active:focus {
  outline: none;
}
.wr-tab-svg {
  fill: rgb(255, 255, 255);
  margin-right: 5px;
}
.wr-inputs {
  background: rgb(14, 14, 14);
  opacity: 0.85;
}
</style>
