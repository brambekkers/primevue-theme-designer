<script lang="ts" setup>
const search = ref('');
const isDarkMode = ref(false);
const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  document.documentElement.classList.toggle('app-dark');
};
</script>

<template>
  <header>
    <InputText v-model="search" placeholder="Search..." />
    <Button :icon="isDarkMode ? 'pi pi-moon' : 'pi pi-sun'" plain @click="toggleDarkMode()" />
  </header>
</template>

<style scoped>
header {
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
  gap: 1rem;
}
</style>
