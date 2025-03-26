<script setup lang="ts">
import EditGrid from './EditGrid.vue';
import PrimeColorPicker from './PrimeColorPicker.vue';
const { selectedTheme } = storeToRefs(useThemeStore());

const colors = [
  'emerald',
  'green',
  'lime',
  'red',
  'orange',
  'amber',
  'yellow',
  'teal',
  'cyan',
  'sky',
  'blue',
  'indigo',
  'violet',
  'purple',
  'fuchsia',
  'pink',
  'rose',
  'slate',
  'gray',
  'zinc',
  'neutral',
  'stone',
];
</script>

<template>
  <div v-if="selectedTheme">
    <!-- Border radius / rounded -->

    <Fieldset legend="Rounded" :toggleable="true" class="!mb-4">
      <EditGrid v-model="selectedTheme.preset.primitive.borderRadius" />
    </Fieldset>

    <!-- Colors -->
    <Fieldset legend="Colors" :toggleable="true" pt:content="!flex flex-col gap-4">
      <PrimeColorPicker v-for="color of colors" :key="color" :color="color" />
    </Fieldset>
  </div>
</template>
