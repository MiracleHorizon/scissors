'use client'

import { Flex } from '@radix-ui/themes'

import { ResizeExtra } from './ResizeExtra'
import { ResizeHeader } from './ResizeHeader'
import { ResizeSizesForm } from './ResizeSizesForm'
import { ButtonAddResize } from './ButtonAddResize'
import { useResizeStore } from '@stores/resize'

export function Resize() {
  const isAdded = useResizeStore(state => state.isAdded)

  return (
    <Flex asChild align='start' direction='column' gap='2'>
      <section>
        {isAdded ? (
          <Flex direction='column' gap='2' width='100%'>
            <ResizeHeader />
            <ResizeSizesForm />
            <ResizeExtra />
          </Flex>
        ) : (
          <ButtonAddResize />
        )}
      </section>
    </Flex>
  )
}
