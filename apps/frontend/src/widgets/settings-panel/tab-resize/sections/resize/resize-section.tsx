import { Flex } from '@radix-ui/themes'

import { ResizeHeader } from './resize-header'
import { ResizeSizesForm } from './resize-sizes-form'
import { ResizeExtra } from './resize-extra'
import { TabResizeSection } from '../../tab-resize-section'

export const ResizeSection = () => (
  <TabResizeSection>
    <>
      <ResizeHeader />
      <Flex direction='column' gap='3' width='100%'>
        <ResizeSizesForm />
        <ResizeExtra />
      </Flex>
    </>
  </TabResizeSection>
)
