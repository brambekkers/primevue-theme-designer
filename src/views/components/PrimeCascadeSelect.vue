<template>
  <div>
    <h1 class="text-3xl font-semibold !mb-3">CascadeSelect</h1>
    <p class="!mb-8">CascadeSelect is a form component to select a value from a nested structure of options.</p>
    <DisplayCard title="Basic">
      <CascadeSelect
        v-model="selectedCity"
        :options="countries"
        optionLabel="cname"
        optionGroupLabel="name"
        :optionGroupChildren="['states', 'cities']"
        class="w-56"
        placeholder="Select a City"
      />
    </DisplayCard>
  </div>
</template>

<script setup lang="ts">
import DisplayCard from '@/components/components/displayCard.vue';

const selectedCity = ref();
const countries = ref([
  {
    name: 'Australia',
    code: 'AU',
    states: [
      {
        name: 'New South Wales',
        cities: [
          { cname: 'Sydney', code: 'A-SY' },
          { cname: 'Newcastle', code: 'A-NE' },
          { cname: 'Wollongong', code: 'A-WO' },
        ],
      },
      {
        name: 'Queensland',
        cities: [
          { cname: 'Brisbane', code: 'A-BR' },
          { cname: 'Townsville', code: 'A-TO' },
        ],
      },
    ],
  },
  {
    name: 'Canada',
    code: 'CA',
    states: [
      {
        name: 'Quebec',
        cities: [
          { cname: 'Montreal', code: 'C-MO' },
          { cname: 'Quebec City', code: 'C-QU' },
        ],
      },
      {
        name: 'Ontario',
        cities: [
          { cname: 'Ottawa', code: 'C-OT' },
          { cname: 'Toronto', code: 'C-TO' },
        ],
      },
    ],
  },
  {
    name: 'United States',
    code: 'US',
    states: [
      {
        name: 'California',
        cities: [
          { cname: 'Los Angeles', code: 'US-LA' },
          { cname: 'San Diego', code: 'US-SD' },
          { cname: 'San Francisco', code: 'US-SF' },
        ],
      },
      {
        name: 'Florida',
        cities: [
          { cname: 'Jacksonville', code: 'US-JA' },
          { cname: 'Miami', code: 'US-MI' },
          { cname: 'Tampa', code: 'US-TA' },
          { cname: 'Orlando', code: 'US-OR' },
        ],
      },
      {
        name: 'Texas',
        cities: [
          { cname: 'Austin', code: 'US-AU' },
          { cname: 'Dallas', code: 'US-DA' },
          { cname: 'Houston', code: 'US-HO' },
        ],
      },
    ],
  },
]);
</script>
