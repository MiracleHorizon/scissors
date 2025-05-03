import { Flex } from '@radix-ui/themes'

import { RotateHeader } from './RotateHeader'
import { SliderRotateAngle } from './SliderRotateAngle'
import { RotateBackgroundPopover } from './RotateBackgroundPopover'
import styles from './RotateContent.module.css'

export const RotateContent = () => (
  <Flex direction='column' gap='2' width='100%' className={styles.root}>
    <RotateHeader />
    <Flex direction='column' align='start' gap='4' width='100%'>
      <SliderRotateAngle />
      <RotateBackgroundPopover />
    </Flex>
  </Flex>
)
