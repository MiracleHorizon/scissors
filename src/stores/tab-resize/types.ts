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
  isEmpty: () => boolean
  isResizeAdded: () => boolean
  isExtendAdded: () => boolean
  getQueue: () => ResizeQueue
}

/* eslint-disable no-unused-vars */
interface Actions {
  setItems: (items: Item[]) => void

  addResizeItem: VoidFunction
  addExtendItem: VoidFunction

  handleDragEnd: (event: DragEndEvent) => void
  handleMoveUp: (itemId: UniqueIdentifier) => void
  handleMoveDown: (itemId: UniqueIdentifier) => void
  handleRemove: (itemId: UniqueIdentifier) => void
}
