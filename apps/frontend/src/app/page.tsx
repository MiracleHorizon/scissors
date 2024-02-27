import { Box, Flex, type PaddingProps } from '@radix-ui/themes'

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
  <Box width='100%'>
    <Flex width='100%' align='center' direction='column'>
      <Flex
        asChild
        justify='end'
        direction={mainDirection}
        width='100%'
        className={styles.main}
        {...mainPadding}
      >
        <main>
          <Preview />
          <SettingsPanel />
        </main>
      </Flex>
      <AppFooter />
    </Flex>
  </Box>
)

export default HomePage
