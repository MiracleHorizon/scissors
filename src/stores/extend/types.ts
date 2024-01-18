import type { ExtendOptions, ExtendWith } from '@server/sharp'
import type { DIRECTION_MODEL } from './store'

export type Store = State & Computed & Actions

export interface ExtendValues
  extends Omit<ExtendOptions, 'background' | 'extendWith' | 'withDominantBackground'> {
  extendValue: number | null
}

type DirectionModel = (typeof DIRECTION_MODEL)[keyof typeof DIRECTION_MODEL]

export interface State extends ExtendOptions, Pick<ExtendValues, 'extendValue'> {
  directionModel: DirectionModel
}

interface Computed {
  isEmpty: () => boolean
  isXAxisEmpty: () => boolean
  isYAxisEmpty: () => boolean

  getExtendOptions: () => ExtendOptions | null
  getMinValue: () => number | null

  getXAxis: () => number | null
  getYAxis: () => number | null
}

/* eslint no-unused-vars: 0 */
interface Actions {
  set: (options: ExtendOptions | null) => void
  reset: VoidFunction

  setDirectionModel: (inputMode: DirectionModel) => void

  // Default
  setExtendValue: (value: number | null) => void

  // Axis
  setXAxis: (value: number | null) => void
  setYAxis: (value: number | null) => void

  // Separated
  setLeft: (left: number | null) => void
  setTop: (top: number | null) => void
  setRight: (right: number | null) => void
  setBottom: (bottom: number | null) => void

  setExtendWith: (extendWith: ExtendWith) => void
  setBackground: (background: string) => void
  toggleDominantBackground: VoidFunction
}
