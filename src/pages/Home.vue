<template>
  <main class="flex-1">
    <div class="container flex-1">
      <aside>
        <h1>Hey you, Welcome to our store</h1>
        <h3>Explore owr top products</h3>
        <p>This is the home for every thing you wish for.</p>
        <div>
          <router-link class="btn" to="/options">See all products</router-link>
        </div>
      </aside>
      <div class="top-products">
        <div class="product-list" ref="productList">
          <div class="product" v-for="product in topProducts" :key="product.id">
            <img :src="product.thumbnail" alt="Product Image" />
            <div class="product-details">
              <h3>{{ product.title }}</h3>
              <p>Price: ${{ product.price }}</p>
              <router-link class="btn" :to="`/products/${product.id}`">
                See more
              </router-link>
            </div>
          </div>
        </div>
        <div class="indicators">
          <span
            v-for="(product, index) in topProducts"
            :key="product.id"
            :class="{ active: index === currentIndex }"
            @click="handleClick(index)"
          ></span>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import axios from "axios";

export default {
  name: "HomePage",
  data() {
    return {
      currentIndex: 0,
      timer: null,
      topProducts: [],
    };
  },
  async created() {
    this.topProducts = await this.getRandomProducts();
  },

  mounted() {
    this.timer = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.topProducts.length;
      this.$refs.productList.scrollTo({
        left: this.currentIndex * this.$refs.productList.clientWidth,
        behavior: "smooth",
      });
    }, 3000);
  },
  unmounted() {
    clearInterval(this.timer);
  },

  methods: {
    async getRandomProducts() {
      const res = await axios.get("http://localhost:3001/products?_limit=5");
      const products = res.data;
      return products;
    },
    handleClick(index) {
      this.currentIndex = index;
      this.$refs.productList.scrollTo({
        left: index * this.$refs.productList.clientWidth,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style scoped>
main {
  background-image: linear-gradient(
    var(--secondary-color) 50%,
    var(--primary-color)
  );
  color: var(--foreground-color);
  display: flex;
  flex-direction: column;
}
main > div {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 1rem;
  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
}

aside {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  text-wrap-style: balance;
  gap: 1rem;
  padding: 1rem 0;
}

aside h1 {
  font-size: 2.5rem;
  font-weight: bold;
  color: var(--primary-color);
}

.top-products {
  overflow: hidden;
  padding: 1rem;
  display: grid;
  place-content: center;
}
.product-list {
  overflow: hidden;
  display: flex;
  flex-wrap: nowrap;
  text-align: center;
}
.product img {
  width: 60%;
  aspect-ratio: 1/1;
  max-width: 400px;
}

.product {
  flex-shrink: 0;
  flex-basis: 100%;
  display: flex;
}

.product-details {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 1rem;
  text-shadow: var(--secondary-color) 0.05rem 0.05rem 0.1rem;
}
.indicators {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;
}
span {
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
  border: 1px solid var(--foreground-color);
  background-color: transparent;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}
span.active {
  background-color: var(--primary-color);
}
</style>
