import {
  closestCenter,
  DndContext,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors
} from '@dnd-kit/core'
import { restrictToParentElement, restrictToVerticalAxis } from '@dnd-kit/modifiers'
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import { Flex } from '@radix-ui/themes'

import { Resize } from './Resize'
import { Extend } from './Extend'
import { SortableSection } from './SortableSection'
import { useTabResizeStore } from '@stores/tab-resize'

export function TabResizeContent() {
  const items = useTabResizeStore(state => state.items)
  const sensors = useSensors(useSensor(PointerSensor), useSensor(TouchSensor))

  const handleDragEnd = useTabResizeStore(state => state.handleDragEnd)
  const handleMoveUp = useTabResizeStore(state => state.handleMoveUp)
  const handleMoveDown = useTabResizeStore(state => state.handleMoveDown)
  const handleRemove = useTabResizeStore(state => state.handleRemove)

  return (
    <Flex direction='column' gap='2'>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        modifiers={[restrictToVerticalAxis, restrictToParentElement]}
        onDragEnd={handleDragEnd}
      >
        <SortableContext items={items} strategy={verticalListSortingStrategy}>
          {items.map(({ id }, index) => (
            <SortableSection
              key={id}
              id={id}
              isDragDisabled={items.length <= 1}
              isUpMovable={index > 0 && items.length > 1}
              isDownMovable={index < items.length - 1 && items.length > 1}
              handleMoveUp={handleMoveUp}
              handleMoveDown={handleMoveDown}
              handleRemove={handleRemove}
            >
              {typeof id === 'string' && id.startsWith('resize') && <Resize />}
              {typeof id === 'string' && id.startsWith('extend') && <Extend />}
            </SortableSection>
          ))}
        </SortableContext>
      </DndContext>
    </Flex>
  )
}
