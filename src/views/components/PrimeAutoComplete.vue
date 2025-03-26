<template>
  <div>
    <h1 class="text-3xl font-semibold !mb-3">AutoComplete</h1>
    <p class="!mb-8">AutoComplete is an input component that provides real-time suggestions when being typed.</p>
    <DisplayCard title="Basic">
      <AutoComplete v-model="value" :suggestions="items" />
    </DisplayCard>
    <DisplayCard title="Dropdown">
      <AutoComplete v-model="value" dropdown :suggestions="items" />
    </DisplayCard>

    <DisplayCard title="Float Label" display-class="flex gap-4">
      <FloatLabel>
        <AutoComplete v-model="value" inputId="over_label" :suggestions="items" />
        <label for="over_label">Over Label</label>
      </FloatLabel>

      <FloatLabel variant="in">
        <AutoComplete v-model="value" inputId="in_label" :suggestions="items" variant="filled" />
        <label for="in_label">In Label</label>
      </FloatLabel>

      <FloatLabel variant="on">
        <AutoComplete v-model="value" inputId="on_label" :suggestions="items" s />
        <label for="on_label">On Label</label>
      </FloatLabel>
    </DisplayCard>
  </div>
</template>

<script setup lang="ts">
import DisplayCard from '@/components/components/displayCard.vue';

const value = ref('');
const items = ref(['a', 'b', 'c', 'd', 'e']);
</script>
