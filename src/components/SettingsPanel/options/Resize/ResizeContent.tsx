import { Flex } from '@radix-ui/themes'

import { ResizeExtra } from './ResizeExtra'
import { ResizeHeader } from './ResizeHeader'
import { ResizeSizesForm } from './ResizeSizesForm'

export function ResizeContent() {
  return (
    <Flex direction='column' gap='2' width='100%'>
      <ResizeHeader />
      <ResizeSizesForm />
      <ResizeExtra />
    </Flex>
  )
}
