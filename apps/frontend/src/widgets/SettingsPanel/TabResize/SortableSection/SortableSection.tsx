import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { clsx } from 'clsx'
import { Flex, Separator } from '@radix-ui/themes'
import type { PaddingProps } from '@radix-ui/themes/props'
import type { CSSProperties, PropsWithChildren } from 'react'
import type { UniqueIdentifier } from '@dnd-kit/core'

import { TrashIcon } from '@scissors/react-icons/TrashIcon'
import { ChevronUpIcon } from '@scissors/react-icons/ChevronUpIcon'
import { ChevronDownIcon } from '@scissors/react-icons/ChevronDownIcon'
import { DragHandleDots2Icon } from '@scissors/react-icons/DragHandleDots2Icon'

import { SortableSectionButton } from './SortableSectionButton'
import type { FlexDirection } from '@lib/theme'
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

/* eslint-disable no-unused-vars */
type Props = PropsWithChildren<{
  id: UniqueIdentifier
  isDragDisabled: boolean
  isUpMovable: boolean
  isDownMovable: boolean
  handleMoveUp?: (id: UniqueIdentifier) => void
  handleMoveDown?: (id: UniqueIdentifier) => void
  handleRemove?: (id: UniqueIdentifier) => void
}>

export const SortableSection = ({
  children,
  id,
  isDragDisabled,
  isUpMovable,
  isDownMovable,
  handleMoveUp,
  handleMoveDown,
  handleRemove
}: Props) => {
  const { isDragging, attributes, listeners, setNodeRef, transition, transform } = useSortable({
    id
  })

  const getTransformCSS = () => {
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

  const style: CSSProperties = {
    transition,
    transform: getTransformCSS(),
    zIndex: isDragging ? 2 : 1
  } as const

  const onMoveUp = () => handleMoveUp?.(id)
  const onMoveDown = () => handleMoveDown?.(id)
  const onRemove = () => handleRemove?.(id)

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
      style={style}
      className={clsx(styles.root, {
        [styles.dragging]: isDragging
      })}
    >
      <section>
        <Flex direction='column' gap='1' className={styles.actions}>
          <SortableSectionButton
            icon={<DragHandleDots2Icon />}
            tooltipContent='Drag'
            isTooltipDisabled={isDragging}
            isDisabled={isDragDisabled}
            listeners={listeners}
          />

          {handleMoveUp && (
            <SortableSectionButton
              icon={<ChevronUpIcon width='17px' height='17px' label='move up' />}
              tooltipContent='Move Up'
              isDisabled={isDragging || !isUpMovable}
              onClick={onMoveUp}
            />
          )}
          {handleMoveDown && (
            <SortableSectionButton
              icon={<ChevronDownIcon width='17px' height='17px' label='move down' />}
              tooltipContent='Move Down'
              isDisabled={isDragging || !isDownMovable}
              onClick={onMoveDown}
            />
          )}

          {handleRemove && (
            <>
              <Separator orientation='horizontal' size='4' my='1' />

              <SortableSectionButton
                icon={<TrashIcon width='18px' height='18px' label='remove section' />}
                tooltipContent='Remove Section'
                isDisabled={isDragging}
                color='red'
                onClick={onRemove}
              />
            </>
          )}
        </Flex>

        {children}
      </section>
    </Flex>
  )
}
