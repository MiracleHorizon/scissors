import { Flex, Tabs, Text } from '@radix-ui/themes'
import { Callout } from '@radix-ui/themes'
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

import { InfoCircledIcon } from '@scissors/react-icons/InfoCircledIcon'
import { DimensionsIcon } from '@scissors/react-icons/DimensionsIcon'
import { RESIZE_OPERATION, type ResizeOperation } from '@scissors/sharp'

import { Resize } from '@/features/settings/resize'
import { ResizeOperationsProvider, useResizeOperations } from '../model'
import { ResizeOperationsSelector } from './ResizeOperationsSelector/ResizeOperationsSelector'
import { SortableSection } from './SortableSection/SortableSection'
import { OptionSection } from './OptionSection/OptionSection'
import styles from './SettingsResize.module.css'

export const Content = () => {
  const { operations, sortOperations, moveUpOperation, moveDownOperation, removeOperation } =
    useResizeOperations()
  const sensors = useSensors(useSensor(PointerSensor), useSensor(TouchSensor))

  const handleDragEnd = ({ active, over }: DragEndEvent) => {
    if (!over || active.id === over.id) return

    sortOperations(active.id as ResizeOperation, over.id as ResizeOperation)
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
            {operations.map((operation, index) => (
              <SortableSection
                key={operation}
                id={operation}
                dragDisabled={operations.length <= 1}
                upMovable={index > 0 && operations.length > 1}
                downMovable={index < operations.length - 1 && operations.length > 1}
                onMoveUp={() => moveUpOperation(operation)}
                onMoveDown={() => moveDownOperation(operation)}
                onRemove={() => removeOperation(operation)}
                content={
                  <>
                    {operation === RESIZE_OPERATION.RESIZE && <ResizeSection />}
                    {/* {operation === RESIZE_OPERATION.RESIZE && <ResizeSection />} */}
                  </>
                }
              />
            ))}
          </SortableContext>
        </DndContext>
      ) : (
        <Placeholder />
      )}
    </Flex>
  )
}

const Placeholder = () => (
  <Flex width='100%' height='100%' align='center' justify='center'>
    <Text as='p' color='gray' wrap='pretty' align='center'>
      Please, select the operations you wish to perform
    </Text>
  </Flex>
)

const ResizeSection = () => (
  <OptionSection
    title='Resize'
    docsLink='/docs#resize'
    icon={<DimensionsIcon width='18px' height='18px' label='resize' />}
    content={<Resize />}
  />
)

export const SettingsResize = () => {
  return (
    <Tabs.Content value='resize'>
      <Flex direction='column' gap='2'>
        <Callout.Root size='1' variant='surface' color='gray' className={styles.callout}>
          <Callout.Icon>
            <InfoCircledIcon width='16px' height='16px' />
          </Callout.Icon>

          <Callout.Text size='2'>
            You can move sections below to change the sequence in which they are executed by
            dragging them
          </Callout.Text>
        </Callout.Root>

        <ResizeOperationsProvider>
          <ResizeOperationsSelector />
          <Content />
        </ResizeOperationsProvider>
      </Flex>
    </Tabs.Content>
  )
}
