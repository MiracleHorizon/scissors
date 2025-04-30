import { createContext, useContext, useState, useCallback, type PropsWithChildren } from 'react'
import { arrayMove } from '@dnd-kit/sortable'
import { RESIZE_OPERATION, type ResizeOperation } from '@scissors/sharp'

const ResizeOperationsContext = createContext<{
  operations: ResizeOperation[]
  addOperation: (operation: ResizeOperation) => void
  removeOperation: (operation: ResizeOperation) => void
  sortOperations: (activeId: ResizeOperation, overId: ResizeOperation) => void
  moveUpOperation: (operationId: ResizeOperation) => void
  moveDownOperation: (operationId: ResizeOperation) => void
} | null>(null)

const initialOperations: ResizeOperation[] = [RESIZE_OPERATION.RESIZE]

export const ResizeOperationsProvider = ({ children }: PropsWithChildren) => {
  const [operations, setOperations] = useState<ResizeOperation[]>(initialOperations)

  const addOperation = useCallback((operation: ResizeOperation) => {
    setOperations(prev => {
      console.log(prev)

      if (prev.includes(operation)) {
        return prev
      }

      return [...prev, operation]
    })
  }, [])

  const removeOperation = useCallback((operation: ResizeOperation) => {
    setOperations(prev => prev.filter(op => op !== operation))
  }, [])

  const sortOperations = useCallback((activeId: ResizeOperation, overId: ResizeOperation) => {
    setOperations(prev => {
      const oldIndex = prev.indexOf(activeId)
      const newIndex = prev.indexOf(overId)

      return arrayMove(prev, oldIndex, newIndex)
    })
  }, [])

  const moveUpOperation = useCallback((operationId: ResizeOperation) => {
    setOperations(prev => {
      const operationIndex = prev.indexOf(operationId)

      if (operationIndex === 0) {
        return prev
      }

      return arrayMove(prev, operationIndex, operationIndex - 1)
    })
  }, [])

  const moveDownOperation = useCallback((operationId: ResizeOperation) => {
    setOperations(prev => {
      const operationIndex = prev.indexOf(operationId)

      if (operationIndex === prev.length - 1) {
        return prev
      }

      return arrayMove(prev, operationIndex, operationIndex + 1)
    })
  }, [])

  return (
    <ResizeOperationsContext.Provider
      value={{
        operations,
        addOperation,
        removeOperation,
        sortOperations,
        moveUpOperation,
        moveDownOperation
      }}
    >
      {children}
    </ResizeOperationsContext.Provider>
  )
}

export const useResizeOperations = () => {
  const context = useContext(ResizeOperationsContext)

  if (!context) {
    throw new Error(
      '[ResizeOperationsContext] useResizeOperations must be used within ResizeOperationsProvider'
    )
  }

  return context
}
