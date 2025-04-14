import { createStore } from "vuex";

const store = createStore({
  state: {
    isDarkMode: false,
  },
  mutations: {
    toggleDarkMode(state) {
      state.isDarkMode = !state.isDarkMode;
    },
  },
  actions: {
    TOGGLE_DARK_MOOD({ commit }) {
      commit("toggleDarkMode");
    },
  },
});

export default store;
