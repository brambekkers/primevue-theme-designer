import type { Preset } from '@primeuix/themes/types'
import { usePreset } from '@primeuix/themes'

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
  const selectedTheme = ref<string | null>(null)

  const addTheme = (name: string, base: 'Aura' | 'Lara' | 'Nora' | 'Material') => {
    const preset =
      base === 'Aura' ? Aura : base === 'Lara' ? Lara : base === 'Nora' ? Nora : Material
    const newTheme = {
      name: name,
      id: uniqueId('theme-'),
      preset: JSON.parse(JSON.stringify(preset)),
    }

    themes.value.push(newTheme)
    selectTheme(newTheme.id)
  }

  const selectTheme = (id: string) => {
    const theme = themes.value.find((t) => t.id === id)
    if (!theme) return
    selectedTheme.value = theme.id
    usePreset(theme.preset)
  }

  return {
    themes,
    addTheme,
    selectTheme,
  }
})
