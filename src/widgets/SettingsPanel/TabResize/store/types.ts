import type { DragEndEvent, UniqueIdentifier } from '@dnd-kit/core'

interface Item {
  id: UniqueIdentifier
}

/* eslint-disable no-unused-vars */
export interface State {
  items: Item[]
  setItems: (items: Item[]) => void
  handleDragEnd: (event: DragEndEvent) => void
  handleMoveUp: (itemId: UniqueIdentifier) => void
  handleMoveDown: (itemId: UniqueIdentifier) => void
  handleRemove: (itemId: UniqueIdentifier) => void
}
