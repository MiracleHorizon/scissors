import { Flex, ScrollArea } from '@radix-ui/themes'

import { Preview } from '@widgets/preview'
import { SettingsPanel } from '@widgets/settings-panel'
import { AppFooter } from '@widgets/app-footer'
import type { FlexDirection } from '@lib/theme'
import styles from './page.module.css'

const mainDirection: FlexDirection = {
  initial: 'column',
  md: 'row'
} as const

const HomePage = () => (
  <Flex width='100%' align='center' direction='column' className={styles.root}>
    <ScrollArea scrollbars='vertical' size='1' className={styles.scrollArea}>
      <Flex asChild justify='end' direction={mainDirection} width='100%' className={styles.main}>
        <main>
          <Preview />
          <SettingsPanel />
        </main>
      </Flex>
    </ScrollArea>
    <AppFooter />
  </Flex>
)

export default HomePage
