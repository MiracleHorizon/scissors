import { Flex } from '@radix-ui/themes'

import { SwitchWithoutEnlargement } from './SwitchWithoutEnlargement'
import { SwitchWithoutReduction } from './SwitchWithoutReduction'
import { SwitchFastShrink } from './SwitchFastShrink'
import styles from './ResizeSwitchers.module.css'

export function ResizeSwitchers() {
  return (
    <Flex direction='column' gap='2' className={styles.root}>
      <SwitchFastShrink />
      <SwitchWithoutEnlargement />
      <SwitchWithoutReduction />
    </Flex>
  )
}
