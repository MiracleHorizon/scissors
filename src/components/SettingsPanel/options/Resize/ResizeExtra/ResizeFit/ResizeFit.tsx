import { Flex } from '@radix-ui/themes'

import { SelectResizeFit } from './SelectResizeFit'
import { ResizeFitExamplesPopover } from './ResizeFitExamplesPopover'

export function ResizeFit() {
  return (
    <Flex align='center' width='100%'>
      <SelectResizeFit />
      <ResizeFitExamplesPopover />
    </Flex>
  )
}
