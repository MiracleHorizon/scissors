import type { ModulateOptions } from '@libs/Sharp'

export type Store = State & Computed & Actions

export interface State extends ModulateOptions {
  isAdded: boolean
}

interface Computed {
  getModulateOptions: () => ModulateOptions | null
}

/* eslint no-unused-vars: 0 */
interface Actions {
  add: VoidFunction
  remove: VoidFunction

  setLightness: (value: number) => void
  setBrightness: (value: number) => void
  setSaturation: (value: number) => void
  setHue: (value: number) => void

  reset: VoidFunction
}
