import type { Preset } from '@primeuix/themes/types'
import Aura from '@primeuix/themes/aura'
import Lara from '@primeuix/themes/lara'
import Nora from '@primeuix/themes/nora'
import Material from '@primeuix/themes/material'

type ThemeItem = {
  name: string
  id: string
  preset: Preset
}

export const useThemeStore = defineStore('themes', () => {
  const themes = ref<ThemeItem[]>([])

  const addTheme = (name: string, base: 'Aura' | 'Lara' | 'Nora' | 'Material') => {
    const preset =
      base === 'Aura' ? Aura : base === 'Lara' ? Lara : base === 'Nora' ? Nora : Material
    themes.value.push({
      name: name,
      id: uniqueId('theme-'),
      preset: JSON.parse(JSON.stringify(preset)),
    })
  }

  return {
    themes,

    addTheme,
  }
})
