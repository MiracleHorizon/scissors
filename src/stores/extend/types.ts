import type { Color } from 'sharp'

import type { ExtendOptions, ExtendWith } from '@server/Sharp'

export type Store = State & Computed & Actions

export const enum InputMode {
  NUMBER = 'number',
  AXIS = 'axis',
  SEPARATED = 'separated'
}

export interface ExtendValues extends Omit<ExtendOptions, 'background' | 'extendWith'> {
  extendValue: number | null
}

export interface State extends ExtendOptions, Pick<ExtendValues, 'extendValue'> {
  inputMode: InputMode
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
  setInputMode: (inputMode: InputMode) => void

  // Default
  setExtendValue: (value: number) => void
  resetExtendValue: VoidFunction

  // Axis
  setXAxis: (value: number) => void
  setYAxis: (value: number) => void
  resetXAxis: VoidFunction
  resetYAxis: VoidFunction

  // Separated
  setLeft: (left: number) => void
  setTop: (top: number) => void
  setRight: (right: number) => void
  setBottom: (bottom: number) => void
  resetLeft: VoidFunction
  resetRight: VoidFunction
  resetTop: VoidFunction
  resetBottom: VoidFunction

  setBackground: (background: Color) => void
  setExtendWith: (extendWith: ExtendWith) => void

  reset: VoidFunction
}
