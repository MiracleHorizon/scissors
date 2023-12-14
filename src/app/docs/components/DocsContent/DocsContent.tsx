import { Flex } from '@radix-ui/themes'

import { MainSection } from './sections/MainSection'
import { ResizeSection } from './sections/ResizeSection'
import { ModulateSection } from './sections/ModulateSection'
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
        <ResizeSection />
        <ModulateSection />
      </main>
    </Flex>
  )
}
