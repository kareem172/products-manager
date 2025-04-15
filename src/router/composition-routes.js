export default {
  path: "/composition",
  name: "CompositionApi",
  children: [
    {
      path: "",
      name: "CompositionHome",
      component: () => import("@/pages/Composition.vue"),
    },
    {
      path: "add-edit-product",
      children: [
        {
          path: "",
          name: "AddCompositionProduct",
          component: () => import("@/pages/AddEditCompositionPage.vue"),
        },
        {
          path: ":id",
          name: "EditCompositionProduct",
          component: () => import("@/pages/AddEditCompositionPage.vue"),
        },
      ],
    },
  ],
};
