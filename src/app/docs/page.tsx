import { Flex } from '@radix-ui/themes'

import { DocsTable } from './components/DocsTable'
import { rows } from './static'
import type { Padding } from '@libs/radix'

const px: Padding = {
  initial: '4',
  xs: '4',
  sm: '5',
  md: '6',
  lg: '8',
  xl: '8'
}

export default function DocsPage() {
  return (
    <Flex align='center' justify='start' direction='column' width='100%' py='4' px={px}>
      <Flex asChild align='center' justify='center' direction='column' width='100%'>
        <main>
          <DocsTable rows={rows} />
        </main>
      </Flex>
    </Flex>
  )
}
