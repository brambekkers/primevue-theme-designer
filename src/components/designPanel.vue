<script setup lang="ts">
const themeStore = useThemeStore();

const { designPanelOpen } = storeToRefs(useLayoutStore());
const { themes } = storeToRefs(themeStore);
const step = ref('choose');
const themeName = ref('');
const baseOption = ref('Aura');
const options = ref(['Aura', 'Lara', 'Nora', 'Material']);

const addTheme = () => {
  themeStore.addTheme(themeName.value, baseOption.value);
  step.value = 'choose';
  themeName.value = '';
};
</script>
<template>
  <Drawer id="design-panel" v-model:visible="designPanelOpen" header="Theme Designer" position="right" style="width: 670px">
    <template v-if="step !== 'choose'" #header>
      <header>
        <Button icon="pi pi-chevron-left" class="p-button-text" severity="contrast" @click="step = 'choose'" />
        <h2>Create Theme</h2>
      </header>
    </template>
    <Stepper :value="step">
      <StepPanels>
        <StepPanel value="choose">
          <section id="themes">
            <h3>My Themes</h3>
            <p class="subtitle">Continue editing your existing themes or build a new one.</p>
            <div class="theme-container">
              <Avatar v-for="theme of themes" :key="theme.id" :label="theme.name.slice(0, 5)" icon="pi pi-plus" size="xlarge" />
              <Avatar icon="pi pi-plus" @click="step = 'name'" style="opacity: 1" />
            </div>
          </section>
        </StepPanel>
        <StepPanel value="name">
          <div class="flex flex-col h-48">
            <div
              class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium"
            >
              <section id="naming">
                <h3 class="title">Theme Name</h3>
                <InputText v-model="themeName" placeholder="Enter a name" />
              </section>

              <section id="foundation">
                <h3 class="title">Foundation</h3>
                <p class="subtitle">
                  Start by choosing a built-in theme as a foundation, or import your own design by uploading a tokens.json file created with the Prime UI Kit
                  and Tokens Studio.
                </p>
                <div class="base-container">
                  <h4>Base Theme</h4>
                  <p class="subtitle">Variety of built-in themes with distinct characteristics.</p>
                  <div class="base-select">
                    <SelectButton v-model="baseOption" :options="options" severity="contrast" :allow-empty="false" />
                    <Button label="Create" severity="contrast" :disabled="!themeName" @click="addTheme" />
                  </div>
                </div>
              </section>
            </div>
          </div>
        </StepPanel>
      </StepPanels>
    </Stepper>
  </Drawer>
</template>

<style scoped>
#design-panel {
  header {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    h2 {
      font-size: 1.5rem;
      font-weight: 600;
    }
  }
  .title {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  .subtitle {
    margin-bottom: 1rem;
    opacity: 0.7;
  }
  #themes {
    .theme-container {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 0.5rem;

      .p-avatar {
        font-weight: 400;
        background: transparent;
        font-size: 1rem;
        border: 1px solid #222;
        margin: 0.5rem;
        margin: 0;
        width: 100px;
        height: 100px;
        border-radius: 0.5rem;
        opacity: 0.7;

        transition: all 0.2s ease-in-out;

        &:hover {
          cursor: pointer;
          opacity: 1;

          font-weight: 500;
        }
      }
    }
  }

  #naming {
    margin-bottom: 2rem;
  }

  #foundation {
    .base-container {
      border: #ccc 1px solid;
      border-radius: 0.75rem;
      padding: 1rem;

      .base-select {
        display: flex;
        gap: 1rem;
        align-items: center;
        justify-content: space-between;
      }
    }
  }
}
</style>
