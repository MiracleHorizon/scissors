import type { ConvertSettings } from '@scissors/sharp'

export type Label = keyof ConvertSettings

export interface Setting {
  label: Label
  checked: boolean
}
