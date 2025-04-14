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
    children: [
      {
        path: "",
        component: () => import("@/pages/Options.vue"),
      },
      {
        path: "add-edit-product",
        name: "AddEditProduct",
        children: [
          {
            path: "",
            name: "AddProduct",
            component: () => import("@/pages/AddEditOptionsPage.vue"),
          },
          {
            path: ":id",
            name: "EditProduct",
            component: () => import("@/pages/AddEditOptionsPage.vue"),
          },
        ],
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
createApp(App).use(router).use(store).mount("#app");
