import { create, type StateCreator } from 'zustand'

import {
  DEFAULT_EXTEND_BACKGROUND,
  DEFAULT_EXTEND_WITH,
  type ExtendOptions,
  type ExtendWith
} from '@scissors/sharp'

/* eslint no-unused-vars: 0 */
interface Store extends State {
  isEmpty: () => boolean
  isXAxisEmpty: () => boolean
  isYAxisEmpty: () => boolean
  getExtendOptions: () => ExtendOptions | null
  getMinValue: () => number | null
  getXAxis: () => number | null
  getYAxis: () => number | null

  set: (options: ExtendOptions | null) => void
  reset: VoidFunction
  setDirectionModel: (inputMode: DirectionModel) => void
  setExtendValue: (value: number | null) => void
  setXAxis: (value: number | null) => void
  setYAxis: (value: number | null) => void
  setLeft: (left: number | null) => void
  setTop: (top: number | null) => void
  setRight: (right: number | null) => void
  setBottom: (bottom: number | null) => void
  setExtendWith: (extendWith: ExtendWith) => void
  setBackground: (background: string) => void
  toggleDominantBackground: VoidFunction
}

interface ExtendValues
  extends Omit<ExtendOptions, 'background' | 'extendWith' | 'withDominantBackground'> {
  extendValue: number | null
}

interface State extends ExtendOptions, Pick<ExtendValues, 'extendValue'> {
  directionModel: DirectionModel
}

export const DIRECTION_MODEL = {
  NUMBER: 'number',
  AXIS: 'axis',
  SEPARATED: 'separated'
} as const
type DirectionModel = (typeof DIRECTION_MODEL)[keyof typeof DIRECTION_MODEL]

export const defaultExtendValues: ExtendValues = {
  extendValue: null,
  left: null,
  top: null,
  right: null,
  bottom: null
} as const
export const defaultState: State = {
  ...defaultExtendValues,
  directionModel: DIRECTION_MODEL.NUMBER,
  extendWith: DEFAULT_EXTEND_WITH,
  background: DEFAULT_EXTEND_BACKGROUND,
  withDominantBackground: false
} as const

// TODO: Rework?
// TODO: Tests
const extendStoreCreator: StateCreator<Store> = (set, get) => ({
  // State
  ...defaultState,

  // Computed
  isEmpty: () => {
    const { extendValue, left, top, right, bottom } = get()

    return (
      extendValue === null && left === null && top === null && right === null && bottom === null
    )
  },
  isXAxisEmpty: () => get().left === null && get().right === null,
  isYAxisEmpty: () => get().top === null && get().bottom === null,
  getExtendOptions: () => {
    const isEmpty = get().isEmpty()

    if (isEmpty) {
      return null
    }

    return {
      left: get().left,
      top: get().top,
      right: get().right,
      bottom: get().bottom,
      extendWith: get().extendWith,
      background: get().background,
      withDominantBackground: get().withDominantBackground
    }
  },
  getMinValue: () => {
    const { left, right, top, bottom } = get()
    const directionValues = [left, right, top, bottom].filter(v => v !== null) as number[]

    if (directionValues.length === 0) {
      return null
    }

    return Math.min(...directionValues)
  },
  getXAxis: () => {
    const { left, right } = get()

    if (left !== null && right !== null) {
      return Math.min(left, right)
    }

    if (get().isXAxisEmpty()) {
      return null
    }

    if (left === null && right !== null) {
      return right
    }

    if (right === null && left !== null) {
      return left
    }

    return null
  },
  getYAxis: () => {
    const { top, bottom } = get()

    if (top !== null && bottom !== null) {
      return Math.min(top, bottom)
    }

    if (get().isYAxisEmpty()) {
      return null
    }

    if (top === null && bottom !== null) {
      return bottom
    }

    if (bottom === null && top !== null) {
      return top
    }

    return null
  },

  // Actions
  set: options => {
    if (!options) return

    set({
      ...options,
      directionModel: DIRECTION_MODEL.SEPARATED
    })
  },
  reset: () => set(defaultState),

  setDirectionModel: directionModel =>
    set(state => {
      if (state.isEmpty()) {
        return {
          directionModel
        }
      }

      if (directionModel === DIRECTION_MODEL.NUMBER) {
        const minValue = state.getMinValue()

        return {
          directionModel,
          extendValue: minValue,
          left: minValue,
          right: minValue,
          top: minValue,
          bottom: minValue
        }
      }

      const handleAxisValue = (axis: 'x' | 'y'): void => {
        const { left, right, top, bottom } = state

        switch (axis) {
          case 'x':
            if (left !== null && right !== null) {
              const minXValue = Math.min(left, right)

              if (!isFinite(minXValue)) {
                break
              }

              set({
                left: minXValue,
                right: minXValue
              })

              break
            }

            if (left === null && right === null) {
              break
            }

            if (left === null) {
              set({
                right,
                left: right
              })

              break
            }

            if (right === null) {
              set({
                left,
                right: left
              })

              break
            }

            break
          case 'y':
            if (top !== null && bottom !== null) {
              const minYValue = Math.min(top, bottom)

              if (!isFinite(minYValue)) {
                break
              }

              set({
                top: minYValue,
                bottom: minYValue
              })

              break
            }

            if (top === null && bottom === null) {
              break
            }

            if (top === null) {
              set({
                bottom,
                top: bottom
              })

              break
            }

            if (bottom === null) {
              set({
                top,
                bottom: top
              })

              break
            }

            break
        }
      }

      if (directionModel === DIRECTION_MODEL.AXIS) {
        handleAxisValue('x')
        handleAxisValue('y')

        return {
          directionModel
        }
      }

      return {
        directionModel
      }
    }),

  setExtendValue: value =>
    set(state => {
      if (state.directionModel !== DIRECTION_MODEL.NUMBER) {
        return state
      }

      if (value === null) {
        return {
          ...defaultExtendValues
        }
      }

      return {
        extendValue: value,
        left: value,
        top: value,
        right: value,
        bottom: value
      }
    }),

  setXAxis: value =>
    set(state => {
      if (state.directionModel !== DIRECTION_MODEL.AXIS) {
        return state
      }

      return {
        left: value,
        right: value
      }
    }),
  setYAxis: value =>
    set(state => {
      if (state.directionModel !== DIRECTION_MODEL.AXIS) {
        return state
      }

      return {
        top: value,
        bottom: value
      }
    }),

  setLeft: left => set({ left }),
  setRight: right => set({ right }),
  setTop: top => set({ top }),
  setBottom: bottom => set({ bottom }),

  setExtendWith: extendWith =>
    set({
      extendWith,
      withDominantBackground: defaultState.withDominantBackground
    }),
  setBackground: background => set({ background }),
  toggleDominantBackground: () => set({ withDominantBackground: !get().withDominantBackground })
})

export const createExtendStore = () => create<Store>()(extendStoreCreator)

export const useExtendStore = createExtendStore()
