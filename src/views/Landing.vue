<script setup lang="ts">
import { usePreset } from '@primeuix/themes';

import Aura from '@primeuix/themes/aura';
import Lara from '@primeuix/themes/lara';
import Nora from '@primeuix/themes/nora';
import Material from '@primeuix/themes/material';

const themes = [Aura, Lara, Nora, Material];
const currentThemeIndex = ref(0);

const onButtonClick = () => {
  const newIndex = (currentThemeIndex.value + 1) % themes.length;
  currentThemeIndex.value = newIndex;

  usePreset(themes[newIndex]);
};
</script>

<template>
  <section>
    <Button label="test" @click="onButtonClick" />
  </section>

  <InputText />
</template>
