<template>
  <div :class="isDarkMode && 'dark'">
    <NavBar />
    <router-view></router-view>
  </div>
</template>

<script>
import { mapState } from "vuex";
import NavBar from "./components/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar,
  },
  computed: {
    ...mapState(["isDarkMode"]),
  },
};
</script>

<style>
:root {
  --primary-color: hsl(211, 66%, 21%);
  --primary-color-pressed: hsl(211, 66%, 18%);
  --secondary-color: hsl(30, 20%, 79%);
  --secondary-color-pressed: hsl(30, 20%, 60%);
  --background-color: #f1efec;
  --foreground-color: #030303;
  --white-color: #fff;
  --black-color: #000;
  --secondary-background-color: #ccc;
  --gray-color: #333;
  --font-size: 16px;
  --font-family: sans-serif;
  --border-radius: 0.25rem;
  --border-radius-lg: 0.4rem;
  --box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
}
.dark {
  --secondary-color: hsl(211, 66%, 16%);
  --secondary-color-pressed: hsl(211, 66%, 14%);
  --primary-color-pressed: hsl(30, 20%, 79%);
  --primary-color: hsl(30, 20%, 60%);
  --background-color: hsl(211, 66%, 8%);
  --foreground-color: #f1efec;
  --secondary-background-color: hsl(211, 66%, 11%);
  --gray-color: #e7e7e7;
}
body {
  min-height: 100dvh;
  max-width: 100dvw;
}
#app,
#app > div {
  min-height: 100dvh;
  max-width: 100dvw;
  display: flex;
  flex-direction: column;
  background-color: var(--background-color);
  color: var(--foreground-color);
}

.container {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0.75rem 2rem;
  @media (max-width: 600px) {
    padding: 0 0.5rem;
  }
}
button,
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: var(--primary-color);
  color: var(--white-color);
  padding: 0.7rem 1.2rem;
  border: none;
  border-radius: var(--border-radius);
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
  &:hover {
    background-color: var(--primary-color-pressed);
  }
  &.outlined {
    background-color: transparent;
    color: var(--primary-color);
    border: 1px solid var(--primary-color);
    &:hover {
      background-color: var(--primary-color-pressed);
      color: var(--white-color);
    }
  }

  &.icon {
    background-color: transparent;
    color: var(--primary-color);
    padding: 0.75rem;
    border-radius: 50%;
    text-transform: uppercase;
    cursor: pointer;
    & * {
      stroke-width: 0.15rem;
    }
    &:hover {
      color: var(--primary-color-pressed);
    }
  }
  &.secondary {
    background-color: var(--secondary-color);
    color: var(--foreground-color);
    &:hover {
      background-color: var(--secondary-color-pressed);
    }
  }
  &.small {
    padding: 0.25rem;
    font-size: 1rem;
    & * {
      stroke-width: 0.1rem;
    }
  }
  &.danger {
    background-color: hsl(10, 100%, 40%);
    color: var(--white-color);
    &:hover {
      background-color: hsl(10, 100%, 30%);
    }
  }
}
a {
  text-decoration: none;
}

.flex-1 {
  flex: 1;
}
</style>
