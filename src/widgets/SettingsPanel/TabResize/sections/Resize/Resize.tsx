import { Flex } from '@radix-ui/themes'

import { ResizeHeader } from './ResizeHeader'
import { ResizeSizesForm } from './ResizeSizesForm'
import { ResizeExtra } from './ResizeExtra'
import { TabResizeSection } from '@widgets/SettingsPanel/TabResize/TabResizeSection'

export const Resize = () => (
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