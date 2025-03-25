<script setup lang="ts">
const { color } = defineProps<{
  color:
    | 'emerald'
    | 'green'
    | 'lime'
    | 'red'
    | 'orange'
    | 'amber'
    | 'yellow'
    | 'teal'
    | 'cyan'
    | 'sky'
    | 'blue'
    | 'indigo'
    | 'violet'
    | 'purple'
    | 'fuchsia'
    | 'pink'
    | 'rose'
    | 'slate'
    | 'gray'
    | 'zinc'
    | 'neutral'
    | 'stone'
}>()

const { selectedTheme } = storeToRefs(useThemeStore())
const weights = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]
const newColor = ref(selectedTheme.value.preset?.primitive[color][400])

const updateColor = (newColor: string) => {
  const newColors = generateColorScale(`#${newColor}`)
  selectedTheme.value.preset.primitive[color] = newColors
}
</script>

<template>
  <section class="flex justify-between gap-16">
    <p class="capitalize font-medium min-w-16">{{ color }}</p>
    <div class="flex gap-10 flex-1">
      <ColorPicker v-model="newColor" format="hex" @update:modelValue="updateColor" />
      <div class="flex flex-wrap border border-gray-100 !rounded-md !overflow-hidden flex-1">
        <div
          v-for="weight of weights"
          :key="weight"
          class="!h-6 flex-1"
          :style="`background: ${selectedTheme.preset.primitive[color][weight]}`"
        />
      </div>
    </div>
  </section>
</template>
