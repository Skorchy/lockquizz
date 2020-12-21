<template>
  <div class="timer">
    <div class="timer-display">
      <span class="timer-text">{{ remainingTime }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timeBuffer: 0,
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
      const time = this.duration - this.timeBuffer;
      if (time <= 0) {
        return '00';
      }
      if (time < 10) {
        return '0' + time;
      }
      return time;
    },
    time() {
      return this.duration - this.timeBuffer;
    },
  },
  methods: {
    decrementTimer() {
      this.timeBuffer++;
    },
    initializeTimer() {
      setInterval(this.decrementTimer, 1000);
    },
    resetTimer() {
      this.timeBuffer = 0;
    },
  },
  mounted() {
    this.initializeTimer();
  },
};
</script>

<style lang="scss" scoped>
.timer {
  margin: 10px;
}
.timer-text {
  font-size: 24px;
  z-index: 2;
  font-weight: 800;
  font-family: 'Black Ops One', cursive;
}
.timer-display {
  border: 1px solid white;
  border-radius: 5px;
  color: #ff9010;
  text-shadow: 0 0 15px rgba(255, 255, 255, 0.5),
    0 0 10px rgba(255, 255, 255, 0.5);
  z-index: 0;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
}

.timer-display::before {
  content: '';
  height: 60px;
  width: 60px;
  background: #0e0e0e;
  position: absolute;
}
.timer-display::after {
  content: '';
  height: 60px;
  width: 60px;
  background: white;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  animation: translateBox 21s linear;
}
@keyframes translateBox {
  0% {
    transform: translateY(0);
  }
  25% {
    transform: translateY(20px);
  }
  75% {
    transform: translateY(40px);
  }
  100% {
    transform: translateY(60px);
  }
}
</style>
