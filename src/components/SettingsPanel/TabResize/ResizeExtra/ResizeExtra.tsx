'use client'

import { Flex } from '@radix-ui/themes'

import { ResizeBackgroundPopover } from './ResizeBackgroundPopover'
import { ResizeFit } from './ResizeFit'
import { ResizePosition } from './ResizePosition'
import { ResizeKernel } from './ResizeKernel'
import { ResizeSwitchers } from './ResizeSwitchers'
import { useResizeStore } from '@stores/resize'

export function ResizeExtra() {
  const background = useResizeStore(state => state?.background)
  const position = useResizeStore(state => state?.position)
  const kernel = useResizeStore(state => state?.kernel)

  return (
    <Flex
      direction={{
        initial: 'column',
        xs: 'row'
      }}
      width='100%'
      gap={{
        initial: '4',
        xs: '6'
      }}
    >
      <Flex direction='column' gap='2'>
        <ResizeFit />
        {background && <ResizeBackgroundPopover background={background} />}
        {position && <ResizePosition />}
        {kernel && <ResizeKernel />}
      </Flex>
      <ResizeSwitchers />
    </Flex>
  )
}
