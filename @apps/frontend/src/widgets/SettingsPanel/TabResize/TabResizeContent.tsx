import {
  closestCenter,
  DndContext,
  type DragEndEvent,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors
} from '@dnd-kit/core'
import { restrictToParentElement, restrictToVerticalAxis } from '@dnd-kit/modifiers'
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import { Flex } from '@radix-ui/themes'

import { RESIZE_OPERATION } from '@scissors/sharp'

import { SortableSection } from './SortableSection'
import { TabResizeEmpty } from './TabResizeEmpty'
// import { TabResizeSectionSkeleton } from './TabResizeSectionSkeleton'
import { useTabResizeStore } from './store'
import { ResizeSection } from './sections/resize'
import { ExtendSection } from './sections/extend'
import { ExtractSection } from './sections/extract'
import { TrimSection } from './sections/trim'

// const ResizeSection = dynamic(() => import('./sections/resize').then(mod => mod.ResizeSection), {
//   ssr: false,
//   loading: () => <TabResizeSectionSkeleton height='168px' />
// })
// const ExtendSection = dynamic(() => import('./sections/extend').then(mod => mod.ExtendSection), {
//   ssr: false,
//   loading: () => <TabResizeSectionSkeleton height='228px' />
// })
// const ExtractSection = dynamic(() => import('./sections/extract').then(mod => mod.ExtractSection), {
//   ssr: false,
//   loading: () => <TabResizeSectionSkeleton height='120px' />
// })
// const TrimSection = dynamic(() => import('./sections/trim').then(mod => mod.TrimSection), {
//   ssr: false,
//   loading: () => <TabResizeSectionSkeleton height='120px' />
// })

export const TabResizeContent = () => {
  const operations = useTabResizeStore(state => state.operations)
  const sensors = useSensors(useSensor(PointerSensor), useSensor(TouchSensor))

  const sortOperations = useTabResizeStore(state => state.sortOperations)
  const moveUpOperation = useTabResizeStore(state => state.moveUpOperation)
  const moveDownOperation = useTabResizeStore(state => state.moveDownOperation)
  const removeOperation = useTabResizeStore(state => state.removeOperation)

  const handleDragEnd = ({ active, over }: DragEndEvent) => {
    if (!over || active.id === over.id) return

    sortOperations(active.id, over.id)
  }

  return (
    <Flex direction='column' gap='2'>
      {operations.length > 0 ? (
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          modifiers={[restrictToVerticalAxis, restrictToParentElement]}
          onDragEnd={handleDragEnd}
        >
          <SortableContext items={operations} strategy={verticalListSortingStrategy}>
            {operations.map(({ id }, index) => (
              <SortableSection
                key={id}
                id={id}
                isDragDisabled={operations.length <= 1}
                isUpMovable={index > 0 && operations.length > 1}
                isDownMovable={index < operations.length - 1 && operations.length > 1}
                handleMoveUp={moveUpOperation}
                handleMoveDown={moveDownOperation}
                handleRemove={removeOperation}
              >
                {id === RESIZE_OPERATION.RESIZE && <ResizeSection />}
                {id === RESIZE_OPERATION.EXTEND && <ExtendSection />}
                {id === RESIZE_OPERATION.EXTRACT && <ExtractSection />}
                {id === RESIZE_OPERATION.TRIM && <TrimSection />}
              </SortableSection>
            ))}
          </SortableContext>
        </DndContext>
      ) : (
        <TabResizeEmpty />
      )}
    </Flex>
  )
}
