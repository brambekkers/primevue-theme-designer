<script setup lang="ts">
import PrimeColorPicker from './edit/PrimeColorPicker.vue'
const { selectedTheme } = storeToRefs(useThemeStore())

const tab = ref('primitive')
const colors = [
  'emerald',
  'green',
  'lime',
  'red',
  'orange',
  'amber',
  'yellow',
  'teal',
  'cyan',
  'sky',
  'blue',
  'indigo',
  'violet',
  'purple',
  'fuchsia',
  'pink',
  'rose',
  'slate',
  'gray',
  'zinc',
  'neutral',
  'stone',
]
</script>

<template>
  <Tabs v-if="selectedTheme" :value="tab">
    <TabList>
      <Tab value="primitive">Primitive</Tab>
      <Tab value="semantic">Semantic</Tab>
      <Tab value="components">Components</Tab>
      <Tab value="custom">Custom</Tab>
    </TabList>
    <TabPanels class="!px-6">
      <TabPanel value="primitive">
        <Fieldset legend="Rounded" :toggleable="true" pt:content="!grid grid-cols-4 gap-4">
          <FloatLabel
            v-for="(value, key) in selectedTheme.preset.primitive.borderRadius"
            :key="key"
            variant="on"
          >
            <InputText
              id="on_label"
              v-model="selectedTheme.preset.primitive.borderRadius[key]"
              class="!max-w-full"
            />
            <label for="on_label">{{ key }}</label>
          </FloatLabel>
        </Fieldset>
        <Fieldset legend="Colors" :toggleable="true" pt:content="!flex flex-col gap-4">
          <PrimeColorPicker v-for="color of colors" :key="color" :color="color" />
        </Fieldset>
      </TabPanel>
      <TabPanel value="semantic">
        {{ selectedTheme?.preset.semantic }}
      </TabPanel>
      <TabPanel value="components">
        {{ selectedTheme?.preset.components }}
      </TabPanel>
      <TabPanel value="custom">
        <p class="m-0">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
          laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
          architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
          voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
        </p>
      </TabPanel>
    </TabPanels>
  </Tabs>
</template>
