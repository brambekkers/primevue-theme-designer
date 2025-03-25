<script setup lang="ts">
import { RouterView } from 'vue-router';
import Sidebar from '@/components/layout/sidebar.vue';
import Navbar from '@/components/layout/navbar.vue';
import DesignPanel from '@/components/designPanel.vue';
</script>

<template>
  <div id="layout-container">
    <Sidebar />
    <main>
      <Navbar />
      <RouterView />
    </main>
    <DesignPanel />
  </div>
</template>

<style scoped>
#layout-container {
  display: flex;
  height: 100dvh;
  overflow: hidden;
  max-width: 1800px;
  margin: auto;

  main {
    flex: 1;
    overflow: auto;
  }
}
</style>
