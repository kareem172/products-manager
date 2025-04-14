import { createRouter, createWebHistory } from "vue-router";
import optionsRoutes from "./options-routes";
import compositionRoutes from "./composition-routes";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/pages/Home.vue"),
  },
  {
    path: "/product/:productId",
    name: "Product",
    component: () => import("@/pages/ProductPage.vue"),
  },
  optionsRoutes,
  compositionRoutes,
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
