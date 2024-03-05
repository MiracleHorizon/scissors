import dynamic from 'next/dynamic'
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

import { SortableSection } from './SortableSection'
import { TabResizeSectionSkeleton } from './TabResizeSectionSkeleton'
import { useTabResizeStore } from '@stores/tab-resize'

const Resize = dynamic(() => import('./sections/Resize').then(mod => mod.Resize), {
  ssr: false,
  loading: () => <TabResizeSectionSkeleton height={168} />
})
const Extend = dynamic(() => import('./sections/Extend').then(mod => mod.Extend), {
  ssr: false,
  loading: () => <TabResizeSectionSkeleton height={228} />
})
const Trim = dynamic(() => import('./sections/Trim').then(mod => mod.Trim), {
  ssr: false,
  loading: () => <TabResizeSectionSkeleton height={120} />
})

export function TabResizeContent() {
  const sections = useTabResizeStore(state => state.sections)
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
        <SortableContext items={sections} strategy={verticalListSortingStrategy}>
          {sections.map(({ id }, index) => (
            <SortableSection
              key={id}
              id={id}
              isDragDisabled={sections.length <= 1}
              isUpMovable={index > 0 && sections.length > 1}
              isDownMovable={index < sections.length - 1 && sections.length > 1}
              handleMoveUp={handleMoveUp}
              handleMoveDown={handleMoveDown}
              handleRemove={handleRemove}
            >
              {id === 'resize' && <Resize />}
              {id === 'extend' && <Extend />}
              {id === 'trim' && <Trim />}
            </SortableSection>
          ))}
        </SortableContext>
      </DndContext>
    </Flex>
  )
}
