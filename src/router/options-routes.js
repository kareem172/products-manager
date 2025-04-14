export default {
  path: "/options",
  name: "OptionsApi",
  children: [
    {
      path: "",
      name: "OptionsHome",
      component: () => import("@/pages/Options.vue"),
    },
    {
      path: "add-edit-product",
      children: [
        {
          path: "",
          name: "AddOptionsProduct",
          component: () => import("@/pages/AddEditOptionsPage.vue"),
        },
        {
          path: ":id",
          name: "EditOptionsProduct",
          component: () => import("@/pages/AddEditOptionsPage.vue"),
        },
      ],
    },
  ],
};
