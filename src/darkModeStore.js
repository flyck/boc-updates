import { ref, watch } from 'vue';

const localStorageKey = 'darkMode';

const darkModeStore = ref({
  mode: localStorage.getItem(localStorageKey) || 'light',
});

// roughly based on the suggestion here: https://stackoverflow.com/questions/76579547/how-to-implement-dark-light-mode-in-vue3
const useDarkModeStore = () => {
  const getMode = () => darkModeStore.value.mode;
  const setMode = (mode) => {
    darkModeStore.value.mode = mode;
    localStorage.setItem(localStorageKey, mode);
  };

  // Watch for changes and update localStorage accordingly
  watch(darkModeStore, () => {
    localStorage.setItem(localStorageKey, darkModeStore.value.mode);
  });

  return {
    mode: getMode(),
    setMode,
  };
};

export default useDarkModeStore;
