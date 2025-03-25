<script setup lang="ts">
const step = defineModel({ required: true })

const themeName = ref('')
const baseOption = ref('Aura')
const options = ref(['Aura', 'Lara', 'Nora', 'Material'])

const themeStore = useThemeStore()

const addTheme = () => {
  themeStore.addTheme(themeName.value, baseOption.value)
  step.value = 'choose'
  themeName.value = ''
}
</script>

<template>
  <section>
    <!-- Name -->
    <div class="!mb-6">
      <h3 class="text-lg font-semibold">Theme Name</h3>
      <InputText v-model="themeName" placeholder="Enter a name" />
    </div>

    <!-- Foundation -->
    <div>
      <h3 class="text-lg font-semibold">Foundation</h3>
      <p class="!mb-4 opacity-70">
        Start by choosing a built-in theme as a foundation, or import your own design by uploading a
        tokens.json file that you created before.
      </p>

      <div
        class="bg-gray-50 dark:!bg-gray-950 border-gray-200 dark:!border-gray-850 rounded-xl border !p-4"
      >
        <h4 class="font-semibold">
          <i class="pi pi-prime text-lg !me-1" />
          Base Theme
        </h4>
        <p class="!mb-4 opacity-70">Variety of built-in themes with distinct characteristics.</p>
        <div class="flex item-center justify-between">
          <SelectButton
            v-model="baseOption"
            :options="options"
            severity="contrast"
            :allow-empty="false"
          />
          <Button label="Create" severity="contrast" :disabled="!themeName" @click="addTheme" />
        </div>
      </div>
    </div>
  </section>
</template>
