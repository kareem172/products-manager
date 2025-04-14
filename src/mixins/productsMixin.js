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
      return res.data;
    },
    async getTop5Products() {
      const res = await axios.get("http://localhost:3001/products?_limit=5");
      return res.data;
    },
  },
};
