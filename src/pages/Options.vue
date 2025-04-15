<template>
  <main class="container flex-1">
    <header>
      <h1>All Products <span>(OPTIONS API)</span></h1>
      <RouterLink to="options/add-edit-product" class="btn small">
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
import { PlusCircle } from "lucide-vue-next";
import productsMixin from "@/mixins/productsMixin";
import ProductCard from "@/components/ProductCard.vue";
export default {
  name: "TaskOptions",
  mixins: [productsMixin],
  components: {
    PlusCircle,
    ProductCard,
  },

  async mounted() {
    await this.getAllProducts();
  },

  methods: {},
};
</script>

<style scoped>
main {
  padding-top: 2rem;
}
header {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
  a {
    margin-left: auto;
  }
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
