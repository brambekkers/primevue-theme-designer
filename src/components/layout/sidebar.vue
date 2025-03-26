<script setup lang="ts">
import MenuItem from './MenuItem.vue';
import { useRouter } from 'vue-router';

const { designPanelOpen } = storeToRefs(useLayoutStore());
const router = useRouter();
const showComponentMenu = ref(true);
const menuItems = ref([
  {
    label: 'Form',
    items: [
      'AutoComplete',
      'CascadeSelect',
      'Checkbox',
      'ColorPicker',
      'DatePicker',
      'Editor',
      'FloatLabel',
      'IconField',
      'IftaLabel',
      'InputGroup',
      'InputMask',
      'InputNumber',
      'InputOtp',
      'InputText',
      'KeyFilter',
      'Knob',
      'Listbox',
      'MultiSelect',
      'Password',
      'RadioButton',
      'Rating',
      'Select',
      'SelectButton',
      'Slider',
      'TextArea',
      'ToggleButton',
      'ToggleSwitch',
      'TreeSelect',
    ],
  },
  {
    label: 'Button',
    items: ['Button', 'SplitButton', 'SplitButton'],
  },
]);
</script>

<template>
  <aside class="w-[300px] flex flex-col !p-4">
    <div class="flex flex-col items-center gap-1 !mb-8">
      <h2 class="text-2xl font-semibold">PrimeVue</h2>
      <h4 class="text-xl font-light">Theme designer</h4>
    </div>
    <section class="flex flex-col gap-4 overflow-y-auto">
      <MenuItem icon="pi pi-palette" label="Theme designer" @click="designPanelOpen = !designPanelOpen" />
      <MenuItem icon="pi pi-compass" label="Components" :is-collapsed="showComponentMenu" @toggle-collapse="showComponentMenu = !showComponentMenu" />
      <Menu v-if="showComponentMenu" :model="menuItems" class="!bg-transparent !border-none !py-0 !-mt-4">
        <template #item="{ item, props }">
          <a
            v-ripple
            class="flex items-center !border-s border-[#ddd] hover:border-emerald-900 opacity-70"
            v-bind="props.action"
            @click="router.push(`/${item.toLowerCase()}`)"
          >
            {{ item }}
          </a>
        </template>
      </Menu>
    </section>
  </aside>
</template>

<style scoped></style>
