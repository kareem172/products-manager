import axios from "axios";

export default {
  data() {
    return {
      products: [],
    };
  },
  methods: {
    async getAllProducts() {
      const res = await axios.get("http://localhost:3001/products?");
      this.products = res.data;
    },
    async getProductById(id) {
      const res = await axios.get(`http://localhost:3001/products/${id}`);
      console.log(res.data);
      return res.data;
    },
    async getTop5Products() {
      const res = await axios.get("http://localhost:3001/products?_limit=5");
      return res.data;
    },
    async addProduct(product) {
      const res = await axios.post("http://localhost:3001/products", {
        ...product,
        rating: 4.5,
        reviews: [],
      });
      console.log(res.data);
      return res.data;
    },
    async updateProduct(id, product) {
      const res = await axios.patch(`http://localhost:3001/products/${id}`, {
        ...product,
      });
      console.log(res.data);
      return res.data;
    },
    async deleteProduct(id) {
      const res = await axios.delete(`http://localhost:3001/products/${id}`);
      console.log(res.data);
      return res.data;
    },
  },
};
