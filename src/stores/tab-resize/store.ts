import { create } from 'zustand'
import { arrayMove } from '@dnd-kit/sortable'

import { RESIZE_OPERATION_NAME, type ResizeQueue } from '@server/sharp'
import type { State, Store } from './types'

const defaultState: State = {
  sections: [
    {
      id: RESIZE_OPERATION_NAME.RESIZE
    }
  ]
}

export const useTabResizeStore = create<Store>((set, get) => ({
  // State
  ...defaultState,

  // Computed
  isEmpty: () => get().sections.length === 0,
  isAllSettled: () => get().isResizeAdded() && get().isExtendAdded() && get().isTrimAdded(),
  isResizeAdded: () => get().sections.some(section => section.id === RESIZE_OPERATION_NAME.RESIZE),
  isExtendAdded: () => get().sections.some(section => section.id === RESIZE_OPERATION_NAME.EXTEND),
  isTrimAdded: () => get().sections.some(section => section.id === RESIZE_OPERATION_NAME.TRIM),
  getQueue: () => {
    // TODO: Rework to use Map
    const sections = get().sections
    const sectionsIdentifiers = sections.map(section => section.id)

    const resizeIndex = sectionsIdentifiers.indexOf(RESIZE_OPERATION_NAME.RESIZE)
    const extendIndex = sectionsIdentifiers.indexOf(RESIZE_OPERATION_NAME.EXTEND)
    const trimIndex = sectionsIdentifiers.indexOf(RESIZE_OPERATION_NAME.TRIM)

    const values: ResizeQueue = []

    if (resizeIndex !== -1) {
      values.push({
        name: RESIZE_OPERATION_NAME.RESIZE,
        queueIndex: resizeIndex
      })
    }

    if (extendIndex !== -1) {
      values.push({
        name: RESIZE_OPERATION_NAME.EXTEND,
        queueIndex: extendIndex
      })
    }

    if (trimIndex !== -1) {
      values.push({
        name: RESIZE_OPERATION_NAME.TRIM,
        queueIndex: trimIndex
      })
    }

    if (values.length === 0) {
      return []
    }

    values.sort((a, b) => a.queueIndex - b.queueIndex)

    return values
  },

  // Actions
  setSections: sections => set({ sections }),

  addResizeSection: () =>
    set(state => ({
      sections: [...state.sections, { id: RESIZE_OPERATION_NAME.RESIZE }]
    })),
  addExtendSection: () =>
    set(state => ({
      sections: [...state.sections, { id: RESIZE_OPERATION_NAME.EXTEND }]
    })),
  addTrimSection: () =>
    set(state => ({
      sections: [...state.sections, { id: RESIZE_OPERATION_NAME.TRIM }]
    })),

  handleDragEnd: event => {
    const { active, over } = event

    if (!over || active.id === over.id) return

    set(state => {
      const sectionsIdentifiers = state.sections.map(section => section.id)

      const oldIndex = sectionsIdentifiers.indexOf(active.id)
      const newIndex = sectionsIdentifiers.indexOf(over.id)

      return {
        sections: arrayMove(state.sections, oldIndex, newIndex)
      }
    })
  },
  handleMoveUp: sectionId => {
    set(state => {
      const sections = state.sections
      const sectionIndex = sections.findIndex(section => section.id === sectionId)

      const isFirstSection = sectionIndex === 0
      if (isFirstSection) {
        return {
          sections
        }
      }

      return {
        sections: arrayMove(state.sections, sectionIndex, sectionIndex - 1)
      }
    })
  },

  handleMoveDown: sectionId =>
    set(state => {
      const sections = state.sections
      const sectionIndex = sections.findIndex(section => section.id === sectionId)

      const isLastSection = sectionIndex === sections.length - 1
      if (isLastSection) {
        return {
          sections
        }
      }

      return {
        sections: arrayMove(state.sections, sectionIndex, sectionIndex + 1)
      }
    }),
  handleRemove: sectionId =>
    set(state => ({
      sections: state.sections.filter(section => section.id !== sectionId)
    }))
}))
