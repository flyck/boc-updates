<template>
  <div id="dark-mode-toggle" ref="dark-mode-toggle">here</div>
</template>

<script>
import * as DarkModeToggle from "dark-mode-toggle";
console.log("after import")

export default {
 mounted() {
    console.log("starting mount");
const toggle = document.getElementById("dark-mode-toggle");
const body = document.body;

// Set or remove the `dark` class the first time.
toggle.mode === 'dark'
  ? body.classList.add('dark')
  : body.classList.remove('dark');

// Listen for toggle changes (which includes `prefers-color-scheme` changes)
// and toggle the `dark` class accordingly.
toggle.addEventListener('colorschemechange', () => {
  body.classList.toggle('dark', toggle.mode === 'dark');
});
    console.log("done")
  },
};
</script>

<style scoped>
/* Add any additional styles here if needed */
</style>
