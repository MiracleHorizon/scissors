import type { GammaOptions } from '@server/sharp'

export type Store = State & Actions

interface State {
  isAdded: boolean
  gamma: GammaOptions | null
}

/* eslint no-unused-vars: 0 */
interface Actions {
  set: (options: GammaOptions | null) => void
  add: VoidFunction
  remove: VoidFunction
  reset: VoidFunction
  setValue: (value: number) => void
}
