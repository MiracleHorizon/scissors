import { create } from 'zustand'
import { arrayMove } from '@dnd-kit/sortable'
import type { UniqueIdentifier } from '@dnd-kit/core'

import { RESIZE_OPERATION, type ResizeQueue } from '@scissors/sharp'

/* eslint-disable no-unused-vars */
interface Store extends State {
  isEmpty: () => boolean
  getQueue: () => ResizeQueue
  getOperationsIds: () => UniqueIdentifier[]

  setOperations: (operation: Operation[]) => void
  addOperation: (operationId: UniqueIdentifier) => void
  removeOperation: (operationId: UniqueIdentifier) => void
  removeAllOperations: VoidFunction
  sortOperations: (activeId: UniqueIdentifier, overId: UniqueIdentifier) => void

  moveUpOperation: (operationId: UniqueIdentifier) => void
  moveDownOperation: (operationId: UniqueIdentifier) => void
}

interface Operation {
  id: UniqueIdentifier
}

interface State {
  operations: Operation[]
}

const defaultState: State = {
  operations: [
    {
      id: RESIZE_OPERATION.RESIZE
    }
  ]
} as const

export const useTabResizeStore = create<Store>((set, get) => ({
  // State
  ...defaultState,

  // Computed
  isEmpty: () => get().operations.length === 0,
  getQueue: () => {
    // TODO: Rework to use Map
    const operations = get().operations
    const operationsIds = operations.map(operation => operation.id)

    const resizeIndex = operationsIds.indexOf(RESIZE_OPERATION.RESIZE)
    const extendIndex = operationsIds.indexOf(RESIZE_OPERATION.EXTEND)
    const extractIndex = operationsIds.indexOf(RESIZE_OPERATION.EXTRACT)
    const trimIndex = operationsIds.indexOf(RESIZE_OPERATION.TRIM)

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
  getOperationsIds: () => get().operations.map(operation => operation.id),

  // Actions
  setOperations: operations => set({ operations }),
  addOperation: operationId => {
    set(state => {
      const operations = state.operations
      const operationsIds = get().getOperationsIds()

      if (operationsIds.includes(operationId)) {
        return { operations }
      }

      return {
        operations: [...operations, { id: operationId }]
      }
    })
  },
  removeOperation: operationId =>
    set(state => ({
      operations: state.operations.filter(operation => operation.id !== operationId)
    })),
  removeAllOperations: () => set({ operations: [] }),
  sortOperations: (activeId, overId) =>
    set(state => {
      const operationsIds = get().getOperationsIds()

      const oldIndex = operationsIds.indexOf(activeId)
      const newIndex = operationsIds.indexOf(overId)

      return {
        operations: arrayMove(state.operations, oldIndex, newIndex)
      }
    }),
  moveUpOperation: operationId => {
    set(state => {
      const operations = state.operations
      const operationIndex = operations.findIndex(operation => operation.id === operationId)

      if (operationIndex === 0) {
        return { operations }
      }

      return {
        operations: arrayMove(operations, operationIndex, operationIndex - 1)
      }
    })
  },

  moveDownOperation: operationId =>
    set(state => {
      const operations = state.operations
      const operationIndex = operations.findIndex(operation => operation.id === operationId)

      if (operationIndex === operations.length - 1) {
        return { operations }
      }

      return {
        operations: arrayMove(operations, operationIndex, operationIndex + 1)
      }
    })
}))
