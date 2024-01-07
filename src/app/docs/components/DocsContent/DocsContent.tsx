import { Flex } from '@radix-ui/themes'

import { MainSection } from './sections/MainSection'
import { NegateSection } from './sections/NegateSection'
import { RotateSection } from './sections/RotateSection'
import { ResizeSection } from './sections/ResizeSection'
import { ModulateSection } from './sections/ModulateSection'
import { ExtendSection } from './sections/ExtendSection'
import styles from './DocsContent.module.css'

export function DocsContent() {
  return (
    <Flex
      asChild
      align='center'
      justify='center'
      direction='column'
      gap='6'
      width='100%'
      className={styles.root}
    >
      <main>
        <MainSection />
        <NegateSection />
        <RotateSection />
        <ResizeSection />
        <ExtendSection />
        <ModulateSection />
      </main>
    </Flex>
  )
}
