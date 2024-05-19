import { Flex } from '@radix-ui/themes'

import { RotateHeader } from './rotate-header'
import { SliderRotateAngle } from './slider-rotate-angle'
import { RotateBackgroundPopover } from './rotate-background-popover'
import { RotateDominantBackground } from './rotate-dominant-background'
import styles from './rotate-content.module.css'

export const RotateContent = () => (
  <Flex direction='column' gap='2' width='100%' className={styles.root}>
    <RotateHeader />
    <Flex direction='column' align='start' gap='4' width='100%'>
      <SliderRotateAngle />
      <Flex direction='column' justify='between' gap='3' width='100%'>
        <RotateDominantBackground />
        <RotateBackgroundPopover />
      </Flex>
    </Flex>
  </Flex>
)
