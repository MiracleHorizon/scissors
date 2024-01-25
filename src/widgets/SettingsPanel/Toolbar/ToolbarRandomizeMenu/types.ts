import type { ConvertSettings } from '@server/sharp'

export type Label = keyof ConvertSettings
export type Setting = {
  label: Label
  checked: boolean
}
