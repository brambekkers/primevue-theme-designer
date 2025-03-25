<script setup lang="ts">
const step = defineModel({ required: true })
const themeStore = useThemeStore()

const { themes } = storeToRefs(themeStore)
</script>

<template>
  <section>
    <h3 class="text-lg font-semibold">My Themes</h3>
    <p class="!mb-4">Continue editing your existing themes or build a new one.</p>
    <div class="flex flex-wrap items-center gap-2">
      <Avatar
        v-for="theme of themes"
        :key="theme.id"
        :label="theme.name.slice(0, 5)"
        icon="pi pi-plus"
        size="xlarge"
        class="!font-normal !text-base hover:!font-medium opacity-70 !bg-transparent border !w-28 !h-28 hover:!opacity-100"
        @click="themeStore.selectTheme(theme.id)"
      />
      <Avatar
        icon="pi pi-plus"
        class="!font-normal hover:!font-medium !w-28 !h-28 !bg-transparent border !opacity-70"
        @click="step = 'create'"
      />
    </div>
  </section>
</template>
