<script setup lang="ts">
import Header from '@/components/designPanel/header.vue'
import Themes from '@/components/designPanel/themes.vue'
import Create from '@/components/designPanel/create.vue'

const { designPanelOpen } = storeToRefs(useLayoutStore())
const step = ref('choose')
</script>
<template>
  <Drawer
    id="design-panel"
    v-model:visible="designPanelOpen"
    header="Theme Designer"
    position="right"
    style="width: 670px"
  >
    <template v-if="step !== 'choose'" #header>
      <Header v-model="step" />
    </template>

    <Stepper :value="step">
      <StepPanels class="!px-0">
        <StepPanel value="choose">
          <Themes v-model="step" />
        </StepPanel>
        <StepPanel value="create">
          <Create v-model="step" />
        </StepPanel>
      </StepPanels>
    </Stepper>
  </Drawer>
</template>
