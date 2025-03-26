<script lang="ts" setup>
defineProps<{
  title?: string;
  subtitle?: string;
  displayClass?: string;
}>();
</script>

<template>
  <section class="!mb-8">
    <h1 v-if="title" class="text-2xl font-semibold !mb-2">{{ title }}</h1>
    <p v-if="subtitle" class="!mb-4">{{ subtitle }}</p>
    <div class="bg-white dark:bg-surface-900 border border-slate-200 dark:border-transparent rounded-xl !mb-4 !p-8" :class="displayClass">
      <slot />
    </div>
  </section>
</template>
