import { create, type StateCreator } from 'zustand'

import {
  type ConvertSettings,
  DEFAULT_FLIP,
  DEFAULT_FLOP,
  DEFAULT_GRAYSCALE
} from '@scissors/sharp'

export type State = Pick<ConvertSettings, 'flip' | 'flop' | 'grayscale'>

/* eslint no-unused-vars: 0 */
interface Store extends State {
  getConvertSettings: () => State

  reset: VoidFunction
  setFlip: (flip: boolean) => void
  setFlop: (flop: boolean) => void
  setGrayscale: (grayscale: boolean) => void
  toggleFlip: VoidFunction
  toggleFlop: VoidFunction
  toggleGrayscale: VoidFunction
}

export const defaultState: State = {
  flip: DEFAULT_FLIP,
  flop: DEFAULT_FLOP,
  grayscale: DEFAULT_GRAYSCALE
} as const

const convertStoreCreator: StateCreator<Store> = (set, get) => ({
  // State
  ...defaultState,

  // Computed
  getConvertSettings: () => ({
    flip: get().flip,
    flop: get().flop,
    grayscale: get().grayscale
  }),

  // Actions
  reset: () => set(defaultState),

  setFlip: flip => set({ flip }),
  setFlop: flop => set({ flop }),
  setGrayscale: grayscale => set({ grayscale }),

  toggleFlip: () => set(state => ({ flip: !state.flip })),
  toggleFlop: () => set(state => ({ flop: !state.flop })),
  toggleGrayscale: () => set(state => ({ grayscale: !state.grayscale }))
})

export const createConvertStore = () => create<Store>()(convertStoreCreator)

export const useConvertStore = createConvertStore()
