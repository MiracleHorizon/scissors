import { Flex } from '@radix-ui/themes'

import { ResizeBackgroundPicker } from './resize-background-picker'
import { ResizeDominantBackground } from './resize-dominant-background'
import { ResizeCheckboxes } from './resize-checkboxes'
import { ResizeSelectList } from './resize-select-list'
import { useResizeStore } from '@stores/resize'

export function ResizeExtra() {
  const background = useResizeStore(state => state.background)

  return (
    <Flex direction='column' gap='2' width='100%'>
      <ResizeSelectList />
      {background && (
        <Flex direction='column' gap='3'>
          <ResizeBackgroundPicker background={background} />
          <ResizeDominantBackground />
        </Flex>
      )}
      <ResizeCheckboxes mt='1' />
    </Flex>
  )
}
