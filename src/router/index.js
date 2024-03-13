import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import HardverView from "../views/Hardver.vue";
import productDetailsview from "../views/productDetailsview.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/hardver",
      name: "hardver",
      component: HardverView,
    },
    // {
    //   path: "/product/:ProductNumber",
    //   name: "hardver",
    //   component: productDetailsview,
    // },
  ],
});

export default router;
