<template>
  <nav>
    <div class="container">
      <div>
        <router-link to="/" class="logo">Logo</router-link>
      </div>
      <ul class="nav-links">
        <li><router-link to="/" active-class="active">Home</router-link></li>
        <li>
          <router-link active-class="active" to="/options"
            >options API</router-link
          >
        </li>
        <li>
          <router-link active-class="active" to="/composition"
            >composition api</router-link
          >
        </li>
      </ul>
      <div class="buttons">
        <button class="icon" @click="toggleMood()">
          <Moon v-if="!isDarkMode" size="28" />
          <Sun v-if="isDarkMode" size="28" />
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
import { Sun } from "lucide-vue-next";
import { Moon } from "lucide-vue-next";
import { mapState } from "vuex";

export default {
  name: "NavBar",
  components: {
    Moon,
    Sun,
  },
  computed: {
    ...mapState(["isDarkMode"]),
  },
  methods: {
    toggleMood() {
      this.$store.dispatch("TOGGLE_DARK_MOOD");
    },
  },
};
</script>

<style scoped>
nav {
  background-color: var(--secondary-color);
  color: var(--foreground-color);
}
nav > div {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}

.logo {
  font-size: 1.5rem;
  font-weight: bolder;
  color: var(--primary-color);
}

.nav-links {
  flex-grow: 1;
  list-style: none;
  display: flex;
  align-items: end;
  gap: 1.5rem;
  padding: 1rem;
  margin-left: 2rem;

  a {
    color: var(--foreground-color);
    text-decoration: none;
    font-size: 0.9rem;
    text-transform: uppercase;
    transition: color 0.2s ease-in-out;
    &:hover {
      color: var(--primary-color);
    }
    &.active {
      color: var(--primary-color);
      font-weight: bold;
    }
  }
}

.buttons {
  display: flex;
  align-items: center;
  gap: 1rem;
}
</style>
