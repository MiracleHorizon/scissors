'use client'

import { Flex } from '@radix-ui/themes'

import { ButtonAddResizeExtra } from './ButtonAddResizeExtra'
import { ButtonRemoveResizeExtra } from './ButtonRemoveResizeExtra'
import { ResizeBackgroundPopover } from './ResizeBackgroundPopover'
import { ResizeFit } from './ResizeFit'
import { ResizePosition } from './ResizePosition'
import { ResizeKernel } from './ResizeKernel'
import { ResizeSwitchers } from './ResizeSwitchers'
import { useResizeStore } from '@stores/resize'

export function ResizeExtra() {
  const isAdded = useResizeStore(state => state.extra !== null)
  const background = useResizeStore(state => state.extra?.background)
  const position = useResizeStore(state => state.extra?.position)
  const kernel = useResizeStore(state => state.extra?.kernel)

  if (!isAdded) {
    return <ButtonAddResizeExtra />
  }

  return (
    <Flex
      align='start'
      justify='between'
      gap={{
        initial: '3',
        xs: '0'
      }}
    >
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
      <ButtonRemoveResizeExtra />
    </Flex>
  )
}
