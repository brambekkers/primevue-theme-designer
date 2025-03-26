<script setup lang="ts">
import EditGrid from './EditGrid.vue';

const { selectedTheme } = storeToRefs(useThemeStore());
</script>

<template>
  <div v-if="selectedTheme">
    <template v-for="(_, key) in selectedTheme.preset.semantic" :key>
      <Fieldset v-if="key !== 'colorScheme'" :legend="key" :toggleable="true" class="!mb-4">
        <EditGrid v-model="selectedTheme.preset.semantic[key]" :title="key" />
      </Fieldset>
      <!-- add Colorscheme -->
    </template>
  </div>
</template>
