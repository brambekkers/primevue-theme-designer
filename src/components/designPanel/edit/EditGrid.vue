<script lang="ts" setup>
const { title = '' } = defineProps<{ title?: string }>();
const item = defineModel<any>({ required: true });
</script>

<template>
  <FloatLabel v-if="typeof item === 'string'" variant="on">
    <InputText id="on_label" v-model="item" class="!max-w-full" />
    <label for="on_label">{{ title }}</label>
  </FloatLabel>
  <div v-else-if="typeof item === 'object'" class="!grid grid-cols-4 gap-4">
    <template v-for="(_, key) in item" :key>
      <FloatLabel v-if="typeof item[key] === 'string'" variant="on">
        <InputText id="on_label" v-model="item[key]" class="!max-w-full" />
        <label for="on_label">{{ key }}</label>
      </FloatLabel>

      <div v-else-if="typeof item[key] === 'object'" class="!col-span-4">
        <h3 class="text-base !mb-2 font-semibold capitalized">{{ title }} {{ key }}</h3>
        <EditGrid v-model="item[key]" :title="key" />
      </div>
    </template>
  </div>
</template>
