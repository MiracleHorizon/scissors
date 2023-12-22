import type { GammaOptions } from '@server/Sharp'

export type Store = State & Actions

interface State {
  isAdded: boolean
  gamma: GammaOptions | null
}

/* eslint no-unused-vars: 0 */
interface Actions {
  add: VoidFunction
  remove: VoidFunction
  reset: VoidFunction
  setValue: (value: number) => void
}
