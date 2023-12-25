import { Flex, type PaddingProps } from '@radix-ui/themes'

import { ResizeHeader } from './ResizeHeader'
import { ResizeSizesForm } from './ResizeSizesForm'
import { ResizeExtra } from './ResizeExtra'

const padding: PaddingProps = {
  px: '3',
  pb: '2',
  pt: '4'
}

export function Resize() {
  return (
    <Flex {...padding} asChild align='start' direction='column' gap='2'>
      <section>
        <Flex direction='column' gap='2' width='100%'>
          <ResizeHeader />
          <ResizeSizesForm />
          <ResizeExtra />
        </Flex>
      </section>
    </Flex>
  )
}
