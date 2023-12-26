'use client'

import { Flex } from '@radix-ui/themes'

import { ResizeBackgroundPopover } from './ResizeBackgroundPopover'
import { SelectResizeFit } from './SelectResizeFit'
import { SelectResizePosition } from './SelectResizePosition'
import { SelectResizeKernel } from './SelectResizeKernel'
import { ResizeCheckboxes } from './ResizeCheckboxes'
import { useResizeStore } from '@stores/resize'

export function ResizeExtra() {
  const fit = useResizeStore(state => state.fit)
  const kernel = useResizeStore(state => state.kernel)
  const position = useResizeStore(state => state.position)
  const background = useResizeStore(state => state.background)

  return (
    <Flex direction='column' gap='2' width='100%'>
      <Flex
        direction={{
          initial: 'column',
          xs: 'row'
        }}
        gap='2'
      >
        {fit && <SelectResizeFit />}
        {kernel && <SelectResizeKernel />}
        {position && <SelectResizePosition />}
      </Flex>

      {background && <ResizeBackgroundPopover background={background} />}

      <ResizeCheckboxes mt='3' />
    </Flex>
  )
}
