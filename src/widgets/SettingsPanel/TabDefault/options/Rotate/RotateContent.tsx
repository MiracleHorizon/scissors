'use client'

import { Flex } from '@radix-ui/themes'

import { RotateHeader } from './RotateHeader'
import { SliderRotateAngle } from './SliderRotateAngle'
import { RotateBackgroundPopover } from './RotateBackgroundPopover'
import { SwitchDominantBackground } from './SwitchDominantBackground'

export function RotateContent() {
  return (
    <Flex direction='column' gap='2' width='100%'>
      <RotateHeader />
      <Flex direction='column' align='start' gap='4' width='100%'>
        <SliderRotateAngle />
        <Flex direction='column' justify='between' gap='3' width='100%'>
          <SwitchDominantBackground />
          <RotateBackgroundPopover />
        </Flex>
      </Flex>
    </Flex>
  )
}
