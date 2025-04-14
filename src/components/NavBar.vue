<template>
  <nav>
    <div class="container">
      <div class="logo">Logo</div>
      <ul class="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/options">options API</a></li>
        <li><a href="/composition">composition api</a></li>
      </ul>
      <div class="buttons">
        <button class="icon" @click="toggleMood()">
          <Moon v-if="!isDarkMode" size="28" />
          <Sun v-if="isDarkMode" size="28" />
        </button>
        <button class="outlined">Login</button>
        <button>Sign Up</button>
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
  }
}

.buttons {
  display: flex;
  align-items: center;
  gap: 1rem;
}
</style>
