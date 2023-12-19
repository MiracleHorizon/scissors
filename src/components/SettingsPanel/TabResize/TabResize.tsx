import { Flex, type PaddingProps, Tabs } from '@radix-ui/themes'

import { ResizeHeader } from './ResizeHeader'
import { ResizeSizesForm } from './ResizeSizesForm'
import { ResizeExtra } from './ResizeExtra'
import { isDevelopment } from '@helpers/isDevelopment'

const padding: PaddingProps = {
  px: '3',
  pb: '2',
  pt: '4'
}

// TODO: Presets

// TODO: Extend
// TODO: Extract
// TODO: Trim
export function TabResize() {
  return (
    <Tabs.Content value='resize'>
      <Flex {...padding} asChild align='start' direction='column' gap='2'>
        <section>
          <Flex direction='column' gap='2' width='100%'>
            <ResizeHeader />
            <ResizeSizesForm />
            <ResizeExtra />
          </Flex>
          {isDevelopment() && <div>Presets</div>}
        </section>
      </Flex>
    </Tabs.Content>
  )
}
