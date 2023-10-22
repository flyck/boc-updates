<!-- DarkModeToggle.vue -->
<template>
  <div>
<div id="dark-mode-toggle-5" ref="darkModeToggle" class="dark-mode-toggle slider"></div>
  </div>
</template>

<script>
// https://github.com/GoogleChromeLabs/dark-mode-toggle dark mode from google
import { DarkModeToggle } from "dark-mode-toggle";

export default {
  mounted() {
    const toggle = new DarkModeToggle();
    const body = document.body;

toggle.class="slider"
toggle.id="dark-mode-toggle-5"
toggle.permanent=true
    toggle.appearance='toggle'
    toggle.mode === 'dark'
      ? body.classList.add('dark')
      : body.classList.remove('dark');

    toggle.addEventListener('colorschemechange', () => {
      body.classList.toggle('dark', toggle.mode === 'dark');
    });

    // Append the toggle element to the component's template
    this.$refs.darkModeToggle.appendChild(toggle);
  },
};
</script>

<style scoped>
:root {
  --heading-color: red;
  --duration: 0.5s;
  --timing: ease;
}

*,
::before,
::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  transition:
    color var(--duration) var(--timing),
    background-color var(--duration) var(--timing);
  font-family: sans-serif;
  font-size: 12pt;
  background-color: var(--background-color);
  color: var(--text-color);
  display: flex;
  justify-content: center;
}

main {
  margin: 1rem;
  max-width: 30rem;
  position: relative;
}

h1 {
  color: var(--heading-color);
  text-shadow: 0.1rem 0.1rem 0.1rem var(--shadow-color);
  transition: text-shadow var(--duration) var(--timing);
}

img {
  max-width: 100%;
  height: auto;
  transition: filter var(--duration) var(--timing);
}

p {
  line-height: 1.5;
  word-wrap: break-word;
  overflow-wrap: break-word;
  hyphens: auto;
}

fieldset {
  border: solid 0.1rem;
  box-shadow: 0.1rem 0.1rem 0.1rem var(--shadow-color);
  transition: box-shadow var(--duration) var(--timing);
}

div {
  padding: 0.5rem;
}


</style>
