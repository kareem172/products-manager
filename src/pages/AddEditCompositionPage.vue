<template>
  <main class="container">
    <h1>{{ productID ? "Edit" : "Add" }} Product <span>COMPOSITION</span></h1>
    <ProductForm
      :product="productID ? product : undefined"
      @submit="handleSubmit"
      @delete="handleDelete"
    />
  </main>
</template>

<script>
import ProductForm from "@/components/ProductForm.vue";
import { computed, onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
export default {
  name: "AddEditOptionsPage",
  components: {
    ProductForm,
  },
  setup() {
    const store = useStore();
    const productID = ref("");
    const route = useRoute();
    const router = useRouter();
    onMounted(() => {
      productID.value = route.params?.id;
      console.log(productID.value);
      if (productID.value)
        store.dispatch("SET_PRODUCT_BY_ID", route.params?.id);
    });
    function handleDelete(productId) {
      store.dispatch("DELETE_PRODUCT", productId);
      router.back();
    }
    function handleSubmit(formData) {
      console.log("page", formData);
      if (productID.value) {
        store.dispatch("UPDATE_PRODUCT", {
          id: productID.value,
          updatedProduct: formData,
        });
      } else store.dispatch("ADD_PRODUCT", formData);
      router.back();
    }
    return {
      productID,
      product: computed(() => store.state.selectedProduct),
      handleDelete,
      handleSubmit,
    };
  },
};
</script>

<style scoped>
h1 {
  span {
    color: var(--primary-color);
    font-weight: 600;
    font-size: 0.75rem;
  }
}
main {
  padding-top: 2rem;
  padding-bottom: 2rem;
}
</style>
