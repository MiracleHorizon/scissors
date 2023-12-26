import { Flex } from '@radix-ui/themes'

import { ResizeHeader } from './ResizeHeader'
import { ResizeSizesForm } from './ResizeSizesForm'
import { ResizeExtra } from './ResizeExtra'
import { TabResizeSection } from '../TabResizeSection'

export function Resize() {
  return (
    <TabResizeSection>
      <Flex direction='column' gap='2' width='100%'>
        <ResizeHeader />
        <ResizeSizesForm />
        <ResizeExtra />
      </Flex>
    </TabResizeSection>
  )
}
