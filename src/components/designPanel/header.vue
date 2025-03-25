<script setup lang="ts">
const step = defineModel({ required: true })
</script>

<template>
  <header class="flex gap-2 items-center">
    <Button
      icon="pi pi-chevron-left"
      class="p-button-text"
      severity="contrast"
      @click="step = 'choose'"
    />
    <h2 class="font-semibold text-2xl">Create Theme</h2>
  </header>
</template>
