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
          component: () => import("@/pages/AddEditOptionsPage.vue"),
        },
        {
          path: ":id",
          name: "EditCompositionProduct",
          component: () => import("@/pages/AddEditOptionsPage.vue"),
        },
      ],
    },
  ],
};
