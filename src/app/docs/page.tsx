import { Flex, type PaddingProps } from '@radix-ui/themes'

import { MainSection } from './components/MainSection'
import { ResizeSection } from './components/ResizeSection'
import { ModulateSection } from './components/ModulateSection'

const padding: PaddingProps = {
  px: {
    initial: '4',
    sm: '5',
    md: '6',
    lg: '8'
  },
  pt: {
    initial: '4',
    sm: '5'
  },
  pb: {
    initial: '6',
    sm: '7'
  }
}

export default function DocsPage() {
  return (
    <Flex align='center' justify='start' direction='column' width='100%' {...padding}>
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
