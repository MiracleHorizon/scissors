import { Flex } from '@radix-ui/themes'

import { DragHandleDots2Icon } from '@ui/icons/DragHandleDots2Icon'
import styles from './DragHandle.module.css'

export const DragHandle = () => (
  <Flex direction='column' align='center' height='100%' className={styles.root}>
    <div className={styles.gutter} />
    <div className={styles.gutterThumb}>
      <DragHandleDots2Icon />
    </div>
    <div className={styles.gutter} />
  </Flex>
)

