'use client'

import { Flex } from '@radix-ui/themes'

import { ResizeContent } from './ResizeContent'
import { ButtonAddResize } from './ButtonAddResize'
import { useResizeStore } from '@stores/resize'

export function Resize() {
  const isAdded = useResizeStore(state => state.isAdded)

  return (
    <Flex asChild align='start' direction='column' gap='2'>
      <section>{isAdded ? <ResizeContent /> : <ButtonAddResize />}</section>
    </Flex>
  )
}
