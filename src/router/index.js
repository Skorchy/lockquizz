import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Game from "../views/Game.vue";
import WaitingRoom from "../views/WaitingRoom.vue";
import Room from "../views/Room.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/game",
    name: "Game",
    component: Game,
  },
  {
    path: "/waiting",
    name: "WaitingRoom",
    component: WaitingRoom,
  },
  {
    path: "/room/:roomName",
    name: "Room",
    component: Room,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
