import { create } from 'zustand'

/* eslint no-unused-vars: 0 */
interface Store extends State {
  setMode: (value: DrawMode) => void

  setLineWidth: (value: DrawLineWidth) => void
  setLineJoin: (value: DrawLineJoin) => void
  setStrokeStyle: (value: DrawStrokeStyle) => void
  setGlobalAlpha: (value: number) => void
  setShadowColor: (value: string) => void
  setShadowBlur: (value: number) => void

  setEraseRadius: (value: DrawEraseRadius) => void
}

export const DRAW_MODE = {
  PEN: 'draw',
  ERASE: 'erase'
}
export type DrawMode = (typeof DRAW_MODE)[keyof typeof DRAW_MODE]

export const DRAW_LINE_WIDTH = {
  SM: 2,
  MD: 3,
  LG: 4,
  XL: 6
} as const
export type DrawLineWidth = (typeof DRAW_LINE_WIDTH)[keyof typeof DRAW_LINE_WIDTH]

export const DRAW_LINE_JOIN = {
  MITER: 'miter',
  ROUND: 'round',
  BEVEL: 'bevel'
} as const
export type DrawLineJoin = (typeof DRAW_LINE_JOIN)[keyof typeof DRAW_LINE_JOIN]

export type DrawStrokeStyle = string | CanvasGradient | CanvasPattern

export const DRAW_ERASE_RADIUS = {
  SM: 6,
  MD: 8,
  LG: 10
} as const

export type DrawEraseRadius = (typeof DRAW_ERASE_RADIUS)[keyof typeof DRAW_ERASE_RADIUS]

interface State {
  mode: DrawMode

  lineWidth: DrawLineWidth
  lineJoin: DrawLineJoin
  strokeStyle: DrawStrokeStyle
  globalAlpha: number
  shadowColor: string
  shadowBlur: number

  eraseRadius: DrawEraseRadius
}

const defaultState: State = {
  mode: DRAW_MODE.PEN,

  lineWidth: DRAW_LINE_WIDTH.SM,
  lineJoin: DRAW_LINE_JOIN.MITER,
  strokeStyle: '#000000',
  shadowColor: '#000000',
  shadowBlur: 0,
  globalAlpha: 1,

  eraseRadius: DRAW_ERASE_RADIUS.SM
} as const

export const useDrawStore = create<Store>(set => ({
  // State
  ...defaultState,

  // Actions
  setMode: mode => set({ mode }),

  setLineWidth: lineWidth => set({ lineWidth }),
  setLineJoin: lineJoin => set({ lineJoin }),
  setStrokeStyle: strokeStyle => set({ strokeStyle }),
  setGlobalAlpha: globalAlpha => set({ globalAlpha }),
  setShadowColor: shadowColor => set({ shadowColor }),
  setShadowBlur: shadowBlur => set({ shadowBlur }),

  setEraseRadius: eraseRadius => set({ eraseRadius })
}))
