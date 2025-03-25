<script setup lang="ts">
const { designPanelOpen } = storeToRefs(useLayoutStore());

const menuItems = ref([
  {
    label: 'Form',
    items: [
      {
        label: 'New',
        icon: 'pi pi-plus',
      },
      {
        label: 'Search',
        icon: 'pi pi-search',
      },
    ],
  },
  {
    label: 'Profile',
    items: [
      {
        label: 'Settings',
        icon: 'pi pi-cog',
      },
      {
        label: 'Logout',
        icon: 'pi pi-sign-out',
      },
    ],
  },
]);
</script>

<template>
  <aside>
    <div id="sidebar-header">
      <h2>PrimeVue</h2>
      <h4>Theme designer</h4>
    </div>
    <section class="menu-container">
      <a class="menu-item" @click="designPanelOpen = !designPanelOpen">
        <Avatar icon="pi pi-palette" shape="square" outlined />
        Theme designer
      </a>
      <li class="menu-item">
        <Avatar icon="pi pi-compass" shape="square" outlined />
        Components
      </li>
    </section>

    <Menu :model="menuItems" />
  </aside>
</template>

<style scoped>
aside {
  width: 300px;
  display: flex;
  flex-direction: column;
  padding: 1rem;

  #sidebar-header {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-top: 0.5rem;
    margin-bottom: 2rem;
  }

  .menu-container {
    list-style: none;
    padding: 0;
    margin: 0;
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    .menu-item {
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 0.75rem;
      font-weight: 600;
    }
  }
}
</style>
