<script setup lang="ts">
import EditGrid from './EditGrid.vue';
import { useRouter } from 'vue-router';
const { selectedTheme } = storeToRefs(useThemeStore());
const router = useRouter();

const componentName = computed(() => router.currentRoute.value.name);
</script>

<template>
  <div v-if="selectedTheme && componentName">
    <h2 class="text-xl font-semibold !mt-2">{{ componentName }}</h2>
    <Fieldset legend="Common" :toggleable="true" pt:legend="!capitalize">
      <template v-for="(_, key) in selectedTheme.preset.components[componentName.toLowerCase()]">
        <section v-if="key !== 'colorScheme'" class="!mb-6">
          <h3 class="text-lg !mb-2 font-semibold capitalize">{{ key }}</h3>
          <EditGrid v-model="selectedTheme.preset.components[componentName.toLowerCase()][key]" :title="key" />
        </section>
        <!-- add colorScheme -->

        <Divider />
      </template>
    </Fieldset>
  </div>
</template>
