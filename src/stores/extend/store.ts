import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

import { DEFAULT_EXTEND_BACKGROUND, DEFAULT_EXTEND_WITH } from '@server/Sharp'
import { DirectionModel, type ExtendValues, type State, type Store } from './types'

const defaultExtendValues: ExtendValues = {
  extendValue: null,
  left: null,
  top: null,
  right: null,
  bottom: null
}
const defaultState: State = {
  ...defaultExtendValues,
  directionModel: DirectionModel.NUMBER,
  extendWith: DEFAULT_EXTEND_WITH,
  background: DEFAULT_EXTEND_BACKGROUND
}

// TODO: Rework :)
export const useExtendStore = create(
  devtools<Store>((set, get) => ({
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
        background: get().background,
        extendWith: get().extendWith
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
      if (!options) {
        return
      }

      set({
        ...options,
        directionModel: DirectionModel.SEPARATED
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

        if (directionModel === DirectionModel.NUMBER) {
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

        function handleAxisValue(axis: 'x' | 'y'): void {
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

        if (directionModel === DirectionModel.AXIS) {
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
        if (state.directionModel !== DirectionModel.NUMBER) {
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
        if (state.directionModel !== DirectionModel.AXIS) {
          return state
        }

        return {
          left: value,
          right: value
        }
      }),
    setYAxis: value =>
      set(state => {
        if (state.directionModel !== DirectionModel.AXIS) {
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

    setBackground: background => set({ background }),
    setExtendWith: extendWith => set({ extendWith })
  }))
)
