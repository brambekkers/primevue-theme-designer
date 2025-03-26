<script setup lang="ts">
defineEmits(['toggleCollapse']);
defineProps<{
  icon: string;
  label: string;
  isCollapsed?: Boolean | undefined;
}>();
</script>
<template>
  <a class="font-semibold flex gap-3 items-center cursor-pointer">
    <Avatar :icon shape="square" outlined class="!bg-transparent border border-[#ccc]" />
    {{ label }}
    <a v-if="typeof isCollapsed === 'boolean'" class="!ms-auto" @click="$emit('toggleCollapse')">
      <i :class="isCollapsed ? 'pi pi-angle-up' : 'pi pi-angle-down'" />
    </a>
  </a>
</template>
