import dynamic from 'next/dynamic'
import { Flex } from '@radix-ui/themes'
import type { PaddingProps } from '@radix-ui/themes/props'
import type { Metadata } from 'next'

import { ButtonBackTop } from '@ui/ButtonBackTop'
import { DocsContent } from './components/DocsContent'

const DocsNavigation = dynamic(() => import('./components/DocsNavigation'), {
  ssr: false
})

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
} as const

const DocsPage = () => (
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

export default DocsPage
