'use client'

import { Flex } from '@radix-ui/themes'

import { ButtonAddRotate } from './ButtonAddRotate'
import { ButtonRemoveRotate } from './ButtonRemoveRotate'
import { SliderRotateAngle } from './SliderRotateAngle'
import { RotateBackgroundPopover } from './RotateBackgroundPopover'
import { useConvertStore } from '@stores/convert'

export function Rotate() {
  const rotate = useConvertStore(state => state.rotate)

  return (
    <Flex asChild align='start' direction='column' gap='2'>
      <section>
        {rotate ? (
          <>
            <Flex gap='4' align='center' width='100%'>
              <SliderRotateAngle />
              <ButtonRemoveRotate />
            </Flex>
            <RotateBackgroundPopover />
          </>
        ) : (
          <ButtonAddRotate />
        )}
      </section>
    </Flex>
  )
}
