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
    gap='6'
    width='100%'
    maxWidth='1920px'
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
