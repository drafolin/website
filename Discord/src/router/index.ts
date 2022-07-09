import { createRouter, createWebHistory } from "vue-router";
import MainView from "@/views/MainView.vue";
import BotsView from "@/views/BotsView.vue";
import FonctionnalitiesView from "@/views/FonctionnalitiesView.vue";
import InterfaceView from "@/views/InterfaceView.vue";
import StatsView from "@/views/StatsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { el: to.hash };
    }
  },
  routes: [
    {
      path: "/",
      name: "home",
      component: MainView,
    },
    {
      path: "/bots",
      name: "bots",
      component: BotsView,
    },
    {
      path: "/fonctionnalites",
      name: "fonctionnalites",
      component: FonctionnalitiesView,
    },
    {
      path: "/interface",
      name: "interface",
      component: InterfaceView,
    },
    {
      path: "/statistiques",
      name: "statistiques",
      component: StatsView,
    },
  ],
});

export default router;
