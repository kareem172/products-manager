<template>
  <nav>
    <div class="container">
      <div>
        <router-link to="/" class="logo">Logo</router-link>
      </div>
      <div :data-open="isNavOpen" class="small-nav">
        <button
          :disabled="!isNavOpen"
          @click="toggleNavbar"
          class="icon exit-menu"
        >
          <X size="28" />
        </button>
        <ul class="nav-links">
          <li>
            <router-link @click="closeNav" to="/" active-class="active"
              >Home</router-link
            >
          </li>
          <li>
            <router-link @click="closeNav" active-class="active" to="/options"
              >options API</router-link
            >
          </li>
          <li>
            <router-link
              @click="closeNav"
              active-class="active"
              to="/composition"
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
      <button
        :disabled="isNavOpen"
        @click="toggleNavbar"
        class="icon burger-menu"
      >
        <Menu size="28" />
      </button>
    </div>
  </nav>
</template>

<script>
import { Sun, Moon, Menu, X } from "lucide-vue-next";
import { mapState } from "vuex";

export default {
  name: "NavBar",
  components: {
    Moon,
    Sun,
    Menu,
    X,
  },
  data() {
    return {
      isNavOpen: false,
    };
  },
  computed: {
    ...mapState(["isDarkMode"]),
  },
  methods: {
    toggleMood() {
      this.$store.dispatch("TOGGLE_DARK_MOOD");
    },
    toggleNavbar() {
      this.isNavOpen = !this.isNavOpen;
    },
    closeNav() {
      this.isNavOpen = false;
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
  align-items: center;
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

.small-nav {
  flex: 1;
  display: flex;
  position: relative;
}

.burger-menu {
  display: none;
}
.exit-menu {
  display: none;
}

@media (max-width: 650px) {
  .burger-menu {
    display: inline-flex;
  }
  .exit-menu {
    display: inline-flex;
    align-self: start;
  }

  .small-nav {
    flex: 1;
    display: flex;
    flex-direction: column;
    position: fixed;
    background-color: var(--secondary-color);
    width: 90%;
    min-width: 18rem;
    max-width: 22rem;
    right: 0;
    bottom: 0;
    top: 0;
    color: var(--foreground-color);
    box-shadow: 0 0 1rem var(--foreground-color);
    border-radius: 1rem 0 0 1rem;
    transition: all 0.5s ease-in-out;
    ul {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    &[data-open="false"] {
      right: -100%;
    }
  }
}
</style>
