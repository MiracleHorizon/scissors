import type { Color } from 'sharp'

import type { ExtendOptions, ExtendWith } from '@server/Sharp'

export type Store = ExtendOptions & Computed & Actions

interface Computed {
  isEmpty: () => boolean
  getExtendOptions: () => ExtendOptions | null
}

/* eslint no-unused-vars: 0 */
interface Actions {
  setLeft: (left: number) => void
  setTop: (top: number) => void
  setRight: (right: number) => void
  setBottom: (bottom: number) => void
  setBackground: (background: Color) => void
  setExtendWith: (extendWith: ExtendWith) => void

  reset: VoidFunction
  resetLeft: VoidFunction
  resetRight: VoidFunction
  resetTop: VoidFunction
  resetBottom: VoidFunction
}
