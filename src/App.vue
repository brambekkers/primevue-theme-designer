<script setup lang="ts">
import { RouterView } from 'vue-router';
import Sidebar from '@/components/layout/sidebar.vue';
import Navbar from '@/components/layout/navbar.vue';
import DesignPanel from '@/components/designPanel.vue';
</script>

<template>
  <div class="flex h-dvh overflow-hidden max-w-[1800px] !mx-auto">
    <Sidebar />
    <main class="flex-1 overflow-auto">
      <Navbar />
      <RouterView />
    </main>
    <DesignPanel />
  </div>
</template>
