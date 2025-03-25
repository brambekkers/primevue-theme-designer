<script setup lang="ts">
import Header from '@/components/designPanel/header.vue'
import Themes from '@/components/designPanel/themes.vue'
import Create from '@/components/designPanel/create.vue'
import Edit from '@/components/designPanel/edit.vue'

const { selectedTheme } = storeToRefs(useThemeStore())
const { designPanelOpen } = storeToRefs(useLayoutStore())
const mainTab = ref('themes')
const step = ref('choose')
</script>
<template>
  <Drawer
    id="design-panel"
    v-model:visible="designPanelOpen"
    header="Theme Designer"
    position="right"
    pt:content="!px-0"
    style="width: 670px"
  >
    <template v-if="step !== 'choose'" #header>
      <Header v-model="step" />
    </template>
    <Tabs :value="mainTab">
      <TabList>
        <Tab value="themes">Themes</Tab>
        <Tab value="edit" :disabled="!selectedTheme">Edit</Tab>
      </TabList>
      <TabPanels class="!p-0">
        <TabPanel value="themes" class="!px-6">
          <Stepper :value="step">
            <StepPanels class="!px-0 !py-6">
              <StepPanel value="choose">
                <Themes v-model="step" />
              </StepPanel>
              <StepPanel value="create">
                <Create v-model="step" />
              </StepPanel>
            </StepPanels>
          </Stepper>
        </TabPanel>
        <TabPanel value="edit">
          <Edit />
        </TabPanel>
      </TabPanels>
    </Tabs>
  </Drawer>
</template>
