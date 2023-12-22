'use client'

import { Flex } from '@radix-ui/themes'
import { HeightIcon, WidthIcon } from '@radix-ui/react-icons'

import { ResizeSizeInput } from './ResizeSizeInput'
import { useResizeStore } from '@stores/resize'
import {
  MAX_RESIZE_HEIGHT,
  MAX_RESIZE_WIDTH,
  MIN_RESIZE_SIZE,
  RESIZE_SIZE_STEP
} from '@server/Sharp'

export function ResizeSizesForm() {
  const width = useResizeStore(state => state.width)
  const height = useResizeStore(state => state.height)

  const setWidth = useResizeStore(state => state.setWidth)
  const setHeight = useResizeStore(state => state.setHeight)

  const resetWidth = useResizeStore(state => state.resetWidth)
  const resetHeight = useResizeStore(state => state.resetHeight)

  return (
    <Flex asChild align='center' gap='2' width='100%'>
      <form>
        <ResizeSizeInput
          value={width}
          setValue={setWidth}
          resetValue={resetWidth}
          min={MIN_RESIZE_SIZE}
          max={MAX_RESIZE_WIDTH}
          step={RESIZE_SIZE_STEP}
          placeholder='Width'
          icon={<WidthIcon />}
        />
        <ResizeSizeInput
          value={height}
          setValue={setHeight}
          resetValue={resetHeight}
          min={MIN_RESIZE_SIZE}
          max={MAX_RESIZE_HEIGHT}
          step={RESIZE_SIZE_STEP}
          placeholder='Height'
          icon={<HeightIcon />}
        />
      </form>
    </Flex>
  )
}
