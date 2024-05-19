import type { ConvertSettings } from '@scissors/sharp'

export type Label = keyof ConvertSettings
export type Setting = {
  label: Label
  checked: boolean
}
