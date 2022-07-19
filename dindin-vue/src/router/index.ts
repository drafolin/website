import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PageNotFoundView from "../views/404View.vue";
import CvView from "../views/ResumeView.vue";
import FrCvView from "../views/CvView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/cv",
      name: "cv",
      component: CvView,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "404",
      component: PageNotFoundView,
    },
  ],
});

export default router;
