import type { DragEndEvent, UniqueIdentifier } from '@dnd-kit/core'

import type { ResizeQueue } from '@server/Sharp'

export type Store = State & Computed & Actions

interface Section {
  id: UniqueIdentifier
}

export interface State {
  sections: Section[]
}

interface Computed {
  isEmpty: () => boolean
  isAllSettled: () => boolean
  isResizeAdded: () => boolean
  isExtendAdded: () => boolean
  isTrimAdded: () => boolean
  getQueue: () => ResizeQueue
}

/* eslint-disable no-unused-vars */
interface Actions {
  setSections: (sections: Section[]) => void

  addResizeSection: VoidFunction
  addExtendSection: VoidFunction
  addTrimSection: VoidFunction

  handleDragEnd: (event: DragEndEvent) => void
  handleMoveUp: (itemId: UniqueIdentifier) => void
  handleMoveDown: (itemId: UniqueIdentifier) => void
  handleRemove: (itemId: UniqueIdentifier) => void
}
