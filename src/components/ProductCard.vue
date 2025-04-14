<template>
  <div class="product">
    <header>
      <img :src="product.thumbnail" alt="product image" />
    </header>
    <main>
      <h3>{{ product.title }}</h3>
      <div class="product-data">
        <span class="brand">{{ product.category }}</span>
        <span class="stock"> {{ product.stock }} left</span>
      </div>
      <div class="product-details">
        <span class="price">{{ formatCurrency(product.price) }}</span>
        <span>
          <Star fill="#FF9529" stroke="#FF9529" size="16" />
          <span>{{ product.rating }}</span>
        </span>
      </div>
    </main>
    <footer>
      <router-link :to="`/product/${product.id}`" class="btn"
        >See more</router-link
      >
      <router-link
        :to="$route.path + `/add-edit-product/${product.id}`"
        class="btn outlined"
        append
        >Edit
      </router-link>
    </footer>
  </div>
</template>

<script>
import { Star } from "lucide-vue-next";
import { formatCurrency } from "@/utils/formatters.js";
export default {
  name: "ProductCard",
  props: ["product"],
  components: {
    Star,
  },
  setup() {
    return { formatCurrency };
  },
};
</script>
<style scoped>
img {
  width: 100%;
  aspect-ratio: 1;
  object-fit: fill;
  border-radius: 0.5rem;
  max-width: 500px;
  background-color: var(--secondary-background-color);
}
span {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: var(--gray-color);
}
main {
  display: grid;
  gap: 0.5rem;
}
footer {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
  margin-top: 0.5rem;
}
.product {
  border-radius: 0.5rem;
  display: grid;
}
.product-data {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  font-size: 0.8rem;
}
.product-details {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.price {
  color: var(--primary-color);
  font-size: 1.5rem;
  font-weight: bold;
}
</style>
