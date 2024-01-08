import { Flex, Tabs } from '@radix-ui/themes'
import {
  closestCenter,
  DndContext,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors
} from '@dnd-kit/core'
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import { restrictToParentElement, restrictToVerticalAxis } from '@dnd-kit/modifiers'

import { Resize } from './Resize'
import { Extend } from './Extend'
import { SortableSection } from './SortableSection'
import { useTabResizeStore } from './store'

export function TabResize() {
  const items = useTabResizeStore(state => state.items)
  const sensors = useSensors(useSensor(PointerSensor), useSensor(TouchSensor))

  const handleDragEnd = useTabResizeStore(state => state.handleDragEnd)
  const handleMoveUp = useTabResizeStore(state => state.handleMoveUp)
  const handleMoveDown = useTabResizeStore(state => state.handleMoveDown)
  const handleRemove = useTabResizeStore(state => state.handleRemove)

  return (
    <Tabs.Content value='resize'>
      <Flex direction='column' gap='2' mt='3' mb='2' pl={{ initial: '3', md: '2' }} pr='3'>
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
    </Tabs.Content>
  )
}
