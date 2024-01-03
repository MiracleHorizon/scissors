import { Flex, type PaddingProps } from '@radix-ui/themes'
import type { Metadata } from 'next'

import { ButtonBackTop } from '@ui/ButtonBackTop'
import { DocsContent } from './components/DocsContent'
import { DocsNavigation } from './components/DocsNavigation'

export const metadata: Metadata = {
  title: 'Documentation'
}

const padding: PaddingProps = {
  px: {
    initial: '4',
    sm: '5',
    md: '6',
    lg: '8'
  },
  pb: {
    initial: '6',
    sm: '7'
  }
}

export default function DocsPage() {
  return (
    <>
      <ButtonBackTop visibilityOffset={400} />

      <Flex
        {...padding}
        align='start'
        justify='center'
        direction='row-reverse'
        width='100%'
        height='100%'
      >
        <DocsNavigation />
        <DocsContent />
      </Flex>
    </>
  )
}
