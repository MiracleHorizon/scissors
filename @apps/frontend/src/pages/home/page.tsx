import { Flex, ScrollArea } from '@radix-ui/themes'

import { ImagePreview } from '@widgets/ImagePreview'
import { SettingsPanel } from '@widgets/SettingsPanel'
import { ProcessingFooter } from '@widgets/ProcessingFooter'
import { AiAssistant } from '@components/ai-assistant'
import type { FlexDirection } from '@lib/theme'
import styles from './page.module.css'

const mainDirection: FlexDirection = {
  initial: 'column',
  md: 'row'
} as const

const HomePage = () => (
  <Flex width='100%' align='center' direction='column' className={styles.root}>
    <div className={styles.aiAssistant}>
      <AiAssistant />
    </div>

    <ScrollArea scrollbars='vertical' size='1' className={styles.scrollArea}>
      <Flex asChild justify='end' direction={mainDirection} width='100%' className={styles.main}>
        <main>
          <ImagePreview />
          <SettingsPanel />
        </main>
      </Flex>
    </ScrollArea>

    <ProcessingFooter />
  </Flex>
)

export default HomePage
