import { Flex } from '@radix-ui/themes'

import { SelectResizeFit } from './select-resize-fit'
import { SelectResizePosition } from './select-resize-position'
import { SelectResizeKernel } from './select-resize-kernel'
import { useResizeStore } from '@stores/resize'
import type { FlexDirection } from '@lib/theme'

const direction: FlexDirection = {
  initial: 'column',
  xs: 'row'
} as const

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
