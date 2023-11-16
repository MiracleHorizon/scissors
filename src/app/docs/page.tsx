import { Flex } from '@radix-ui/themes'

import { DocsTable } from './components/DocsTable'
import { rows } from './static'
import styles from './page.module.css'

export default function DocsPage() {
  return (
    <Flex align='center' justify='start' direction='column' width='100%' p='5'>
      <Flex
        asChild
        width='100%'
        align='center'
        justify='center'
        direction='column'
        className={styles.content}
      >
        <main>
          <DocsTable rows={rows} />
        </main>
      </Flex>
    </Flex>
  )
}
