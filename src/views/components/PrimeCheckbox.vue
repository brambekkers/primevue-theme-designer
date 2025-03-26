<template>
  <div>
    <h1 class="text-3xl font-semibold !mb-3">Checkbox</h1>
    <p class="!mb-8">Checkbox is an extension to standard checkbox element with theming.</p>
    <DisplayCard title="Basic">
      <Checkbox v-model="checked" binary />
    </DisplayCard>

    <DisplayCard title="Indeterminate">
      <Checkbox v-model="checked2" indeterminate binary />
    </DisplayCard>

    <DisplayCard title="Filled">
      <Checkbox v-model="checked3" variant="filled" binary />
    </DisplayCard>

    <DisplayCard title="Sizes" display-class="flex gap-4">
      <div class="flex items-center gap-2">
        <Checkbox v-model="checked4" inputId="size_small" name="size" value="Small" size="small" />
        <label for="size_small" class="text-sm">Small</label>
      </div>
      <div class="flex items-center gap-2">
        <Checkbox v-model="checked4" inputId="size_normal" name="size" value="Normal" />
        <label for="size_normal">Normal</label>
      </div>
      <div class="flex items-center gap-2">
        <Checkbox v-model="checked4" inputId="size_large" name="size" value="Large" size="large" />
        <label for="size_large" class="text-lg">Large</label>
      </div>
    </DisplayCard>
  </div>
</template>

<script setup lang="ts">
import DisplayCard from '@/components/components/displayCard.vue';

const checked = ref(false);
const checked2 = ref(false);
const checked3 = ref(false);
const checked4 = ref(false);
</script>
