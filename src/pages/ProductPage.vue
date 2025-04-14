<template>
  <main class="container">
    <ProductDisplay :product="product" />
  </main>
</template>

<script>
import ProductDisplay from "@/components/ProductDisplay.vue";
import productsMixin from "@/mixins/productsMixin";
export default {
  name: "ProductPage",
  mixins: [productsMixin],
  components: {
    ProductDisplay,
  },
  data() {
    return {
      product: {},
      productId: "",
    };
  },
  async mounted() {
    this.productId = this.$route.params.productId;
    if (this.productId)
      this.product = await this.getProductById(this.productId);
  },
};
</script>

<style scoped></style>
