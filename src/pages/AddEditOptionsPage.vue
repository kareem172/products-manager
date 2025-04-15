<template>
  <main class="container">
    <h1>{{ productId ? "Edit" : "Add" }} Product <span>Options</span></h1>
    <ProductForm
      :product="productId ? product : undefined"
      @submit="handleSubmit"
      @delete="handleDelete"
    />
  </main>
</template>

<script>
import ProductForm from "@/components/ProductForm.vue";
import productMixin from "@/mixins/productsMixin.js";
export default {
  name: "AddEditOptionsPage",
  mixins: [productMixin],
  components: {
    ProductForm,
  },
  data() {
    return {
      productId: "",
      product: null,
    };
  },

  async mounted() {
    this.productId = this.getId();
    console.log("Product ID main:", this.productId);
    if (this.productId) {
      this.product = await this.getProductById(this.productId);
      console.log("Product:", this.product);
    }
  },

  methods: {
    handleSubmit(formData) {
      console.log("Form submitted!");
      if (this.productId) {
        this.updateProduct(this.productId, formData)
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.error(err);
          });
      } else {
        this.addProduct(formData)
          .then(() => {
            console.log("Product added successfully!");
            this.$router.back();
          })
          .catch((error) => {
            console.error("Error adding product:", error);
          });
      }
      this.$router.back();
    },
    handleDelete(productId) {
      console.log("Delete product with ID:", productId);
      this.deleteProduct(productId)
        .then(() => {
          console.log("Product deleted successfully!");
          this.$router.back();
        })
        .catch((error) => {
          console.error("Error deleting product:", error);
        });
      this.$router.back();
    },
    getId() {
      return this.$route.params?.id;
    },
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
