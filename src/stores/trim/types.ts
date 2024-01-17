import type { TrimOptions } from '@server/sharp'

export type Store = TrimOptions & Computed & Action

export type State = TrimOptions

interface Computed {
  getTrimOptions: () => TrimOptions | null
}

/* eslint-disable no-unused-vars */
interface Action {
  setBackground: (background: string | null) => void
  setThreshold: (threshold: number | null) => void
  // sharp v0.33.2
  // toggleLineArt: VoidFunction

  reset: VoidFunction
}
