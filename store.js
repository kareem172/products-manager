/* eslint-disable no-unused-vars */
import axios from "axios";
import { createStore } from "vuex";

const store = createStore({
  state: {
    isDarkMode: false,
    products: [],
    selectedProduct: null,
    selectedProductId: null,
  },
  mutations: {
    toggleDarkMode(state) {
      state.isDarkMode = !state.isDarkMode;
    },
    setAllProducts(state, payload) {
      state.products = payload;
    },
    setProduct(state, payload) {
      state.selectedProduct = payload;
      state.selectedProductId = payload.id;
    },
  },
  actions: {
    TOGGLE_DARK_MOOD({ commit }) {
      commit("toggleDarkMode");
    },
    async SET_ALL_PRODUCTS({ commit }) {
      const res = await axios.get("http://localhost:3001/products");

      commit("setAllProducts", res.data);
    },
    async SET_PRODUCT_BY_ID({ commit }, id) {
      const res = await axios.get(`http://localhost:3001/products/${id}`);
      commit("setProduct", res.data);
    },
    async ADD_PRODUCT({ commit }, newProduct) {
      await axios.post("http://localhost:3001/products", {
        ...newProduct,
        rating: 4.5,
        reviews: [],
      });
    },
    async UPDATE_PRODUCT({ commit }, { id, updatedProduct }) {
      await axios.patch(`http://localhost:3001/products/${id}`, updatedProduct);
    },
    async DELETE_PRODUCT({ commit }, id) {
      await axios
        .delete(`http://localhost:3001/products/${id}`)
        .catch((err) => {
          console.error(err);
        });
    },
  },
});

export default store;
