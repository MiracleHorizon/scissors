import { useSortable } from '@dnd-kit/sortable'
import { Flex, IconButton, type PaddingProps, Separator, Tooltip } from '@radix-ui/themes'
import { CSS } from '@dnd-kit/utilities'
import { clsx } from 'clsx'
import type { CSSProperties, PropsWithChildren } from 'react'
import type { UniqueIdentifier } from '@dnd-kit/core'

import { TrashIcon } from '@ui/icons/TrashIcon'
import { ChevronUpIcon } from '@ui/icons/ChevronUpIcon'
import { ChevronDownIcon } from '@ui/icons/ChevronDownIcon'
import { isTooltipOpen } from '@helpers/isTooltipOpen'
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
    zIndex: isDragging ? 10 : 1
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
      <Flex direction='column' gap='1'>
        <IconButton {...listeners} radius='large' size='1' variant='surface' color='gray'>
          <svg
            width='15'
            height='15'
            viewBox='0 0 15 15'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M5.5 4.625C6.12132 4.625 6.625 4.12132 6.625 3.5C6.625 2.87868 6.12132 2.375 5.5 2.375C4.87868 2.375 4.375 2.87868 4.375 3.5C4.375 4.12132 4.87868 4.625 5.5 4.625ZM9.5 4.625C10.1213 4.625 10.625 4.12132 10.625 3.5C10.625 2.87868 10.1213 2.375 9.5 2.375C8.87868 2.375 8.375 2.87868 8.375 3.5C8.375 4.12132 8.87868 4.625 9.5 4.625ZM10.625 7.5C10.625 8.12132 10.1213 8.625 9.5 8.625C8.87868 8.625 8.375 8.12132 8.375 7.5C8.375 6.87868 8.87868 6.375 9.5 6.375C10.1213 6.375 10.625 6.87868 10.625 7.5ZM5.5 8.625C6.12132 8.625 6.625 8.12132 6.625 7.5C6.625 6.87868 6.12132 6.375 5.5 6.375C4.87868 6.375 4.375 6.87868 4.375 7.5C4.375 8.12132 4.87868 8.625 5.5 8.625ZM10.625 11.5C10.625 12.1213 10.1213 12.625 9.5 12.625C8.87868 12.625 8.375 12.1213 8.375 11.5C8.375 10.8787 8.87868 10.375 9.5 10.375C10.1213 10.375 10.625 10.8787 10.625 11.5ZM5.5 12.625C6.12132 12.625 6.625 12.1213 6.625 11.5C6.625 10.8787 6.12132 10.375 5.5 10.375C4.87868 10.375 4.375 10.8787 4.375 11.5C4.375 12.1213 4.87868 12.625 5.5 12.625Z'
              fill='currentColor'
              fillRule='evenodd'
              clipRule='evenodd'
            />
          </svg>
        </IconButton>

        <Tooltip
          content='Move Up'
          open={isTooltipOpen({
            isParentDisabled: !isUpMovable,
            content: 'Move Up'
          })}
        >
          <IconButton
            disabled={!isUpMovable}
            radius='large'
            size='1'
            variant='surface'
            color='gray'
            onClick={onMoveUp}
          >
            <ChevronUpIcon width='17px' height='17px' />
          </IconButton>
        </Tooltip>

        <Tooltip
          content='Move Down'
          open={isTooltipOpen({
            isParentDisabled: !isDownMovable,
            content: 'Move Down'
          })}
        >
          <IconButton
            disabled={!isDownMovable}
            radius='large'
            size='1'
            variant='surface'
            color='gray'
            onClick={onMoveDown}
          >
            <ChevronDownIcon width='17px' height='17px' />
          </IconButton>
        </Tooltip>

        <Separator orientation='horizontal' size='4' my='1' />

        <Tooltip content='Remove Section'>
          <IconButton radius='large' size='1' variant='surface' color='red' onClick={onRemove}>
            <TrashIcon width='18px' height='18px' />
          </IconButton>
        </Tooltip>
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
