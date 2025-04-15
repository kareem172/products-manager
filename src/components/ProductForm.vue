<template>
  <form @submit.prevent="submit">
    <div class="form-group">
      <label for="title">Title</label>
      <input type="text" id="title" v-model="formdata.title" />
    </div>
    <div class="form-group">
      <label for="price">Price</label>
      <input type="number" id="price" v-model="formdata.price" />
    </div>
    <div class="form-group span-2">
      <label for="thumbnail">Thumbnail link</label>
      <input type="text" id="thumbnail" v-model="formdata.thumbnail" />
    </div>
    <div class="form-group span-2">
      <label for="description">Description</label>
      <textarea id="description" v-model="formdata.description"></textarea>
    </div>
    <div class="form-group">
      <label for="category">Category</label>
      <select id="category" v-model="formdata.category">
        <option value="" disabled selected>Select Category</option>
        <option value="beauty">Beauty</option>
        <option value="Fashion">Fashion</option>
        <option value="furniture">Furniture</option>
        <option value="fragrances">Fragrances</option>
        <option value="books">Books</option>
        <option value="toys & games">Toys & Games</option>
        <option value="groceries">groceries</option>
        <option value="automotive">Automotive</option>
        <option value="health & household">Health & Household</option>
      </select>
    </div>
    <div class="form-group">
      <label for="stock">Stock</label>
      <input type="number" id="stock" v-model="formdata.stock" />
    </div>
    <div class="form-group">
      <label for="brand">Brand</label>
      <input type="text" id="brand" v-model="formdata.brand" />
    </div>
    <div class="form-group">
      <label for="tags">Tags</label>
      <input
        type="text"
        id="tags"
        v-model="formdata.tags"
        placeholder="ex: men, women, shirt"
      />
    </div>
    <div class="form-group">
      <label for="shippingInformation">Shipping Information</label>
      <input
        type="text"
        id="shippingInformation"
        v-model="formdata.shippingInformation"
      />
    </div>
    <div class="form-group">
      <label for="warrantyInformation">Warranty Information</label>
      <input
        type="text"
        id="warrantyInformation"
        v-model="formdata.warrantyInformation"
      />
    </div>
    <div class="form-group">
      <label for="availabilityStatus">Availability Status</label>
      <select id="availabilityStatus" v-model="formdata.availabilityStatus">
        <option value="" disabled selected>Select Availability Status</option>
        <option value="Low Stock">Low Stock</option>
        <option value="In Stock">In Stock</option>
        <option value="Out Of Stock">Out Of Stock</option>
      </select>
    </div>
    <div class="form-btns">
      <button
        v-if="productId"
        type="button"
        @click="handleDelete(productId)"
        class="danger"
      >
        <Trash />
      </button>
      <button type="button" @click="cancel" class="outlined">Cancel</button>
      <button type="reset" class="outlined">Reset</button>
      <button type="submit">Submit</button>
    </div>
  </form>
</template>

<script>
import { Trash } from "lucide-vue-next";
export default {
  name: "ProductForm",
  emits: ["submit", "delete"],
  props: ["product"],
  components: {
    Trash,
  },

  data() {
    return {
      productId: "",
      formdata: {
        title: "",
        price: "",
        thumbnail: "",
        description: "",
        category: "",
        stock: "",
        brand: "",
        tags: "",
        shippingInformation: "",
        warrantyInformation: "",
        availabilityStatus: "",
      },
    };
  },
  watch: {
    product: {
      handler(newVal) {
        if (newVal) {
          this.formdata = {
            ...newVal,
            tags: newVal.tags.join(","),
          };
          this.productId = newVal.id;
        }
      },
      immediate: true,
    },
  },
  mounted() {
    if (this.product)
      this.formdata = {
        ...this.product,
        tags: this.product.tags.join(","),
      };
  },
  methods: {
    cancel() {
      this.$router.back();
    },
    submit() {
      console.log("Form : ", this.formdata);
      this.$emit("submit", this.formdata);
      this.formdata = {
        title: "",
        price: "",
        thumbnail: "",
        description: "",
        category: "",
        stock: "",
        brand: "",
        tags: [],
        shippingInformation: "",
        warrantyInformation: "",
        availabilityStatus: "",
      };
    },
    handleDelete(productId) {
      this.$emit("delete", productId);
    },
  },
};
</script>

<style scoped>
form {
  margin-top: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}
input[type="text"],
input[type="number"],
textarea,
select {
  border-radius: var(--border-radius);
  background-color: transparent;
  border: 2px solid var(--secondary-color);
  padding: 0.5rem;
  width: 100%;
  font-size: 1rem;
  color: var(--foreground-color);
}
option {
  background-color: var(--background-color);
  color: var(--foreground-color);
}

.span-2 {
  grid-column: span 2;
  @media screen and (max-width: 768px) {
    grid-column: span 1;
  }
}

.form-group {
  margin-bottom: 1rem;
  display: grid;
  gap: 0.5rem;
}
.form-btns {
  place-self: end;
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  justify-content: end;
}
</style>
