import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import ApiTest from "../views/test/Api.vue";
import CSSTest from "../views/test/CSS.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/test/css",
      name: "css",
      component: CSSTest,
    },
    {
      path: "/test/api",
      name: "api",
      component: ApiTest,
    },
  ],
});

export default router;
