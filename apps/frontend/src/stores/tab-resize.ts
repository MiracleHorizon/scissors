import { create } from 'zustand'
import { arrayMove } from '@dnd-kit/sortable'
import type { DragEndEvent, UniqueIdentifier } from '@dnd-kit/core'

import { RESIZE_OPERATION, type ResizeQueue } from '@scissors/sharp'

/* eslint-disable no-unused-vars */
interface Store extends State {
  isEmpty: () => boolean
  isAllSettled: () => boolean
  isResizeAdded: () => boolean
  isExtendAdded: () => boolean
  isExtractAdded: () => boolean
  isTrimAdded: () => boolean
  getQueue: () => ResizeQueue

  setSections: (sections: Section[]) => void
  addResizeSection: VoidFunction
  addExtendSection: VoidFunction
  addExtractSection: VoidFunction
  addTrimSection: VoidFunction
  handleDragEnd: (event: DragEndEvent) => void
  handleMoveUp: (itemId: UniqueIdentifier) => void
  handleMoveDown: (itemId: UniqueIdentifier) => void
  handleRemove: (itemId: UniqueIdentifier) => void
}

interface Section {
  id: UniqueIdentifier
}

interface State {
  sections: Section[]
}

const defaultState: State = {
  sections: [
    {
      id: RESIZE_OPERATION.RESIZE
    }
  ]
} as const

// TODO: move out of @stores
export const useTabResizeStore = create<Store>((set, get) => ({
  // State
  ...defaultState,

  // Computed
  isEmpty: () => get().sections.length === 0,
  isAllSettled: () =>
    get().isResizeAdded() && get().isExtendAdded() && get().isExtractAdded() && get().isTrimAdded(),
  isResizeAdded: () => get().sections.some(section => section.id === RESIZE_OPERATION.RESIZE),
  isExtendAdded: () => get().sections.some(section => section.id === RESIZE_OPERATION.EXTEND),
  isExtractAdded: () => get().sections.some(section => section.id === RESIZE_OPERATION.EXTRACT),
  isTrimAdded: () => get().sections.some(section => section.id === RESIZE_OPERATION.TRIM),
  getQueue: () => {
    // TODO: Rework to use Map
    const sections = get().sections
    const sectionsIdentifiers = sections.map(section => section.id)

    const resizeIndex = sectionsIdentifiers.indexOf(RESIZE_OPERATION.RESIZE)
    const extendIndex = sectionsIdentifiers.indexOf(RESIZE_OPERATION.EXTEND)
    const extractIndex = sectionsIdentifiers.indexOf(RESIZE_OPERATION.EXTRACT)
    const trimIndex = sectionsIdentifiers.indexOf(RESIZE_OPERATION.TRIM)

    const values: ResizeQueue = []

    // TODO: Rework
    if (resizeIndex !== -1) {
      values.push({
        name: RESIZE_OPERATION.RESIZE,
        queueIndex: resizeIndex
      })
    }

    if (extendIndex !== -1) {
      values.push({
        name: RESIZE_OPERATION.EXTEND,
        queueIndex: extendIndex
      })
    }

    if (extractIndex !== -1) {
      values.push({
        name: RESIZE_OPERATION.EXTRACT,
        queueIndex: extractIndex
      })
    }

    if (trimIndex !== -1) {
      values.push({
        name: RESIZE_OPERATION.TRIM,
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
      sections: [...state.sections, { id: RESIZE_OPERATION.RESIZE }]
    })),
  addExtendSection: () =>
    set(state => ({
      sections: [...state.sections, { id: RESIZE_OPERATION.EXTEND }]
    })),
  addExtractSection: () =>
    set(state => ({
      sections: [...state.sections, { id: RESIZE_OPERATION.EXTRACT }]
    })),
  addTrimSection: () =>
    set(state => ({
      sections: [...state.sections, { id: RESIZE_OPERATION.TRIM }]
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
