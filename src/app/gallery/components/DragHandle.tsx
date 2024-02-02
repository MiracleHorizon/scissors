import { type FC, memo } from 'react'
import { Flex } from '@radix-ui/themes'
import { clsx } from 'clsx/lite'

import { DragHandleDots2Icon } from '@ui/icons/DragHandleDots2Icon'
import styles from './DragHandle.module.css'

const DragHandleGutter = () => <Flex grow='1' className={styles.gutter} />

export const DragHandle: FC<Props> = memo(({ isPortrait }) => (
  <Flex
    height='100%'
    align='center'
    direction={isPortrait ? 'row' : 'column'}
    className={clsx(styles.root, isPortrait ? styles.portrait : styles.landscape)}
  >
    <DragHandleGutter />
    <Flex shrink='0' className={styles.gutterThumb}>
      <DragHandleDots2Icon />
    </Flex>
    <DragHandleGutter />
  </Flex>
))

DragHandle.displayName = 'DragHandle'

interface Props {
  isPortrait: boolean
}
