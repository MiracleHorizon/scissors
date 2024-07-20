import { Flex } from '@radix-ui/themes'

import { MainSection } from './sections/MainSection'
import { NegateSection } from './sections/NegateSection'
import { RotateSection } from './sections/RotateSection'
import { ModulateSection } from './sections/ModulateSection'
import { ResizeSection } from './sections/ResizeSection'
import { ExtendSection } from './sections/ExtendSection'
import { TrimSection } from './sections/TrimSection'

export const DocsContent = () => (
  <Flex
    asChild
    align='center'
    justify='center'
    direction='column'
    maxWidth='1920px'
    width='100%'
    gap='2'
  >
    <main>
      <MainSection />
      <NegateSection />
      <RotateSection />
      <ModulateSection />
      <ResizeSection />
      <ExtendSection />
      <TrimSection />
    </main>
  </Flex>
)
