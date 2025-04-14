<template>
  <main class="container">
    <h1>{{ productId ? "Edit" : "Add" }} Product <span>Options</span></h1>
    <ProductForm @submit="handleSubmit" @delete="handleDelete" />
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
    };
  },

  mounted() {
    this.productId = this.getId();
    console.log("Product ID main:", this.productId);
  },

  methods: {
    handleSubmit(formData) {
      console.log("Form submitted!");
      if (this.productId) {
        this.updateProducts(this.productId, formData)
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
</style>
