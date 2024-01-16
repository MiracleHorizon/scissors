import { Flex } from '@radix-ui/themes'

import { SelectResizeFit } from './SelectResizeFit'
import { SelectResizePosition } from './SelectResizePosition'
import { SelectResizeKernel } from './SelectResizeKernel'
import { useResizeStore } from '@stores/resize'
import type { FlexDirection } from '@lib/theme'

const direction: FlexDirection = {
  initial: 'column',
  xs: 'row'
}

export function ResizeSelectList() {
  const fit = useResizeStore(state => state.fit)
  const kernel = useResizeStore(state => state.kernel)
  const position = useResizeStore(state => state.position)

  return (
    <Flex direction={direction} gap='2'>
      {fit && <SelectResizeFit />}
      {kernel && <SelectResizeKernel />}
      {position && <SelectResizePosition />}
    </Flex>
  )
}
