<template>
  <div class="timer">
    <span class="timer-display" ref="timer-display" style="color:white">{{
      remainingTime
    }}</span>
    <button type="button" @click="decrementTimer">GO</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timestamp: 0,
    };
  },
  props: {
    duration: {
      type: Number,
      required: true,
    },
  },
  computed: {
    remainingTime() {
      const time = this.duration - this.timestamp;
      if (time <= 0) {
        return 0;
      }
      return time;
    },
  },
  methods: {
    decrementTimer() {
      this.timestamp++;
    },
    initializeTimer() {
      setInterval(this.decrementTimer, 1000);
    },
  },
  mounted() {
    this.initializeTimer();
  },
};
</script>

<style></style>
