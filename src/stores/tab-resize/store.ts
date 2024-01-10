import { create } from 'zustand'
import { arrayMove } from '@dnd-kit/sortable'

import { ResizeOperationName, type ResizeQueue } from '@server/Sharp'
import type { State, Store } from './types'

const defaultState: State = {
  items: [
    {
      id: ResizeOperationName.RESIZE
    },
    {
      id: ResizeOperationName.EXTEND
    }
  ]
}

export const useTabResizeStore = create<Store>((set, get) => ({
  // State
  ...defaultState,

  // Computed
  isEmpty: () => get().items.length === 0,
  isResizeAdded: () => get().items.some(item => item.id === ResizeOperationName.RESIZE),
  isExtendAdded: () => get().items.some(item => item.id === ResizeOperationName.EXTEND),
  getQueue: () => {
    // TODO: Rework to use Map
    const items = get().items
    const itemsIdentifiers = items.map(item => item.id)

    const resizeIndex = itemsIdentifiers.indexOf(ResizeOperationName.RESIZE)
    const extendIndex = itemsIdentifiers.indexOf(ResizeOperationName.EXTEND)

    const values: ResizeQueue = []

    if (resizeIndex !== -1) {
      values.push({
        operationName: ResizeOperationName.RESIZE,
        index: resizeIndex
      })
    }

    if (extendIndex !== -1) {
      values.push({
        operationName: ResizeOperationName.EXTEND,
        index: extendIndex
      })
    }

    if (values.length === 0) {
      return []
    }

    values.sort((a, b) => a.index - b.index)

    return values
  },

  // Actions
  setItems: items => set({ items }),

  addResizeItem: () =>
    set(state => ({
      items: [...state.items, { id: ResizeOperationName.RESIZE }]
    })),
  addExtendItem: () =>
    set(state => ({
      items: [...state.items, { id: ResizeOperationName.EXTEND }]
    })),

  handleDragEnd: event => {
    const { active, over } = event

    if (!over || active.id === over.id) return

    set(state => {
      const itemsIdentifiers = state.items.map(item => item.id)

      const oldIndex = itemsIdentifiers.indexOf(active.id)
      const newIndex = itemsIdentifiers.indexOf(over.id)

      return {
        items: arrayMove(state.items, oldIndex, newIndex)
      }
    })
  },
  handleMoveUp: itemId => {
    set(state => {
      const items = state.items
      const itemIndex = items.findIndex(item => item.id === itemId)

      const isFirstItem = itemIndex === 0
      if (isFirstItem) {
        return {
          items
        }
      }

      return {
        items: arrayMove(state.items, itemIndex, itemIndex - 1)
      }
    })
  },

  handleMoveDown: itemId =>
    set(state => {
      const items = state.items
      const itemIndex = items.findIndex(item => item.id === itemId)

      const isLastItem = itemIndex === items.length - 1
      if (isLastItem) {
        return {
          items
        }
      }

      return {
        items: arrayMove(state.items, itemIndex, itemIndex + 1)
      }
    }),
  handleRemove: itemId =>
    set(state => ({
      items: state.items.filter(item => item.id !== itemId)
    }))
}))
