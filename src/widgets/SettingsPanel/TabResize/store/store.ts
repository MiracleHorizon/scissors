import { create } from 'zustand'
import { arrayMove } from '@dnd-kit/sortable'

import type { State } from './types'

export const useTabResizeStore = create<State>(set => ({
  items: [
    {
      id: 'resize'
    },
    {
      id: 'extend'
    }
  ],

  setItems: items => set({ items }),

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
