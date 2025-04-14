<template>
  <main class="container flex-1">
    <header>
      <h1>All Products <span>(COMPOSITION API)</span></h1>
      <RouterLink to="composition/add-edit-product" class="btn small">
        <PlusCircle size="20" />
        <span>Add product</span>
      </RouterLink>
    </header>
    <section>
      <div class="products">
        <ProductCard
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
      </div>
    </section>
  </main>
</template>

<script>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import { PlusCircle } from "lucide-vue-next";
import ProductCard from "@/components/ProductCard.vue";
export default {
  name: "TaskOptions",
  components: {
    PlusCircle,
    ProductCard,
  },
  setup() {
    const store = useStore();
    onMounted(() => {
      store.dispatch("SET_ALL_PRODUCTS");
    });

    return { products: computed(() => store.state.products) };
  },
};
</script>

<style scoped>
main {
  padding-top: 2rem;
}
header {
  display: flex;
  justify-content: space-between;
}
h1 {
  font-size: 2rem;
}
h1 span {
  font-size: 0.75rem;
  color: var(--primary-color);
}
.products {
  margin-top: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  gap: 1rem;
}
</style>
