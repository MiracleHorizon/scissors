export type Store = State & Actions

export interface State {
  isAdded: boolean
  color: string | null
}

/* eslint no-unused-vars: 0 */
interface Actions {
  set: (color: string | null) => void
  add: VoidFunction
  remove: VoidFunction
  setColor: (color: string) => void
  reset: VoidFunction
}
