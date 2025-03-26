<script setup lang="ts">
import Primitive from './edit/Primitive.vue';
import Semantic from './edit/Semantic.vue';
import Components from './edit/Components.vue';

const { selectedTheme } = storeToRefs(useThemeStore());

const tab = ref('primitive');
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
        <Primitive />
      </TabPanel>
      <TabPanel value="semantic">
        <Semantic />
      </TabPanel>
      <TabPanel value="components">
        <Components />
      </TabPanel>
      <TabPanel value="custom">
        <p class="m-0">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
          veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
          consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
        </p>
      </TabPanel>
    </TabPanels>
  </Tabs>
</template>
