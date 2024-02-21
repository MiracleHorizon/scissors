import { Flex } from '@radix-ui/themes'

import { RotateHeader } from './RotateHeader'
import { SliderRotateAngle } from './SliderRotateAngle'
import { RotateBackgroundPopover } from './RotateBackgroundPopover'
import { RotateDominantBackground } from './RotateDominantBackground'
import styles from './RotateContent.module.css'

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
