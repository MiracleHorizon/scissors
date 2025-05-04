import { create, type StateCreator } from 'zustand'

import {
  DEFAULT_FLIP,
  DEFAULT_FLOP,
  DEFAULT_GRAYSCALE,
  DEFAULT_NEGATE_VALUE
} from '@scissors/sharp'

interface State {
  fileName: string
  flip: boolean
  flop: boolean
  grayscale: boolean
  negate: boolean
}

/* eslint no-unused-vars: 0 */
interface Store extends State {
  getCommon: () => State
  reset: () => void
  setFileName: (fileName: string) => void
  setFlip: (flip: boolean) => void
  setFlop: (flop: boolean) => void
  setGrayscale: (grayscale: boolean) => void
  setNegate: (negate: boolean) => void
  toggleFlip: () => void
  toggleFlop: () => void
  toggleGrayscale: () => void
  toggleNegate: () => void
}

const defaultState: State = {
  fileName: '',
  flip: DEFAULT_FLIP,
  flop: DEFAULT_FLOP,
  grayscale: DEFAULT_GRAYSCALE,
  negate: DEFAULT_NEGATE_VALUE
} as const

const commonStoreCreator: StateCreator<Store> = (set, get) => ({
  ...defaultState,

  getCommon: () => {
    const { fileName, flip, flop, grayscale, negate } = get()

    return {
      fileName,
      flip,
      flop,
      grayscale,
      negate
    }
  },
  reset: () => set(defaultState),
  setFileName: fileName => set({ fileName }),
  setFlip: flip => set({ flip }),
  setFlop: flop => set({ flop }),
  setGrayscale: grayscale => set({ grayscale }),
  setNegate: negate => set({ negate }),
  toggleFlip: () => set(state => ({ flip: !state.flip })),
  toggleFlop: () => set(state => ({ flop: !state.flop })),
  toggleGrayscale: () => set(state => ({ grayscale: !state.grayscale })),
  toggleNegate: () => set(state => ({ negate: !state.negate }))
})

export const createCommonStore = () => create<Store>()(commonStoreCreator)
export const useCommonStore = createCommonStore()
