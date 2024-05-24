import { memo } from 'react'
import { Flex } from '@radix-ui/themes'
import { clsx } from 'clsx'

import { DragHandleDots2Icon } from '@scissors/react-icons/DragHandleDots2Icon'

import styles from './DragHandle.module.css'

const DragHandleGutter = () => <Flex flexGrow='1' className={styles.gutter} />

interface Props {
  isPortrait: boolean
}

export const DragHandle = memo(({ isPortrait }: Props) => (
  <Flex
    height='100%'
    align='center'
    direction={isPortrait ? 'row' : 'column'}
    className={clsx(styles.root, isPortrait ? styles.portrait : styles.landscape)}
  >
    <DragHandleGutter />
    <Flex flexShrink='0' className={styles.gutterThumb}>
      <DragHandleDots2Icon />
    </Flex>
    <DragHandleGutter />
  </Flex>
))

DragHandle.displayName = 'DragHandle'
