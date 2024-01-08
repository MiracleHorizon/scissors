import { useSortable } from '@dnd-kit/sortable'
import { Flex, type PaddingProps, Separator } from '@radix-ui/themes'
import { CSS } from '@dnd-kit/utilities'
import { clsx } from 'clsx'
import type { CSSProperties, PropsWithChildren } from 'react'
import type { UniqueIdentifier } from '@dnd-kit/core'

import { TrashIcon } from '@ui/icons/TrashIcon'
import { ChevronUpIcon } from '@ui/icons/ChevronUpIcon'
import { ChevronDownIcon } from '@ui/icons/ChevronDownIcon'
import { DragHandleDots2 } from '@ui/icons/DragHandleDots2'
import { SortableSectionButton } from './SortableSectionButton'
import type { FlexDirection } from '@lib/theme'
import styles from './SortableSection.module.css'

const direction: FlexDirection = {
  initial: 'row-reverse',
  sm: 'row'
}
const padding: PaddingProps = {
  pl: {
    initial: '2',
    sm: '2'
  },
  pr: {
    initial: '2',
    sm: '0'
  },
  pt: '2',
  pb: '1'
}

export function SortableSection({
  children,
  id,
  isUpMovable,
  isDownMovable,
  handleMoveUp,
  handleMoveDown,
  handleRemove
}: Props) {
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
  }

  const onMoveUp = () => handleMoveUp(id)
  const onMoveDown = () => handleMoveDown(id)
  const onRemove = () => handleRemove(id)

  return (
    <Flex
      {...padding}
      {...attributes}
      ref={setNodeRef}
      direction={direction}
      align='start'
      gap='2'
      width='100%'
      style={style}
      className={clsx(styles.root, {
        [styles.sectionDragging]: isDragging
      })}
    >
      <Flex direction='column' gap='1' className={styles.actions}>
        <SortableSectionButton
          icon={<DragHandleDots2 />}
          tooltipContent='Drag'
          tooltipDisabled={isDragging}
          listeners={listeners}
        />
        <SortableSectionButton
          icon={<ChevronUpIcon width='17px' height='17px' />}
          tooltipContent='Move Up'
          tooltipDisabled={isDragging || !isUpMovable}
          isDisabled={!isUpMovable}
          onClick={onMoveUp}
        />
        <SortableSectionButton
          icon={<ChevronDownIcon width='17px' height='17px' />}
          tooltipContent='Move Down'
          tooltipDisabled={isDragging || !isDownMovable}
          isDisabled={!isDownMovable}
          onClick={onMoveDown}
        />

        <Separator orientation='horizontal' size='4' my='1' />

        <SortableSectionButton
          icon={<TrashIcon width='18px' height='18px' />}
          tooltipContent='Remove Section'
          tooltipDisabled={isDragging}
          color='red'
          onClick={onRemove}
        />
      </Flex>

      {children}
    </Flex>
  )
}

/* eslint-disable no-unused-vars */
type Props = PropsWithChildren<{
  id: UniqueIdentifier
  isUpMovable: boolean
  isDownMovable: boolean
  handleMoveUp: (id: UniqueIdentifier) => void
  handleMoveDown: (id: UniqueIdentifier) => void
  handleRemove: (id: UniqueIdentifier) => void
}>
