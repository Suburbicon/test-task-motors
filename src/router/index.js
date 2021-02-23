import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Favourite from "../views/Favourite.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/favourite",
    name: "Favourite",
    component: Favourite
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
