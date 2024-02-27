import { Flex } from '@radix-ui/themes'

import { WidthIcon } from '@ui/icons/WidthIcon'
import { HeightIcon } from '@ui/icons/HeightIcon'
import { OptionNumberInput } from '@components/OptionNumberInput'
import { useResizeStore } from '@stores/resize'
import {
  MAX_RESIZE_HEIGHT,
  MAX_RESIZE_WIDTH,
  MIN_RESIZE_SIZE,
  RESIZE_SIZE_STEP
} from '@server/sharp'

const defaultInputProps = {
  min: MIN_RESIZE_SIZE,
  step: RESIZE_SIZE_STEP
}

export function ResizeSizesForm() {
  const width = useResizeStore(state => state.width)
  const height = useResizeStore(state => state.height)

  const setWidth = useResizeStore(state => state.setWidth)
  const setHeight = useResizeStore(state => state.setHeight)

  return (
    <Flex asChild align='center' gap='2' width='100%'>
      <form>
        <OptionNumberInput
          {...defaultInputProps}
          value={width}
          setValue={setWidth}
          max={MAX_RESIZE_WIDTH}
          placeholder='Width'
          icon={<WidthIcon />}
        />
        <OptionNumberInput
          {...defaultInputProps}
          value={height}
          setValue={setHeight}
          max={MAX_RESIZE_HEIGHT}
          placeholder='Height'
          icon={<HeightIcon />}
        />
      </form>
    </Flex>
  )
}
