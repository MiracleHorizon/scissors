import type { DragEndEvent, UniqueIdentifier } from '@dnd-kit/core'

import type { ResizeQueue } from '@server/Sharp'

export type Store = State & Computed & Actions

interface Item {
  id: UniqueIdentifier
}

export interface State {
  items: Item[]
}

interface Computed {
  getQueue: () => ResizeQueue
}

/* eslint-disable no-unused-vars */
interface Actions {
  setItems: (items: Item[]) => void
  handleDragEnd: (event: DragEndEvent) => void
  handleMoveUp: (itemId: UniqueIdentifier) => void
  handleMoveDown: (itemId: UniqueIdentifier) => void
  handleRemove: (itemId: UniqueIdentifier) => void
}
