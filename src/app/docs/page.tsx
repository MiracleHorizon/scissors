import { Flex } from '@radix-ui/themes'

import { MainSection } from './components/MainSection'
import { ResizeSection } from './components/ResizeSection'
import { ModulateSection } from './components/ModulateSection'
import type { Padding } from '@libs/radix'

const px: Padding = {
  initial: '4',
  sm: '5',
  md: '6',
  lg: '8'
}
const pt: Padding = {
  initial: '4',
  sm: '5'
}
const pb: Padding = {
  initial: '6',
  sm: '7'
}

export default function DocsPage() {
  return (
    <Flex align='center' justify='start' direction='column' width='100%' pt={pt} pb={pb} px={px}>
      <Flex asChild align='center' justify='center' direction='column' gap='6' width='100%'>
        <main>
          <MainSection />
          <ResizeSection />
          <ModulateSection />
        </main>
      </Flex>
    </Flex>
  )
}
