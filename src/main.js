import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import store from "../store";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/pages/Home.vue"),
  },
  {
    path: "/options",
    name: "OptionsApi",
    component: () => import("@/pages/Options.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
createApp(App).use(router).use(store).mount("#app");
