import { useSortable } from '@dnd-kit/sortable'
import { CSS, type Transform } from '@dnd-kit/utilities'
import { clsx } from 'clsx'
import { Flex, IconButton, Separator, Tooltip, type IconButtonProps } from '@radix-ui/themes'
import type { PaddingProps } from '@radix-ui/themes/props'
import type { UniqueIdentifier } from '@dnd-kit/core'
import type { ReactNode } from 'react'

import { TrashIcon } from '@scissors/react-icons/TrashIcon'
import { ChevronUpIcon } from '@scissors/react-icons/ChevronUpIcon'
import { ChevronDownIcon } from '@scissors/react-icons/ChevronDownIcon'
import { DragHandleDots2Icon } from '@scissors/react-icons/DragHandleDots2Icon'

import type { FlexDirection } from '@/shared/radix'
import styles from './SortableSection.module.css'

const direction: FlexDirection = {
  initial: 'row-reverse',
  sm: 'row'
} as const
const padding: PaddingProps = {
  pl: '3',
  pr: {
    initial: '3',
    sm: '0'
  },
  pt: '3',
  pb: '3'
} as const
const actionButtonProps: IconButtonProps = {
  size: '1',
  color: 'gray',
  variant: 'surface',
  radius: 'large'
}

const getTransformCSS = (transform: Transform | null) => {
  const transformCSS = CSS.Transform.toString(transform)
  if (!transformCSS) return
  const split = transformCSS.split(' ')

  const scaleY = split.find(el => el.startsWith('scaleY'))
  if (!scaleY) {
    return transformCSS
  }

  const scaleYValue = Number(scaleY.split('(')[1].split(')')[0])
  if (scaleYValue !== 1) {
    return transformCSS.replace(`scaleY(${scaleYValue})`, 'scaleY(1)')
  }

  return transformCSS
}

export const SortableSection = ({
  content,
  id,
  upMovable,
  downMovable,
  dragDisabled,
  onMoveUp,
  onMoveDown,
  onRemove
}: {
  content: ReactNode
  id: UniqueIdentifier
  upMovable: boolean
  downMovable: boolean
  dragDisabled: boolean
  onMoveUp: () => void
  onMoveDown: () => void
  onRemove: () => void
}) => {
  const { isDragging, attributes, listeners, setNodeRef, transition, transform } = useSortable({
    id
  })

  return (
    <Flex
      {...padding}
      {...attributes}
      asChild
      ref={setNodeRef}
      direction={direction}
      align='start'
      gap='2'
      width='100%'
      style={{
        transition,
        transform: getTransformCSS(transform),
        zIndex: isDragging ? 2 : 1
      }}
      className={clsx(styles.root, {
        [styles.dragging]: isDragging
      })}
    >
      <section>
        <Flex direction='column' gap='1' className={styles.actions}>
          <Tooltip content='Drag' hidden={isDragging || dragDisabled}>
            <IconButton disabled={dragDisabled} {...actionButtonProps} {...listeners}>
              <DragHandleDots2Icon />
            </IconButton>
          </Tooltip>

          {onMoveUp && (
            <Tooltip content='Move up' hidden={isDragging || !upMovable}>
              <IconButton
                disabled={isDragging || !upMovable}
                onClick={onMoveUp}
                {...actionButtonProps}
                {...listeners}
              >
                <ChevronUpIcon width='17px' height='17px' label='move up resize operation' />
              </IconButton>
            </Tooltip>
          )}

          {onMoveDown && (
            <Tooltip content='Move down' hidden={isDragging || !downMovable}>
              <IconButton
                disabled={isDragging || !downMovable}
                onClick={onMoveDown}
                {...actionButtonProps}
                {...listeners}
              >
                <ChevronDownIcon width='17px' height='17px' label='move down resize operation' />
              </IconButton>
            </Tooltip>
          )}

          {onRemove && (
            <>
              <Separator orientation='horizontal' size='4' my='1' />

              <Tooltip content='Remove section' hidden={isDragging}>
                <IconButton
                  disabled={isDragging}
                  onClick={onRemove}
                  {...actionButtonProps}
                  {...listeners}
                >
                  <TrashIcon width='18px' height='18px' label={`remove "${id}" operation`} />
                </IconButton>
              </Tooltip>
            </>
          )}
        </Flex>

        {content}
      </section>
    </Flex>
  )
}
