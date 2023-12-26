'use client'

import { Flex } from '@radix-ui/themes'

import { ResizeBackgroundPopover } from './ResizeBackgroundPopover'

import { ResizeCheckboxes } from './ResizeCheckboxes'
import { ResizeSelectList } from './ResizeSelectList'
import { useResizeStore } from '@stores/resize'

export function ResizeExtra() {
  const background = useResizeStore(state => state.background)

  return (
    <Flex direction='column' gap='2' width='100%'>
      <ResizeSelectList />
      {background && <ResizeBackgroundPopover background={background} />}
      <ResizeCheckboxes mt='2' />
    </Flex>
  )
}
