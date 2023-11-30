export type Store = State & Actions

export interface State {
  isAdded: boolean
  color: string | null
}

/* eslint no-unused-vars: 0 */
interface Actions {
  add: VoidFunction
  remove: VoidFunction
  setColor: (color: string) => void
  reset: VoidFunction
}
