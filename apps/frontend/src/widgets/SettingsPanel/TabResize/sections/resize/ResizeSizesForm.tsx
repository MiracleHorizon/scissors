import { Flex } from '@radix-ui/themes'

import {
  MAX_RESIZE_HEIGHT,
  MAX_RESIZE_WIDTH,
  MIN_RESIZE_SIZE,
  RESIZE_SIZE_STEP
} from '@scissors/sharp'
import { WidthIcon } from '@scissors/react-icons/WidthIcon'
import { HeightIcon } from '@scissors/react-icons/HeightIcon'

import { NumberInput } from '@components/NumberInput'
import { useResizeStore } from '@stores/resize'

const defaultInputProps = {
  min: MIN_RESIZE_SIZE,
  step: RESIZE_SIZE_STEP
} as const

export const ResizeSizesForm = () => {
  const width = useResizeStore(state => state.width)
  const height = useResizeStore(state => state.height)

  const setWidth = useResizeStore(state => state.setWidth)
  const setHeight = useResizeStore(state => state.setHeight)

  return (
    <Flex asChild align='center' gap='2' width='100%'>
      <form>
        <NumberInput
          {...defaultInputProps}
          label='Width'
          value={width}
          setValue={setWidth}
          max={MAX_RESIZE_WIDTH}
          placeholder='1920'
          data-cy='input-resize-width'
          icon={<WidthIcon />}
        />
        <NumberInput
          {...defaultInputProps}
          label='Height'
          value={height}
          setValue={setHeight}
          max={MAX_RESIZE_HEIGHT}
          placeholder='1080'
          data-cy='input-resize-height'
          icon={<HeightIcon />}
        />
      </form>
    </Flex>
  )
}
