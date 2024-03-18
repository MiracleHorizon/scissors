import { Flex, type PaddingProps, ScrollArea } from '@radix-ui/themes'

import { Preview } from '@widgets/Preview'
import { SettingsPanel } from '@widgets/SettingsPanel'
import { AppFooter } from '@widgets/AppFooter'
import type { FlexDirection } from '@lib/theme'
import styles from './page.module.css'

const mainDirection: FlexDirection = {
  initial: 'column',
  md: 'row'
}
const mainPadding: PaddingProps = {
  pl: {
    initial: '0',
    md: '4'
  }
}

const HomePage = () => (
  <Flex width='100%' align='center' direction='column' className={styles.root}>
    <ScrollArea scrollbars='vertical' size='1' className={styles.scrollArea}>
      <Flex
        {...mainPadding}
        asChild
        justify='end'
        direction={mainDirection}
        width='100%'
        className={styles.main}
      >
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
